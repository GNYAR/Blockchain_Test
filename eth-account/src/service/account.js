const contract = require('truffle-contract');
const ItemList = require('../../build/contracts/ItemList.json');
const Web3 = require('web3');

const web3 = new Web3(
    new Web3.providers.HttpProvider('http://127.0.0.1:7501')
)

const ItemContract = contract(ItemList);
ItemContract.setProvider(web3.currentProvider);
const Item = ItemContract.deployed();

module.exports = {
    fetchAllItem: async () => {
        const items = new Array();
        await Item.then(async (value) => {
            const count = await value.itemCount();
            for (let i = 0; i < count; i++) {
                const item = await value.items(i);
                items.push(Object.keys(item)
                    .reduce((obj, key) => {
                        if(key === 'id' || key === 'amount' || key === 'date')
                            obj[key] = item[key].toNumber();
                        else if('0' > key || key > '9')
                            obj[key] = item[key];
                        return obj;
                    }, new Object())
                );
            }
        });
        return items;
    },
    fetchItem: async (id) => {
        const result = await Item.then(async (value) => {
            const item = await value.items(id);
            return Object.keys(item).reduce((obj, key) => {
                if(key === 'id' || key === 'amount' || key === 'date')
                    obj[key] = item[key].toNumber();
                else if('0' > key || key > '9')
                    obj[key] = item[key];
                return obj;
            }, new Object());
        });
        return result;
    },
    createItem: async (json) => {
        const item = new Object();
        await Item.then(async (value) => {
            const result = await value.createItem(
                json.id,
                json.category,
                json.name,
                json.amount,
                json.content,
                json.fileName,
                json.author,
                json.date,
                {from: '0x7Df000F275E95011ee749956fF9A11db010Dd3D3'}
            );
            const event = result.logs[0].args;
            item['id'] = event.id.toNumber();
            item['category'] = event.category;
            item['name'] = event.name;
        });
        return item;
    }
}

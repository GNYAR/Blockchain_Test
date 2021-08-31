const ItemList = artifacts.require("ItemList");

module.exports = function (deployer) {
    deployer.deploy(ItemList);
}
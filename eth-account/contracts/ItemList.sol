pragma solidity ^0.5.0;

contract ItemList {
    uint public itemCount = 0;

    struct Item {
        uint id;
        string category;
        string name;
        int amount;
        string content;
        string fileName;
        string author;
        uint256 date;
    }
    
    mapping(uint => Item) public items;

    event ItemCreated (
        uint id,
        string category,
        string name
    );

    constructor() public {
        createItem(
            0,
            '一般開銷',
            '文具用品',
            -56,
            '原子筆 14元 * 4枝 = 56元',
            '收據',
            '財務長 1110634029',
            1629994446
        );
    }

    function createItem(
        uint _id,
        string memory _category,
        string memory _name,
        int _amount,
        string memory _content,
        string memory _fileName,
        string memory _author,
        uint256 _date // (timestamp / 1000)
    ) public {
        itemCount++;
        items[_id] = Item(
            _id,
            _category,
            _name,
            _amount,
            _content,
            _fileName,
            _author,
            _date
        ); 
        emit ItemCreated(_id, _category, _name);
    }
}
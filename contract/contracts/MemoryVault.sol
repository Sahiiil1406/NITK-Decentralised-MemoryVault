// SPDX-License-Identifier: GPL-3.0
pragma solidity ^0.8.27;

import "hardhat/console.sol";

contract Owner {
    uint private counter = 1;

    struct Memory {
        uint id;
        address owner;
        string ipfshash;
        string title;
        string description;
        uint256 filecoinId;
        uint timeStamp;
        string memoryType;
    }

    event MemoryCreated(
        uint256 indexed memoryId,
        address indexed creator,
        string ipfsHash,
        string memoryType,
        uint256 timestamp,
        string title
    );
    event TagAdded(
        uint256 indexed memoryId,
        string tag
    );

    mapping(uint256 => Memory) public memories;
    mapping(address => uint256[]) public userMemories;

    function createMemory(
        string memory _ipfsHash,
        string memory _memoryType,
        string[] memory _tags,
        string memory _title,
        string memory _description,
        uint _timestamp
    ) public {
        memories[counter] = Memory({
            id: counter,
            owner: msg.sender,
            ipfshash: _ipfsHash,
            title: _title,
            description: _description,
            filecoinId: 0,  // Initialize to 0 until updated
            timeStamp: _timestamp,
            memoryType: _memoryType
        });

        userMemories[msg.sender].push(counter);

        emit MemoryCreated(counter, msg.sender, _ipfsHash, _memoryType, _timestamp,_title);
        for (uint i = 0; i < _tags.length; i++) {
            emit TagAdded(counter, _tags[i]);
        }
        counter++;
    }

    function getMemoryByAddress(address _owner) public view returns (uint256[] memory) {
        return userMemories[_owner];
    }

    function updateFilecoin(uint256 _memoryId, uint256 _filecoinId) public {
        require(memories[_memoryId].owner == msg.sender, "Only the owner can update Filecoin ID");
        memories[_memoryId].filecoinId = _filecoinId;
    }

    function getMemoryById(uint _id) public view returns (
        uint id,
        address owner,
        string memory ipfshash,
        string memory title,
        string memory description,
        uint256 filecoinId,
        uint timeStamp,
        string memory memoryType
    ) {
        Memory storage memoryData = memories[_id];
        return (
            memoryData.id,
            memoryData.owner,
            memoryData.ipfshash,
            memoryData.title,
            memoryData.description,
            memoryData.filecoinId,
            memoryData.timeStamp,
            memoryData.memoryType
        );
    }
}

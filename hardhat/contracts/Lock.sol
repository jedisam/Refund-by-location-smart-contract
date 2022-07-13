// SPDX-License-Identifier: MIT

pragma solidity 0.8.9;

// Contract definition
contract SimpleStorage {
    // this will get initialized as 0
    uint256 public favoriteNumber;

    struct People {
        uint256 favoriteNumber;
        string name;
    }

    People[] public people;

    function store(uint256 _favoriteNumber) public {
        favoriteNumber = _favoriteNumber;
    }

    // view func ex
    function retrieve() public view returns (uint256) {
        return favoriteNumber;
    }

    // Pure function ex
    function retrive2(uint256 favNum) public pure {
        favNum + favNum;
    }

    function addPerson(string memory _name, uint256 _favoriteNumber) public {
        people.push(People({favoriteNumber: _favoriteNumber, name: _name}));
    }
}

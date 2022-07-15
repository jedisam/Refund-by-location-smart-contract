//SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.0;

import "hardhat/console.sol";

contract Refund {
    address owner;
    struct EmployeeDetail {
        string name;
        uint256 lat;
        uint256 lon;
    }
    mapping (address => EmployeeDetail) employeeDetail;
    mapping(address => bool) public employeeCondition;
    address[] public employees;


    constructor() {
        owner = msg.sender;
        console.log("Deploying a Refund with Owner:", owner);
    }

    function createEmployee(address empAddress, string memory name, uint256 lat, uint256 lon) public {
        // restrict employee creation to owner
        require(msg.sender == owner);
        // set User name using the employeeDetail mapping
        employeeDetail[empAddress].name = name;
        // set Employee lat using the userStructs mapping
        employeeDetail[empAddress].lat = lat;
        // set Employee lon using the employeeDetail mapping
        employeeDetail[empAddress].lon = lon;
        // push user address into userAddresses array
        employees.push(empAddress);
    }



    
    function getEmployeeDetail(address empAddress) public view returns (string memory, uint256, uint256) {
        return (employeeDetail[empAddress].name, employeeDetail[empAddress].lat, employeeDetail[empAddress].lon);
    }
}

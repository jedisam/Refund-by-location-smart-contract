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
    
    // Find the square root of a number using the Babylonian method
    function sqrt(uint x) public pure returns (uint y) {
    uint z = (x + 1) / 2;
    y = x;
        while (z < y) {
            y = z;
            z = (x / z + z) / 2;
        }
        return y;
    }

    function calculateDistance(uint256 lat2, uint256 lon2) public view returns (uint256 dist)
    {
   
        // The math module contains a function
        // named toRadians which converts from
        // degrees to radians.
        (,uint256 lat1, uint256 lon1) = getEmployeeDetail(msg.sender);

        uint256 distance = uint256(sqrt((lat2 - lat1) ** 2 + (lon2 - lon1) ** 2));
        return uint256(distance);
        // uint256 latCal;
        // uint256 lonCal;
        // lon1 =  lon1 * 3.14 / 180;
        // lon2 = lon2 * 3.14 / 180;
        // lat1 = lat1 * 3.14 / 180;
        // lat2 = lat2 * 3.14 / 180;
   
        // Haversine formula
        // uint256 dlon = lon2 - lon1;
        // uint256 dlat = lat2 - lat1;
        // uint256 a = Math.pow(Math.sin(dlat / 2), 2)
        //          + Math.cos(lat1) * Math.cos(lat2)
        //          * Math.pow(Math.sin(dlon / 2),2);
               
        // uint256 c = 2 * Math.asin(Math.sqrt(a));
   
        // Radius of earth in kilometers. 
        // uint256 r = 6371;
   
        // calculate the result
        // return(c * r);

    }
}
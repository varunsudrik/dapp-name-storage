// SPDX-License-Identifier: MIT
pragma solidity >=0.5.0 <0.9.0;

contract NameStorage {
    string public data;

    function setter(string memory _data) public {
        data = _data;
    }

    function getter() public view returns (string memory) {
        return data;
    }
}

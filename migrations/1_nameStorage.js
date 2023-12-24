var NameStorage = artifacts.require("./NameStorage.sol");

module.exports = function (deployer) {
  deployer.deploy(NameStorage);
};

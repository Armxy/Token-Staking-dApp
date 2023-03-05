const MotherToken = artifacts.require('MotherToken');
const TokenStaking = artifacts.require('TokenStaking');

module.exports = async function(deployer, network, accounts) {
  //deploying TesToken
  await deployer.deploy(MotherToken);
  //fetching back MotherToken address
  const MTHRToken = await MotherToken.deployed();

  //deploying staking contract, passing token address
  await deployer.deploy(TokenStaking, MTHRToken.address);
  const tokenStaking = await TokenStaking.deployed();

  //transfer 500k MotherToken to smart contract for rewards
  await MTHRToken.transfer(tokenStaking.address, '500000000000000000000000');

  //   sending 1000 MotherTokens to User and Creator for test , investor is second address
  await MTHRToken.transfer(accounts[1], '1000000000000000000000');
};

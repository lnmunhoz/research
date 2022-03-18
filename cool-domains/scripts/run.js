// hre -> Hardhat Runtime Environment

const main = async () => {
  const [owner, randomPerson] = await hre.ethers.getSigners();
  const domainContractFactory = await hre.ethers.getContractFactory("Domains");
  const domainContract = await domainContractFactory.deploy();
  await domainContract.deployed();
  console.log("Contract deployed to:", domainContract.address);
  console.log("Contract deployed by:", owner.address);

  const registerTx = await domainContract.register("mydomain");
  await registerTx.wait();

  const domainOwner = await domainContract.getAddress("mydomain");
  console.log("Owner of domain: ", domainOwner);

  // Trying to set a record that doesn't belong to me!
  let txn = await domainContract
    .connect(randomPerson)
    .setRecord("doom", "Haha my domain now!");
  await txn.wait();

  // const setRecordTx = await domainContract.setRecord("mydomain", "helloworld");
  // await setRecordTx.wait();

  // const setRecordTx2 = await domainContract.setRecord("mydomain", "itworks");
  // await setRecordTx2.wait();

  // const mydomainRecords = await domainContract.getRecord("mydomain");

  // console.log("mydomain records: ", mydomainRecords);

  // Returns 0x000000000000 if not found, apparently?
  // const randomDomainOwner = await domainContract.getAddress("xyz");
  // console.log("randomDomainOwner: ", randomDomainOwner);
};

const runMain = async () => {
  try {
    await main();
    process.exit(0);
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

runMain();

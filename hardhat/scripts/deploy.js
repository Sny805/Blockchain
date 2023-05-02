const {ethers}=require("hardhat");


async function main()
{
  const SimpleStorageFactory=await ethers.getContractFactory("SimpleStorage");
  console.log("Deploying contract....");
  const simpleStorage=await SimpleStorageFactory.deploy();

  await simpleStorage.deployed();
  console.log(`Contract Address :${simpleStorage.address}`)

  const currentValue=await simpleStorage.retrieve();
  console.log(`Current Value is: ${currentValue}`);

  
  // Update the current value
  const transactionResponse=await simpleStorage.store(7);
  await transactionResponse.wait(1);
  const updatedValue=await simpleStorage.retrieve();
  console.log(`Updated value is :${updatedValue}`);

}

async function verify(contractAddress,args)
{

}

main().then(()=>process.exit(0))
.catch((error)=>{
  console.error(error);
  process.exit(1);
})
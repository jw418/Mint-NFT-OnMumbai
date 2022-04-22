const CONTRACT_ADDRESS = "0xac37016103cD68f8E2ba7762771795dB16E4b96F"
const META_DATA_URL = "ipfs://bafyreibxidunkrugtcfckodstcehn5tur32frgyx6yzb6qcl5mbnhyfn7q/metadata"

async function mintNFT(contractAddress, metaDataURL) {
   const ExampleNFT = await ethers.getContractFactory("ExampleNFT")
   const [owner] = await ethers.getSigners()
   await ExampleNFT.attach(contractAddress).mintNFT(owner.address, metaDataURL)
   console.log("NFT minted to: ", owner.address)
}

mintNFT(CONTRACT_ADDRESS, META_DATA_URL)
   .then(() => process.exit(0))
   .catch((error) => {
       console.error(error);
       process.exit(1);
   });
import { deployments, getNamedAccounts, ethers } from "hardhat";
import { TokenERC721} from "../../typechain";
import { Address, Deployment } from "hardhat-deploy/types";
import { BigNumber } from "ethers";
import { parseUnits } from "ethers/lib/utils";

interface ResourcesConfig {
  tier: number;
  resources: Address[];
  quantity: BigNumber;
}

const delay = (ms: number) => {
  return new Promise((resolve) => setTimeout(resolve, ms));
};

const main = async () => {
  const { deployer } = await getNamedAccounts();

  const tokenERC721: Deployment = await deployments.get("TokenERC721");
  const tokenERC721Deployed: TokenERC721 = await ethers.getContractAt(
    "TokenERC721",
    tokenERC721.address
  );

  const uri: string =
    "ipfs://<METADATA CID>";
  
  const address: string =
    "<Addres who receive NFT>";
  
  delay(5000);
  // batch mint for Jacket
  let tx = await tokenERC721Deployed.safeMint(
    address,
    uri,
    { gasLimit: 6100000 }
  );
  console.log(tx);
  delay(5000);
};

main();
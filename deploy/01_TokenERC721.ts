import { ethers, run } from "hardhat";
import { DeployFunction } from "hardhat-deploy/types";
import { HardhatRuntimeEnvironment } from "hardhat/types";
import { constants } from "ethers";

const delay = (ms: number) => {
  return new Promise((resolve) => setTimeout(resolve, ms));
};

const deploy: DeployFunction = async function (hre: HardhatRuntimeEnvironment) {
  const { deployments, getNamedAccounts } = hre;
  const { deployer } = await getNamedAccounts();
  const { deploy } = deployments;

const _tokenName = "<Token Name>";
const _tokenSymbol = "<Token Symbol>";

  const tokenerc721 = await deploy("TokenERC721", {
    from: deployer,
    args: [
      _tokenName,
      _tokenSymbol
    ],
    log: true,
    waitConfirmations: 10,
  });

  console.log("TokenERC721 deployed at: ", tokenerc721.address);
  await delay(5000);
  const tokenerc721Impl = await deployments.get("TokenERC721_Implementation");
  
  
  await run("verify:verify", {
    address: tokenerc721Impl.address,
    contract: "contracts/TokenERC721.sol:TokenERC721",
  });
  
};

deploy.tags = ["TokenERC721"];
export default deploy;
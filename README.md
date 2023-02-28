## Token ERC721

# Fill .env file

```shell
DEPLOYER_PRIVATE_KEY1 = ""
RPC_URL = ""
BSC_TESTNET_URL = ""

ETHERSCAN_API_KEY = ""
COINMARKETCAP_API_KEY = ""
```
# Deploy

```shell
npx hardhat deploy --network <blockchain-network> --tags TokenERC721
```

# Mint

```shell
npx hardhat --network <blockchain-network> run scripts/mint.ts
```

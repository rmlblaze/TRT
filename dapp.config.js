const RPC_URL = process.env.NEXT_PUBLIC_ALCHEMY_RPC_URL
const Alch_key = process.env.NEXT_PUBLIC_ALCH_KEY

const config = {
  title: 'test dapp',
  description: 'test minting Dapp',
  contractAddress: '0xD269198fAF3FB6a9C276d592c6a4B5A7A8bFEa57',
  maxMintAmount: 4,
  WlMaxMintAmount: 6,
  firstCost :0 ,
  wlcost: 0.002,
  publicSalePrice:0.001,
  maxPerTxWL : 3
}

const onboardOptions = {
  dappId: process.env.NEXT_PUBLIC_DAPP_ID,
  networkId: 5, // Goerli
  darkMode: true,
  walletSelect: {
    description:'Please select a wallet',
    wallets: [
      { walletName: 'metamask', preferred: true },
      {
    walletName: "walletConnect",
    infuraKey: Alch_key
  }
    ]
  },
  walletCheck: [
    { checkName: 'derivationPath' },
    { checkName: 'accounts' },
    { checkName: 'connect' },
    { checkName: 'network' }
  ]
}

export { config, onboardOptions }
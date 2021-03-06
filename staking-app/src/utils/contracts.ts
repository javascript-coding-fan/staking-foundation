import store from '../logic/reducers';
import wallet from './wallet';
import { getContractAddress, ContractAddress } from './address';
import { Networks } from './constants';
const usdcAbi = require('./abis/usdc.json');
const usdtAbi = require('./abis/usdt.json');
const bscTokenAbi = require('./abis/bscToken.json');
const stakingAbi = require('./abis/staking.json');
const mmcCrossETHAbi = require('./abis/mmcCrossETH.json');
const mmcCrossMaticAbi = require('./abis/mmcCrossMatic.json');
const rewardERC20Abi = require('./abis/rewardERC20.json');

export const usdcContract = new wallet.web3.eth.Contract(
  usdcAbi['abi'],
  getContractAddress().mUsdc
);

export const usdtContract = new wallet.web3.eth.Contract(
  usdtAbi['abi'],
  getContractAddress().mUsdt
);

export const rptStakingContract = new wallet.web3.eth.Contract(
  stakingAbi['abi'],
  getContractAddress().mStaking
);

export const getUsdcContract = () => {
  const { network } = store.getState().user;

  switch (network) {
    case Networks.ropsten:
      return new wallet.web3.eth.Contract(
        usdcAbi['abi'],
        ContractAddress.ropsten.mUsdc
      );

    case Networks.mainnet:
      return new wallet.web3.eth.Contract(
        usdcAbi['abi'],
        ContractAddress.mainnet.mUsdc
      );

    case Networks.bscTestnet:
      return new wallet.web3.eth.Contract(
        bscTokenAbi['abi'],
        ContractAddress.bscTestnet.mUsdc
      );

    case Networks.bscMainnet:
      return new wallet.web3.eth.Contract(
        bscTokenAbi['abi'],
        ContractAddress.bscMainnet.mUsdc
      );

    case Networks.maticTestnet:
      return new wallet.web3.eth.Contract(
        usdcAbi['abi'],
        ContractAddress.maticTestnet.mUsdc
      );

    case Networks.maticMainnet:
      return new wallet.web3.eth.Contract(
        usdcAbi['abi'],
        ContractAddress.maticMainnet.mUsdc
      );

    default:
      return new wallet.web3.eth.Contract(
        usdcAbi['abi'],
        ContractAddress.mainnet.mUsdc
      );
  }
};

export const getUsdtContract = () => {
  const { network } = store.getState().user;

  switch (network) {
    case Networks.ropsten:
      return new wallet.web3.eth.Contract(
        usdtAbi['abi'],
        ContractAddress.ropsten.mUsdt
      );

    case Networks.mainnet:
      return new wallet.web3.eth.Contract(
        usdtAbi['abi'],
        ContractAddress.mainnet.mUsdt
      );

    case Networks.bscTestnet:
      return new wallet.web3.eth.Contract(
        bscTokenAbi['abi'],
        ContractAddress.bscTestnet.mUsdt
      );

    case Networks.bscMainnet:
      return new wallet.web3.eth.Contract(
        bscTokenAbi['abi'],
        ContractAddress.bscMainnet.mUsdt
      );

    case Networks.maticTestnet:
      return new wallet.web3.eth.Contract(
        usdtAbi['abi'],
        ContractAddress.maticTestnet.mUsdt
      );

    case Networks.maticMainnet:
      return new wallet.web3.eth.Contract(
        usdtAbi['abi'],
        ContractAddress.maticMainnet.mUsdt
      );

    default:
      return new wallet.web3.eth.Contract(
        usdtAbi['abi'],
        ContractAddress.mainnet.mUsdt
      );
  }
};

export const getBusdContract = () => {
  const { network } = store.getState().user;

  switch (network) {
    case Networks.bscTestnet:
      return new wallet.web3.eth.Contract(
        bscTokenAbi['abi'],
        ContractAddress.bscTestnet.busd
      );

    case Networks.bscMainnet:
      return new wallet.web3.eth.Contract(
        bscTokenAbi['abi'],
        ContractAddress.bscMainnet.busd
      );

    default:
      return new wallet.web3.eth.Contract(
        bscTokenAbi['abi'],
        ContractAddress.bscMainnet.busd
      );
  }
};

export const getStakingContract = () => {
  const { network } = store.getState().user;

  switch (network) {
    case Networks.maticTestnet:
      return new wallet.web3.eth.Contract(
        stakingAbi['abi'],
        ContractAddress.maticTestnet.staking
      );

    case Networks.maticMainnet:
      return new wallet.web3.eth.Contract(
        stakingAbi['abi'],
        ContractAddress.maticMainnet.staking
      );

    default:
      return new wallet.web3.eth.Contract(
        stakingAbi['abi'],
        ContractAddress.maticTestnet.staking
      );
  }
};

export const getCrossETHContract = () => {
  const { network } = store.getState().user;

  switch (network) {
    case Networks.maticTestnet:
      return new wallet.web3.eth.Contract(
        mmcCrossETHAbi['abi'],
        ContractAddress.maticTestnet.mmcCrossETH
      );

    case Networks.maticMainnet:
      return new wallet.web3.eth.Contract(
        usdcAbi['abi'],
        ContractAddress.maticMainnet.mmcCrossETH
      );

    default:
      return new wallet.web3.eth.Contract(
        mmcCrossETHAbi['abi'],
        ContractAddress.maticTestnet.mmcCrossETH
      );
  }
};

export const getCrossMaticContract = () => {
  const { network } = store.getState().user;

  switch (network) {
    case Networks.maticTestnet:
      return new wallet.web3.eth.Contract(
        mmcCrossMaticAbi['abi'],
        ContractAddress.maticTestnet.mmcCrossMatic
      );

    case Networks.maticMainnet:
      return new wallet.web3.eth.Contract(
        mmcCrossMaticAbi['abi'],
        ContractAddress.maticMainnet.mmcCrossMatic
      );

    default:
      return new wallet.web3.eth.Contract(
        mmcCrossMaticAbi['abi'],
        ContractAddress.maticTestnet.mmcCrossMatic
      );
  }
};

export const getRewardERC20Contract = () => {
  const { network } = store.getState().user;

  switch (network) {
    case Networks.maticTestnet:
      return new wallet.web3.eth.Contract(
        rewardERC20Abi['abi'],
        ContractAddress.maticTestnet.rewardERC20
      );

    case Networks.maticMainnet:
      return new wallet.web3.eth.Contract(
        rewardERC20Abi['abi'],
        ContractAddress.maticMainnet.rewardERC20
      );

    default:
      return new wallet.web3.eth.Contract(
        rewardERC20Abi['abi'],
        ContractAddress.maticTestnet.rewardERC20
      );
  }
};

import { Users } from '../database/models'

import {
  ContractAddress,
  mumbaiNet,
  RELAYER_GAS,
  RELAYER_GAS_PRICE
} from '../utils'

const stakingAbi = require('../utils/abis/staking.json')
const Web3 = require('web3')

export const withdrawController = () => {

  const stakingAddr = ContractAddress.polygonTestnet.staking

  const withdraw = async (req, res, next) => {
    const userAddr = req.body.walletAddress

    const web3Mumbai = new Web3(new Web3.providers.HttpProvider(mumbaiNet))
    const stakingContract = new web3Mumbai.eth.Contract(stakingAbi, stakingAddr)
    let data = await Users.findOne({ where: { userAddr } })

    if (data.length > 0) {
      try {
        const res = await stakingContract.method.withdraw(data.tokenIds)
          .send({
            from: userAddr,
            gasPrice: RELAYER_GAS_PRICE,
            gas: RELAYER_GAS,
          })
        console.log('list nfts', res)

      } catch (error) {
        console.log(error)
      }
    }
  }

  const withdrawBatch = async (req, res, next) => {
    const userAddr = req.body.walletAddress
    var tokenList = req.body.tokenList

    const web3Mumbai = new Web3(new Web3.providers.HttpProvider(mumbaiNet))
    const stakingContract = new web3Mumbai.eth.Contract(stakingAbi, stakingAddr)
    try {
      const data = await stakingContract.method.withdrawBatch(tokenList)
        .send({
          from: userAddr,
          gasPrice: RELAYER_GAS_PRICE,
          gas: RELAYER_GAS,
        })
      console.log('list nfts', data)

    } catch (error) {
      console.log(error)
    }
  }

  return { withdraw, withdrawBatch }
};

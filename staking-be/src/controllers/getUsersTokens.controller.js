import { Users } from '../database/models'

import {
  ContractAddress,
  ethMainNet,
} from '../utils'

const mmcAbi = require('../utils/abis/mmc.json')
const Web3 = require('web3')

export const getUsersTokensController = () => {

  const mmcAddr = ContractAddress.mainnet.mmc

  const getUsersTokenIds = async (req, res, next) => {

    const web3MainEth = new Web3(new Web3.providers.HttpProvider(ethMainNet))
    const mmcContract = new web3MainEth.eth.Contract(mmcAbi, mmcAddr)

    try {
      const maxTokens = await mmcContract.methods.MAX_TOKENS().call()
      const maxTokensNum = 1 * maxTokens;
      for (let tokenIds = 0; tokenIds < maxTokensNum; tokenIds++) {
        const walletAddress = await mmcContract.methods.ownerOf(tokenIds).call()
        console.log('list Tokens', walletAddress)
        let data = await Users.findOne({ where: { tokenIds } })
        if (!data) {
          data = await Users.create({ walletAddress, tokenIds });
        } else {
          return res.status(400).json({ error: 'Request Failed.' })
        }

      }
      res.status(200).json({ success: "Success" })
    } catch (error) {
      console.log(error)
    }
  }

  const getUserTokens = async (req, res, next) => {
    const walletAddress = req.body.userAddress
    console.log(walletAddress)

    if (!walletAddress) {
      return res.status(400).json({ error: 'Walletaddress is incorrect' })
    } else {
      let data = await Users.findAll({ where: { walletAddress } })
      let tokenList = []

      if (data.length > 0) {
        for (let i = 0; i < data.length; i++) {
          tokenList.push(data[i].tokenIds)
        }
      }

      if (!data) {
        return res.status(400).json({ error: 'This useraddress has no any tokens.' })
      } else {
        console.log('token Id list -----', tokenList)
        return res.status(200).json({ data: tokenList })
      }
    }

  }

  return { getUsersTokenIds, getUserTokens }
};

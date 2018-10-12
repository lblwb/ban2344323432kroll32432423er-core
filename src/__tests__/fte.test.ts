import { IpfsTransportProvider, DirectTransportProvider } from 'dc-messaging'
import { config } from 'dc-configs'
import { Eth as Ethereum } from 'dc-ethereum-utils'

import Bankroller from '../dapps/Bankroller'
import { GlobalGameLogicStore, DApp } from 'dc-core'
import { Logger } from 'dc-logging'
import { loadLogic } from '../dapps/FileUtils'


const logger = new Logger('test1')
const directTransportProvider = new DirectTransportProvider()
const startBankroller = async () => {
  try {
    const bankrollerTransportProvider = directTransportProvider // await IpfsTransportProvider.create()
    return await new Bankroller().start(bankrollerTransportProvider)
  } catch (error) {
    logger.debug(error)
    process.exit()
  }
}
const startGame = async () => {
  try {
    const gameTransportProvider = directTransportProvider // await IpfsTransportProvider.createAdditional()

    const {
      gasPrice: price,
      gasLimit: limit,
      web3HttpProviderUrl: httpProviderUrl,
      contracts,
    } = config
    const Eth = new Ethereum({
      httpProviderUrl,
      ERC20ContractInfo: contracts.ERC20,
      gasParams: { price, limit },
      privateKey:
        '0x6A5AE922FDE5C8EE877E9470F45B8030F60C19038E9116DB8B343782D9593602',
    })

    const dappManifest = require( config.DAppsPath + '/FTE1/dapp.manifest.js' )
    // Game loaded to store during bankroller start
    const gameLogicFunction = new GlobalGameLogicStore().getGameLogic(dappManifest.slug)
    const dappParams = {
      slug         : dappManifest.slug,
      contract     : dappManifest.contract,
      rules        : dappManifest.rules,
      roomProvider : gameTransportProvider,
      gameLogicFunction,
      Eth
    }
    await Eth.initAccount()
    const dapp = new DApp(dappParams)
    const dappInstance = await dapp.startClient()
    return { game: dappInstance, Eth }
  } catch (error) {
    logger.debug(error)
    process.exit()
  }
}
const test1 = async () => {
  await startBankroller()
  const { game, Eth } = await startGame()
  const showFunc = (source, data) => {
    logger.debug(`${source} ${new Date().toString()} ${JSON.stringify(data)}`)
  }
  game.onPeerEvent('info', data => showFunc('Bankroller', data))
  game.on('info', data => showFunc('Client', data))
  await game.openChannel({
    playerAddress: Eth.getAccount().address,
    playerDeposit: 3,
    gameData: [0, 0],
  })

  const result1 = await game.callPeerGame({
    userBet: 1,
    gameData: [1],
  })
  const result2 = await game.callPeerGame({
    userBet: 1,
    gameData: [2],
  })
  const result3 = await game.callPeerGame({
    userBet: 1,
    gameData: [3],
  })
}
test1()

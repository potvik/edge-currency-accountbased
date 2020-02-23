/* global */
// @flow

import type { EdgeCurrencyInfo, EdgeCorePluginOptions } from 'edge-core-js/types'

import type { EthereumSettings } from './ethTypes.js'
import { makeEthereumBasedPluginInner } from './ethBasedPlugin'
export const imageServerUrl = 'https://developer.airbitz.co/content'

const defaultNetworkFees = {
  default: {
    gasLimit: {
      regularTransaction: '21000',
      tokenTransaction: '200000'
    },
    gasPrice: {
      lowFee: '59240000',
      standardFeeLow: '59240000', // TODO: check this values
      standardFeeHigh: '59240000',
      standardFeeLowAmount: '59240000',
      standardFeeHighAmount: '59240000',
      highFee: '59240000'
    }
  }
}

const otherSettings: EthereumSettings = {
  etherscanApiServers: [
    'https://blockscout.com/rsk/mainnet'
  ],
  iosAllowedTokens: { RIF: true },
  uriNetworks: ['rsk', 'rbtc'],
  ercTokenStandard: 'RRC20',
  chainId: 30,
  defaultNetworkFees
}

const defaultSettings: any = {
  customFeeSettings: ['gasLimit', 'gasPrice'],
  otherSettings
}

export const rskCurrencyInfo: EdgeCurrencyInfo = {
  // Basic currency information:
  currencyCode: 'RBTC',
  displayName: 'RSK',
  pluginName: 'rsk',
  walletType: 'wallet:rsk',

  defaultSettings,

  addressExplorer: 'https://explorer.rsk.co/address/%s',
  transactionExplorer: 'https://explorer.rsk.co/tx/%s',

  denominations: [
    // An array of Objects of the possible denominations for this currency
    {
      name: 'RBTC',
      multiplier: '1000000000000000000',
      symbol: 'RBTC'
    }
  ],
  symbolImage: `${imageServerUrl}/rsk-logo-solo-64.png`, // TODO: add logo
  symbolImageDarkMono: `${imageServerUrl}/rsk-logo-solo-64.png`,
  metaTokens: [
    // Array of objects describing the supported metatokens
    {
      currencyCode: 'RIF',
      currencyName: 'RIF Token',
      denominations: [
        {
          name: 'RIF',
          multiplier: '1000000000000000000'
        }
      ],
      contractAddress: '0x2acc95758f8b5f583470ba265eb685a8f45fc9d5',
      symbolImage: `${imageServerUrl}/rif-logo-solo-64.png` // TODO: add rif logo
    }
  ]
}


export const makeRskPlugin = (opts: EdgeCorePluginOptions) => {
  return makeEthereumBasedPluginInner(opts, rskCurrencyInfo)
}
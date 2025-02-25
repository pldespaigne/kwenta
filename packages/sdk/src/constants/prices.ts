import { formatBytes32String } from '@ethersproject/strings'

import { V2_MARKETS_LIST } from './futures'

// Additional commonly used currencies to fetch, besides the one returned by the SynthUtil.synthsRates
export const ADDITIONAL_SYNTHS = [
	'SNX',
	'ETH',
	'BTC',
	'LINK',
	'SOL',
	'AVAX',
	'MATIC',
	'EUR',
	'AAVE',
	'UNI',
	'XAU',
	'XAG',
	'APE',
	'DYDX',
	'BNB',
	'XMR',
	'DOGE',
	'OP',
	'ATOM',
	'FLOW',
	'FTM',
	'NEAR',
	'AXS',
	'AUD',
	'GBP',
].map(formatBytes32String)

export const PYTH_IDS = {
	mainnet: V2_MARKETS_LIST.filter((m) => !!m.pythIds).map((m) => m.pythIds!.mainnet) as string[],
	testnet: V2_MARKETS_LIST.filter((m) => !!m.pythIds).map((m) => m.pythIds!.testnet) as string[],
}

// Allow to be set from config so users can customise
export const PRICE_UPDATE_THROTTLE = 1000

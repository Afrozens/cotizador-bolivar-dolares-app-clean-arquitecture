interface _labelsUrl {
  a: string
  a1: string
  b: string
  c: string
  d: string
  e: string
}
interface _timestampUrl {
  epoch: string
  fecha: string
  fecha_corta: string
  fecha_corta2: string
  fecha_nice: string
  dia: string
  dia_corta: string
}
interface UsdUrl {
  transferencia: string
  transfer_cucuta: string
  efectivo: string
  efectivo_real: string
  efectivo_cucuta: string
  promedio: string
  promedio_real: string
  cencoex: string
  sicad1: string
  sicad2: string
  bitcoin_ref: string
  localbitcoin_ref: string
  dolartoday: string
}

export interface ApiDolarToday {
  _labels: _labelsUrl
  _timestamp: _timestampUrl
  USD: UsdUrl
}

export interface Coin {
  name: string,
  price: number,
  image?: HTMLImageElement
}

export const coinsEmptyState: Coin[] = [
  {
    name: '',
    price: 0.0,
  },
  {
    name: '',
    price: 0.0,
  },
]

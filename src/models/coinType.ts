export interface ApiDolarToday {
  _labels: string[]
  _timestamp: string[]
  USD: number[]
}

export interface Coin {
    name: string
    price: number
}

export const coinEmptyState: Coin = {
    name: "",
    price: 0.00
}
import { ApiDolarToday } from '@/models'

export const todayAdapter = (data: ApiDolarToday)  => {
  return {
    dolarToday: data._labels.a,
    priceToday: data.USD.transferencia,
    dolarBcv: data._labels.c,
    priceBcv: data.USD.sicad2,
    day: data._timestamp.dia,
    dateShort: data._timestamp.fecha_corta,
    epoch: data._timestamp.epoch,
  }
}

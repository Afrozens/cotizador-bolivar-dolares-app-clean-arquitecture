import { ApiDolarToday } from '@/models'

export const todayAdapter = (data: ApiDolarToday)  => {
  return {
    nameToday: data._labels.a,
    priceToday: data.USD.transferencia,
    nameBcv: data._labels.c,
    priceBcv: data.USD.sicad2,
    day: data._timestamp.dia,
    dateShort: data._timestamp.fecha_corta,
    epoch: data._timestamp.epoch,
  }
}

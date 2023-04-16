import { todayAdapter } from '@/adapters'

export const todayURL = 'https://s3.amazonaws.com/dolartoday/data.json'

export const todayFetch = async (url: string) => {
  return fetch(url)
    .then((res) => res.json())
    .then((data) => {
        //destructuring in object
      const dataApi = {
        _labels: data._labels,
        _timestamp: data._timestamp,
        USD: data.USD,
      }
      return todayAdapter(dataApi)
    })
}

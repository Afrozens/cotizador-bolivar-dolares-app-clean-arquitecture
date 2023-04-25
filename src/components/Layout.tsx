import { Outlet } from 'react-router-dom'
import { useQuery } from '@tanstack/react-query'
import { todayFetch, todayURL } from '@/services'
import { useEffect } from 'react'
import Header from './Header'
import { useDispatch } from 'react-redux'
import { readPrices } from '@/app/slices/todaySlice'
import { getTime } from '@/app/slices/timeSlice'
import Preloader from './Preloader'

const Layout = () => {
  const dispatch = useDispatch()
  const { data, isLoading, isError, error } = useQuery({
    queryKey: ['data'],
    queryFn: () => todayFetch(todayURL),
    refetchOnWindowFocus: true,
    cacheTime: 0,
    staleTime: 0,
  })

  useEffect(() => {
    if (data) {
      dispatch(
        readPrices([
          {
            name: data.nameToday,
            price: data.priceToday,
          },
          {
            name: data.nameBcv,
            price: data.priceBcv,
          },
        ])
      )
      dispatch(
        getTime({
          day: data.day,
          dateShort: data.dateShort,
          epoch: data.epoch,
        })
      )
    }
  }, [data])

  return (
    <>
      <Preloader isLoading={isLoading} isError={isError} error={error} />
      <Header />
      <Outlet />
    </>
  )
}

export default Layout

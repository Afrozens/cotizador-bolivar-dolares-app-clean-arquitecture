import { Link, Outlet } from 'react-router-dom'
import { useQuery } from '@tanstack/react-query'
import {todayFetch, todayURL} from "@/services"
import Exchange from "@/assets/Exchange.png"
import iconHamburger from "@/assets/icons/IconHamburger.svg"

const Header = () => {
 const { data, isLoading, isError } = useQuery({
   queryKey: ["data"],
   queryFn: () => todayFetch(todayURL),
   refetchOnWindowFocus: true,
   cacheTime: 0,
   staleTime: 0,
 })

 console.log(data)
  return (
    <>
      <header className="h-16 w-full fixed top-0 left-0 flex justify-between  items-center py-4 bg-third shadow-md z-40 px-8">
        <div className="text-center cursor-pointer hover:scale-110 transition">
          <Link to="/">
            <img src={Exchange} alt="exchange logotype" className="object-cover h-8 w-8 mx-auto"/>
          </Link>
          <h3 className="ml-2 grow shrink-0 basis-44 font-medium uppercase">
            Cotiza Bs a $
          </h3>
        </div>
        <img src={iconHamburger} alt="hamburger icon" className="w-12 h-12 cursor-pointer hover:scale-110 transition"/>
      </header>
      <Outlet />
    </>
  )
}

export default Header
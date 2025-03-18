import React from 'react'
import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuIndicator,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
    NavigationMenuViewport,
  } from "@/components/ui/navigation-menu"
  import { Button } from "@/components/ui/button"


const Nav = () => {
  return (
    <>
    <div className='flex justify-between items-center bg-[#262973] text-white p-4 w-full'>
        <h1>AdminCash</h1>
        <NavigationMenu className='flex text-black'>
            <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuTrigger>¿Que es AdminCash?</NavigationMenuTrigger>
                  <NavigationMenuContent>
                      <NavigationMenuLink>Link</NavigationMenuLink>
                  </NavigationMenuContent>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <NavigationMenuTrigger>Aprender</NavigationMenuTrigger>
                  <NavigationMenuContent>
                      <NavigationMenuLink>Link</NavigationMenuLink>
                  </NavigationMenuContent>
                </NavigationMenuItem>
            </NavigationMenuList>
        </NavigationMenu>
        <div>
          <Button className='bg-[#4DA838] text-black rounded-md px-8 py-2'>Log in</Button>
          <button className='bg-[#FFD700] text-black rounded-md py-2'>Sign In</button>
        </div>
        

    </div>
    

    </>
  )
}

export default Nav
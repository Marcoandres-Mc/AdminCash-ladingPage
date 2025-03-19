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

  import Link from "next/link"

  import { cn } from "@/lib/utils";


const Nav = () => {

  const components = [
    {
      title: "Alert Dialog",
      href: "/docs/primitives/alert-dialog",
      description:
        "A modal dialog that interrupts the user with important content and expects a response.",
    },
    {
      title: "Hover Card",
      href: "/docs/primitives/hover-card",
      description:
        "For sighted users to preview content available behind a link.",
    },
    {
      title: "Progress",
      href: "/docs/primitives/progress",
      description:
        "Displays an indicator showing the completion progress of a task, typically displayed as a progress bar.",
    },
    {
      title: "Scroll-area",
      href: "/docs/primitives/scroll-area",
      description: "Visually or semantically separates content.",
    },
    {
      title: "Tabs",
      href: "/docs/primitives/tabs",
      description:
        "A set of layered sections of content—known as tab panels—that are displayed one at a time.",
    },
    {
      title: "Tooltip",
      href: "/docs/primitives/tooltip",
      description:
        "A popup that displays information related to an element when the element receives keyboard focus or the mouse hovers over it.",
    },
  ]
  return (
    <>
      <div className='flex justify-between items-center bg-[#1D8647] text-white p-4 w-full'>
        <a href="/">
          <div className='flex items-center'>
            <svg className='w-[30px]' xmlns="http://www.w3.org/2000/svg" version="1.0" width="42.0pt" height="42.0pt" viewBox="0 0 42.0 42.0" preserveAspectRatio="xMidYMid meet">
              <g transform="translate(0.000000,42.000000) scale(0.100000,-0.100000)" fill="#f1f1f1" stroke="none">
                <path d="M305 368 c-60 -21 -94 -73 -79 -120 6 -19 6 -19 30 3 13 12 25 34 25 48 1 18 3 20 6 8 4 -14 8 -16 19 -6 8 7 14 7 14 1 0 -5 -8 -13 -17 -17 -17 -7 -16 -8 2 -15 18 -8 17 -9 -7 -9 -27 -1 -62 -36 -52 -53 10 -16 53 -7 83 17 26 22 71 115 71 145 0 13 -57 11 -95 -2z"/>
                <path d="M67 295 c-52 -18 -54 -21 -26 -51 34 -37 72 -54 118 -54 73 0 81 69 11 105 -35 18 -53 18 -103 0z m119 -67 c-14 -9 -32 -10 -23 -2 3 4 -4 15 -16 25 -22 19 -22 19 14 2 23 -11 32 -21 25 -25z"/>
                <path d="M231 184 c-1 -14 -10 -24 -25 -28 -14 -3 -28 -16 -32 -29 -4 -12 -16 -28 -26 -36 -12 -8 -18 -21 -15 -32 4 -13 -2 -19 -22 -22 -14 -2 44 -4 129 -4 85 -1 147 1 137 4 -13 3 -17 11 -14 23 6 22 -18 60 -39 60 -8 0 -23 9 -34 20 -11 11 -26 20 -34 20 -8 0 -17 10 -19 23 -4 21 -4 21 -6 1z"/>
              </g>
            </svg>
            <h1 className='text-3xl font-medium p-2'>AdminCash</h1>
          </div>
        </a>
        
        <NavigationMenu>
          <NavigationMenuList>
            <NavigationMenuItem>
              <NavigationMenuTrigger>Iniciando</NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid gap-3 p-4 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                  <li className="row-span-3">
                    <NavigationMenuLink asChild>
                      <a
                        className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                        href="/que-es-adminCash"
                      >
                        <div className="mb-2 mt-4 text-lg font-medium">
                             ¿Que es adminCash?
                        </div>
                        <p className="text-sm leading-tight text-muted-foreground">
                          Beautifully designed components built with Radix UI and
                          Tailwind CSS.
                        </p>
                      </a>
                    </NavigationMenuLink>
                  </li>
                  <ListItem href="/docs" title="Introduction">
                    Re-usable components built using Radix UI and Tailwind CSS.
                  </ListItem>
                  <ListItem href="/docs/installation" title="Installation">
                    How to install dependencies and structure your app.
                  </ListItem>
                  <ListItem href="/docs/primitives/typography" title="Typography">
                    Styles for headings, paragraphs, lists...etc
                  </ListItem>
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <NavigationMenuTrigger>Components</NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
                  {components.map((component) => (
                    <ListItem
                      key={component.title}
                      title={component.title}
                      href={component.href}
                    >
                      {component.description}
                    </ListItem>
                  ))}
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link href="/docs" legacyBehavior passHref>
                <NavigationMenuLink>
                  Documentation
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
        <Link href="/" className="text-white">
          Log in
        </Link>
          <button className='bg-[#FFD700] text-black rounded-md py-2 ml-2'>Sign In</button>
      </div>
    </>
  )
}

const ListItem = (({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  )
})
ListItem.displayName = "ListItem"

export default Nav
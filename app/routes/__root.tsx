// app/routes/__root.tsx
import {
  Link,
  Outlet,
  ScrollRestoration,
  createRootRoute,
} from '@tanstack/react-router'
import { Meta, Scripts } from '@tanstack/start'
import type { ReactNode } from 'react'
import appCss from '../app.css?url'
// Supports weights 100-900
import leagueSpartan from '@fontsource-variable/league-spartan?url'
import { BookOpenCheck } from 'lucide-react'

export const Route = createRootRoute({
  head: () => ({
    meta: [
      {
        charSet: 'utf-8',
      },
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1',
      },
      {
        title: 'TanStack Start Starter',
      },
    ],
    links: [
      {
        rel: 'stylesheet', 
        href: appCss,
      },
      {
        rel: 'stylesheet', 
        href: leagueSpartan,
      },
    ],
  }),
  component: RootComponent,
})

function RootComponent() {
  return (
    <RootDocument>
      <Outlet />
    </RootDocument>
  )
}

function RootDocument({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <html>
      <head>
        <Meta />
      </head>
      <body>
        <nav className='bg-[#111] p-4 h-20 text-[#ff4500] flex items-center justify-between'>
          <Link to='/' className='flex gap-1 items-center text-2xl'>
            <BookOpenCheck className='text-[#fffaf0]'/>
            <h1 className='logo pl-2'>Grammateion</h1>
          </Link>
        </nav>
        {children}
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  )
}
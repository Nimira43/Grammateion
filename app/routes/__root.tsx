// app/routes/__root.tsx
import {
  Outlet,
  ScrollRestoration,
  createRootRoute,
} from '@tanstack/react-router'
import { Meta, Scripts } from '@tanstack/start'
import type { ReactNode } from 'react'
import appCss from '../app.css?url'
// Supports weights 100-900
import leagueSpartan from '@fontsource-variable/league-spartan?url'
import greatVibes from '@fontsource/great-vibes?url'
import frederickaTheGreat from '@fontsource/fredericka-the-great?url'

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
      {
        rel: 'stylesheet', 
        href: greatVibes,
      },
      {
        rel: 'stylesheet', 
        href: frederickaTheGreat,
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
        {children}
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  )
}
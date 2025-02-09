// app/routes/__root.tsx
import {
  Link,
  Outlet,
  ScrollRestoration,
  createRootRoute,
  useNavigate,
} from '@tanstack/react-router'
import { Meta, Scripts } from '@tanstack/start'
import type { ReactNode } from 'react'
import appCss from '../app.css?url'
// Supports weights 100-900
import leagueSpartan from '@fontsource-variable/league-spartan?url'
import { BookOpenCheck } from 'lucide-react'
import { ClerkProvider, SignedIn, SignedOut, SignInButton, SignUpButton, UserButton } from '@clerk/tanstack-start'
import { Button } from '@/components/ui/button'
import { getSignedInUserId } from '@/data/getSignedInUserId'

export const Route = createRootRoute({
  notFoundComponent() {
    return <div className='text-3xl text-center py-10 text-dark'>Sorry. Page Not Found.</div>
  },
  beforeLoad: async () => {
    const userId = await getSignedInUserId()
    return {
      userId,
    }
  },
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
  const navigate = useNavigate()

  return (
    <ClerkProvider>
      <html>
        <head>
          <Meta />
        </head>
        <body>
          <nav className='bg-dark p-4 h-20 text-main flex items-center justify-between'>
            <Link to='/' className='flex gap-1 items-center text-2xl'>
              <BookOpenCheck className='text-main '/>
              <h1 className='logo pl-2'>Grammateion</h1>
            </Link>
            <div>
              <SignedOut>
                <div className=' flex items-center'>
                  <Button 
                    asChild variant='link'
                    className='text-light uppercase'  
                  >
                    <SignInButton />
                  </Button>
                  <div className='w-[1px] h-8 bg-main' />
                  <Button 
                    asChild variant='link'
                    className='text-light uppercase '  
                  >
                    <SignUpButton />
                  </Button>
                </div>
              </SignedOut>
              <SignedIn>
                <UserButton 
                  showName
                  appearance={{
                    elements: {
                      userButtonOuterIdentifier: {
                        color: '#fffaf0',
                      },
                    }
                  }}  
                >
                  <UserButton.MenuItems>
                    <UserButton.Action
                      label='Dashboard'
                      labelIcon={<BookOpenCheck size={16}/>}
                      onClick={() => {
                        navigate({
                          to: '/dashboard',
                        })
                      }}
                    />
                  </UserButton.MenuItems>
                </UserButton>
              </SignedIn>
            </div>
          </nav>
          {children}
          <ScrollRestoration />
          <Scripts />
        </body>
      </html>
    </ClerkProvider>
    
  )
}
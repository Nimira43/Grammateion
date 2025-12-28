import { createFileRoute, Link } from '@tanstack/react-router'
import cover from '@/assets/home-page.jpg'
import { BookOpenCheck } from 'lucide-react'
import { SignedIn, SignedOut, SignInButton, SignUpButton } from '@clerk/tanstack-start'
import { Button } from '@/components/ui/button'

export const Route = createFileRoute('/')({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <div className='min-h-[400px] h-[calc(100vh-80px)] flex items-center justify-center relative'>
      <img
        src={cover}
        alt=''
        className='absolute top-0 left-0 object-cover object-center h-full w-full'
      />
      <div className="absolute inset-0 bg-black/70" />
      <div className='flex flex-col text-center relative z-10 gap-4'>
        <div className='flex text-light'>
          <BookOpenCheck className='size-[3rem]' />
          <h1 className='logo pl-4 text-5xl'>Grammateion</h1>
        </div>
        <SignedIn>
          <Button
            asChild
            variant='dark'
          >
            <Link to='/dashboard'>
              Go To Dashboard
            </Link>
          </Button>
        </SignedIn>
        <SignedOut>
          <div className='flex gap-2 items-center justify-center'>
            <Button
              asChild
              variant='dark'
            >
              <SignInButton />
            </Button>
            <Button
              asChild
              variant='dark'
            >
              <SignUpButton />
            </Button>
          </div>
          
        </SignedOut>
      </div>
    </div>
  )
}

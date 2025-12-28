import { createFileRoute } from '@tanstack/react-router'
import cover from '@/assets/home-page.jpg'
import { BookOpenCheck } from 'lucide-react'

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
      <div className='flex flex-col text-center'>
        <BookOpenCheck />
        <h1 className='logo pl-2'>Grammateion</h1>
      </div>
      <div>
        Site Description
      </div>
      <div>
        Sign In | Sign Out Buttons
      </div>
    </div>
  )
}

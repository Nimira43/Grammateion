import { createFileRoute } from '@tanstack/react-router'
import cover from '@/assets/home-page.jpg'

export const Route = createFileRoute('/')({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <div className='min-h-[400px] h-[calc(100vh-80px)] flex items-center justify-center relative'>
      <img
        src={cover}
        alt=''
      />
    </div>
  )
}

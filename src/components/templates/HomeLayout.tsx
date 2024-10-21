import Header from '@/components/organisms/Global/Header.tsx'
import Footer from '@/components/organisms/Global/Footer.tsx'
import Slogan from '@/components/organisms/Home/Slogan.tsx'
import HomePage from '@/components/pages/Home/HomePage.tsx'
import { Link } from 'react-router-dom'

const HomeLayout = () => {
  return (
    <div className={'relative h-full'}>
      <div
        style={{
          backgroundImage: `url('https://res.cloudinary.com/dtcaf7prf/image/upload/v1729493312/6_lwjsxt.png')`
        }}
        className='bg-cover bg-center h-[700px] '
      >
        <Header />
        <Slogan />
        <div className={'absolute flex flex-col gap-2 right-2  md:top-64 backdrop-blur-lg bg-transparent'}>
          <Link to={'https://www.tiktok.com/@leopard.lorry'} className={'bg-slate-50 p-2 rounded-full'}>
            <img src={'/icons8-tiktok-96.png'} alt={'tiktok-logo'} className='w-6 ' />
          </Link>
          <Link to={'https://www.facebook.com/leopardlorry'} className={'bg-slate-50 p-2 rounded-full'}>
            <img src={'/facebook.webp'} alt={'facebook-logo'} className='w-6' />
          </Link>
        </div>
      </div>
      <HomePage />
      <Footer />
    </div>
  )
}

export default HomeLayout

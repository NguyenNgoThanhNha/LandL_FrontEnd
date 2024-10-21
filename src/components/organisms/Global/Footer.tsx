import { Separator } from '@/components/atoms/ui/separator.tsx'
import { Button } from '@/components/atoms/ui/button.tsx'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import { Input } from '@/components/atoms/ui/input.tsx'
import { useTranslation } from 'react-i18next'
import { validateEmail } from '@/utils/validate.ts'
import toast from 'react-hot-toast'
import { sendCost } from '@/services/deliveryService.ts'
import Loading from '@/components/templates/Loading.tsx'

const Footer = () => {
  const { t } = useTranslation()
  const [loading, setLoading] = useState(false)
  const [email, setEmail] = useState<string>('')
  const onSendCost = async () => {
    if (!validateEmail(email)) {
      toast.error('Email is not true')
    }
    setLoading(true)

    const response = await sendCost({ email })
    setLoading(false)
    if (response.success) {
      toast.success(response.result?.message as string)
    } else {
      toast.error(response.result?.message as string)
    }
    setEmail('')
  }
  return (
    <div
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)),url('https://res.cloudinary.com/dtcaf7prf/image/upload/v1729493308/4_vukkar.png')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}
      className={' text-white mt-4 md:px-20 py-5 text-md max-sm:px-4 flex flex-col gap-4  '}
    >
      <div className={' grid md:grid-cols-5 max-sm:grid-cols-2'}>
        <div className={'md:col-span-1 py-8 max-sm:col-span-2'}>
          <img src={'/logoLL.png'} alt={'logo'} className={'w-28 h-28'} loading={'lazy'} />
          <div className={'flex flex-col'}>
            <span className={'font-black tracking-tight text-orangeTheme text-lg'}>L&L COMPANY</span>
            <span className={'text-wrap'}>{t('address')}</span>
          </div>
        </div>
        <div className={'md:col-span-2 md:ml-auto flex flex-col justify-center max-sm:col-span-2'}>
          <p className={'py-2 md:text-[20px] uppercase font-medium'}>{t('contactToGetEmail')}</p>
          <div className={'flex md:ml-auto justify-center items-center'}>
            <Input
              placeholder={'Enter your email here'}
              className={'rounded-none w-80 text-black'}
              onChange={(e) => setEmail(e.target.value)}
            />
            <Button
              className={'bg-orangeTheme  rounded-none text-white uppercase hover:text-white hover:bg-orangeTheme/90'}
              onClick={onSendCost}
            >
              {t('Subscribe')}
            </Button>
          </div>
        </div>
        <div
          className={
            'md:col-span-1  md:ml-auto flex flex-col md:justify-center  max-sm:justify-start max-sm:its-start max-sm:col-span-1'
          }
        >
          <p className={'py-2 md:text-[20px] uppercase font-medium'}>{t('followUs')}</p>
          <div className={'flex gap-2 md:justify-center max-sm:justify-start'}>
            <Link
              to={'https://www.tiktok.com/@leopard.lorry'}
              className={'bg-transparent flex items-center justify-center rounded-full'}
            >
              <img src={'/icons8-tiktok-96.png'} alt={'tiktok-logo'} className='w-10 text-white' />
            </Link>
            <Link
              to={'https://www.facebook.com/leopardlorry'}
              className={'bg-transparent flex items-center justify-center rounded-full'}
            >
              <img src={'/facebook.webp'} alt={'facebook-logo'} className='w-6' />
            </Link>
          </div>
        </div>
        <div className={'flex md:justify-center  md:pl-10 flex-col gap-1 max-sm:col-span-1'}>
          <p className={'py-2 md:text-[20px] uppercase font-medium'}>{t('contactUs')}</p>
          <div className={'flex flex-col items-start text-md'}>
            <p>+84 837 391 311</p>
            <p>L&Lcompany@gmail.com</p>
            <p> {t('timeWork')}</p>
            <p> 09:30am to 06:00pm</p>
          </div>
        </div>
      </div>
      <Separator />
      <div className={'text-center pt-3'}>
        <span className={'text-xl'}>&copy;</span> 2024 Copyrights Allrights reserved by{' '}
        <span className={'font-semibold text-orangeTheme'}> L&L company</span>
      </div>
      {loading && <Loading />}
    </div>
  )
}

export default Footer

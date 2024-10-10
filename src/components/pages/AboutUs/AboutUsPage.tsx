import red_truck from '../../../assets/images/home/red-line.jpg'
import purple_truck from '../../../assets/images/home/truck-purple.jpg'
import { useTranslation } from 'react-i18next'

const AboutUsPage = () => {
  const { t } = useTranslation()
  return (
    <div className='bg-white mt-5 w-full grid md:grid-cols-2 max-sm:grid-cols-1  max-sm:justify-center max-sm:items-center mb-5'>
      <div className='relative flex justify-center items-center col-span-1 justify-self-end md:w-[550px] md:h-[450px] max-sm:w-[450px] max-sm:h-[350px] '>
        {/* Orange border outline */}
        <div className='absolute border-4 border-orange-500  mr-20  md:w-[400px] md:h-[400px] max-sm:w-[300px] max-sm:h-[300px]'></div>

        {/* Top-left image */}
        <div className='absolute top-0 left-0'>
          <img src={red_truck} alt='Red truck' className='w-60 h-42 rounded-md' />
        </div>

        {/* Center image */}
        <div className='relative'>
          <img
            src={purple_truck}
            alt='Purple truck'
            className='md:w-[350px] md:h-[200px] rounded-md max-sm:w-64 max-sm:h-44 max-sm:tranform max-sm:translate-x-1/3'
          />
        </div>

        {/* Bottom-left image */}
        <div className='absolute bottom-0 left-0'>
          <img
            src={'https://res.cloudinary.com/dtcaf7prf/image/upload/v1728562950/truck-green_msmhqy.jpg'}
            alt='Green truck'
            className='w-60 h-44 rounded-md'
          />
        </div>
      </div>

      {/* Right section with text */}
      <div className='col-span-1 bg-white p-6 shadow-md rounded-lg'>
        <h2 className='text-orange-500 font-semibold text-xl mb-2'>{t('Our story')}</h2>
        <h1 className='text-3xl font-bold mb-4 uppercase'>{t('About')} L&L</h1>
        <p className='text-gray-600 leading-relaxed mb-4'>{t('AboutUsContent1')}</p>
        <p className='text-gray-600 leading-relaxed mb-4'>{t('AboutUsContent2')}</p>
        <p className='text-gray-600 leading-relaxed mb-4'>{t('AboutUsContent3')}</p>
        <p className='text-gray-600 leading-relaxed mb-4'>{t('AboutUsContent4')} </p>
        <div className='flex justify-end'>
          <button className='bg-orange-500 text-white font-bold py-2 px-4 rounded-md'>{t('Read more')}</button>
        </div>
      </div>
    </div>
  )
}

export default AboutUsPage

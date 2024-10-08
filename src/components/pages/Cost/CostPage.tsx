import cost_page from '../../../assets/images/cost/cost-page.jpg'
import EstimatedCost from '@/components/organisms/Cost/EstimatedCost.tsx'
import { useTranslation } from 'react-i18next'
import Price from '@/components/organisms/Cost/Price.tsx'
import { useState } from 'react'
// import cost_1 from "../../../assets/images/cost/cost-price1.png"
// import cost_2 from "../../../assets/images/cost/cost-price2.png"
const CostPage = () => {
  const { t } = useTranslation()
  const [data, setData] = useState<any>(null)
  return (
    <div className='flex flex-col items-center gap-4 '>
      <div
        style={{
          backgroundImage: `url(${cost_page})`
        }}
        className='bg-cover bg-center md:flex items-center w-full h-[300px] max-sm:grid max-sm:grid-cols-2'
      >
        <p
          className={
            'flex text-start justify-center items-start px-10 md:text-[60px] max-sm:text-[50px] font-black text-white max-sm:col-span-2 max-sm:text-3xl'
          }
        >
          {t('costE')}
        </p>
      </div>
      <div className={'grid md:grid-cols-2  md:w-full max-sm:col-span-1 p-2'}>
        <div className={'col-span-1 md:ml-10 border-r-2'}>
          <p className={'text-[40px] font-black'}>INFORMATION</p>
          <EstimatedCost setData={setData} />
        </div>
        <div className={'col-span-1 md:ml-10 gap-4'}>
          <p className={'text-[40px] font-black uppercase '}>ESTIMATION</p>
          {data ? (
            <Price data={data} />
          ) : (
            <p className={'font-medium justify-center items-center flex'}>
              Please enter your package information to estimate the cost!
            </p>
          )}
          <div className={'flex justify-center items-center p-6'}>
            <img src={'/logoLL.png'} alt={'logo'} className={'w-20 h-20'} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default CostPage

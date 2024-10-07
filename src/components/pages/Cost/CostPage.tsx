import cost_page from '../../../assets/images/cost/cost-page.jpg'
import EstimatedCost from '@/components/organisms/Cost/EstimatedCost.tsx'
// import cost_1 from "../../../assets/images/cost/cost-price1.png"
// import cost_2 from "../../../assets/images/cost/cost-price2.png"
const CostPage = () => {
  return (
    <div className='flex flex-col items-center gap-4 '>
      <div
        style={{
          backgroundImage: `url(${cost_page})`
        }}
        className='bg-cover bg-center md:flex items-center justify-center w-full h-[500px] max-sm:grid max-sm:grid-cols-2'
      >
        <p className={'flex text-start px-10 md:text-[60px] font-black text-white max-sm:col-span-2 max-sm:text-3xl'}>
          Cost Evaluation
        </p>
        <div className={'flex items-center justify-center md:w-full max-sm:col-span-2'}>
          <EstimatedCost />
        </div>
      </div>
    </div>
  )
}

export default CostPage

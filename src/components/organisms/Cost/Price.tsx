import coins from '@/assets/images/cost/coins.png'
import { formatCurrency } from '@/utils/formatCurrency.ts'

const Price = ({ data }: { data: any }) => {
  console.log(data)
  return (
    <div className={'flex flex-col items-center justify-center gap-10'}>
      <div className={'flex border  p-4 justify-between md:w-3/4 max-sm:w-full'}>
        <div>
          <p className={'text-[50px] font-black text-orangeTheme'}>
            {formatCurrency(data?.vehicleCost[data?.vehicleTypes[0]?.vehicleTypeId] as number)}
          </p>
          <p className={'text-sm'}>
            Your package was recommend with truck that has type {data?.vehicleTypes[0]?.vehicleTypeName}
          </p>
        </div>
        <img src={coins} alt={'coins'} />
      </div>

      <div className={'flex flex-col text-sm w-3/4 border p-4 gap-3 max-sm:w-full '}>
        <p>
          In some case, we can't matching your package with the recommend truck so you can pay more a little bit to
          matching with another type truck, such as:
        </p>
        <div>
          <span>Type {data?.vehicleTypes[1]?.vehicleTypeName} has price: </span>
          <span className={'text-orangeTheme font-medium'}>
            {formatCurrency(data?.vehicleCost[data?.vehicleTypes[1]?.vehicleTypeId] as number)}
          </span>
        </div>
        <div>
          <span>Type {data?.vehicleTypes[2]?.vehicleTypeName} has price: </span>
          <span className={'text-orangeTheme font-medium'}>
            {formatCurrency(data?.vehicleCost[data?.vehicleTypes[2]?.vehicleTypeId] as number)}
          </span>
        </div>
      </div>
    </div>
  )
}

export default Price

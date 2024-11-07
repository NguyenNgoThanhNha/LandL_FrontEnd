import { ReactNode } from 'react'
import { useTranslation } from 'react-i18next'

interface StatisticElementProps {
  content: string
  icon: ReactNode
  data: number
  isMore: boolean
}

const StatisticElement = ({ content, data }: StatisticElementProps) => {
  const { t } = useTranslation()
  const words = content.split(' ')
  return (
    <div className={'flex gap-2 items-center justify-center'}>
      <div className={'flex  gap-2 items-center justify-center'}>
        <div className={'md:text-[60px] max-sm:text-[40px] font-black text-orangeTheme flex'}>{data}</div>
      </div>
      <div className={'flex flex-col'}>
        {words.map((word, index) => (
          <p key={index} className={'md:uppercase capitalize md:text-lg max-sm:text-md tracking-tight font-bold'}>
            {t(word)}
          </p>
        ))}
      </div>
    </div>
  )
}

export default StatisticElement

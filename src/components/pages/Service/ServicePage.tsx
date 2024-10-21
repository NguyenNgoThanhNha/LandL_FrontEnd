import SearchElement from '@/components/organisms/Service/SearchElement.tsx'

const ServicePage = () => {
  return (
    <div
      className={' h-[600px] bg-cover py-10 flex items-center justify-center '}
      style={{
        backgroundImage: `url(https://res.cloudinary.com/dtcaf7prf/image/upload/v1729493310/3_scjodd.png)`
      }}
    >
      <SearchElement />
    </div>
  )
}

export default ServicePage

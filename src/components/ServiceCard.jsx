
const ServiceCard = ({imgURL, subtext, label}) => {
  return (
    <div className="flex-1 sm:w-[350px] sm:min-w-[350px] w-full rounded-[20px] shadow-3xl px-10 py-16">
      
      <div className="bg-coral-red rounded-full flex justify-center items-center w-11 h-11"><img src={imgURL} alt={label} height={24} width={24} /></div>
      <h3 className="mt-5 font-palanquin text-3xl leading-normal font-bold">{label}</h3>
      <p className="mt-3 font-montserrat text-lg text-slate-gray leading-normal">{subtext}</p>
    </div>
  )
}

export default ServiceCard

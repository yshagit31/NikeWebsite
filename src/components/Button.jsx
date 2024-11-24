const Button = ({label, iconUrl}) => {
  return (
    <button className="flex justify-center items-center gap-2 rounded-full bg-coral-red text-white px-5 py-2">
       {label}
      {iconUrl&&  <img src={iconUrl} alt="arrowRight" className="ml-2 rounded-full w-5 h-5" />}
    </button>
  )
}

export default Button

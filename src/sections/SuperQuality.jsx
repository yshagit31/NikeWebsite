import { shoe8 } from "../assets/images";
import Button from "../components/Button";

const SuperQuality = () => {
  return (
    <section id="about-us" className="flex justify-between items-center max-lg:flex-col gap-10 w-full max-container">
    <div className="flex flex-col justify-start gap-5">
        <h2 className="text-4xl font-palanquin capitalize font-bold lg:max-w-lg">
          We Provide You
          <span className='text-coral-red'> Super </span>
          <span className='text-coral-red'>Quality </span> Shoes
        </h2>
        <p className='mt-4 lg:max-w-lg info-text'>
          Ensuring premium comfort and style, our meticulously crafted footwear
          is designed to elevate your experience, providing you with unmatched
          quality, innovation, and a touch of elegance.
        </p>
        <p className='mt-6 lg:max-w-lg info-text'>
          Our dedication to detail and excellence ensures your satisfaction
        </p>
        <div className="mt-11">
        <a href="https://about.nike.com/en/" target="_blank"><Button label="View Details"></Button></a>
        </div>
    </div>
        <div className="flex flex-1 items-center justify-center"><img src={shoe8} alt="shoe8" width={570} height={522} className="object-contain" /></div>
   </section>
  )
}

export default SuperQuality;
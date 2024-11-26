import React from 'react'
import Button from '../components/Button'

const Subscribe = () => {
  return (
    <section id='contact-us' className="max-container flex justify-between items-center max-lg:flex-col gap-10">  
    <h2 className='font-bold text-4xl text-center lg:max-w-md leading-[68px] font-palanquin'>Sign Up for <span className='text-coral-red'>Updates</span> & Newsletter</h2> 
    <div className='lg:max-w-[40%] w-full flex items-center' >
         <input type='text' placeholder='subscribe@nike.com' className='input' />
         <div className='flex max-sm:justify-end max-sm:w-full items-center'>
          <Button label="Sign Up" fullWidth></Button>
          </div>
    </div>

    </section> 
  )
}

export default Subscribe; 

import React from 'react'
import {hero} from '../constants'
import {downArrow} from '../assets'
import Button from './About'

const Hero = () => {
  return (
   <section>
    {
      hero.map(({id,img,title,desc,button})=>(
        <div key={id} className='relative flex justify-center flex-col items-center'>
          <img src={img} alt={id} className="w-full h-screen object-cover"/>
          <div className='absolute top-6 flex flex-col justify-between h-screen w-full items-center'>
            <div className='flex justify-center flex-col items-center'>
              <h1 className='text-4xl font-semibold'>{title}</h1>
              <p className='text-2xl font-medium'>{desc}</p>
            </div>
            <div className='flex flex-col gap-y-6 sm:flex'>
            <Button button={button}/>
            <img src={downArrow} className='mb-12 h-8 animate-bounce cursor-pointer'/>
            </div>
          </div>
        </div>
      ))
    }
   </section>
  )
}

export default Hero
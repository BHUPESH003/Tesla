import React from 'react'

const About = ({button}) => {
  return (
    <div className='flex flex-col justify-center items-center gap-y-4 sm:flex-row sm:gap-y-0 sm:gap-x-4 px-12'>

      {button.map((text,id)=>(
        <button className={`w-full ${id==0 ? "bg-black text-white" : "bg-white text-black" } cursor-pointer rounded-md font-medium sm:w-80 p-2 `}>{text}</button>
      ))}
    </div>
  )
}

export default About
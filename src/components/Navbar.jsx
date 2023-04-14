import {Link} from 'react-router-dom'
import {logo} from '../assets'
import {navLinks} from '../constants'

const Navbar = () => {
  return (

      <nav className='w-[100vw]'>
      
        <ul className='flex justify-between px-5 py-4 lg:justify-center'>
        <img src={logo} alt="logo" className='cursor-pointer  mt-4  object-contain lg:mr-[10rem]'></img>
        <div className='hidden cursor-pointer bg-white gap-x-3 font-medium  lg:flex justify-center mt-4'>
        {navLinks.map(({id,title})=>(
          <li key={id} className='p-[3px] rounded-md hover:bg-gray-300'>{title}</li>
        ))}

        </div>
        <div className='flex flex-row  font-medium mt-[18px] lg:ml-[9rem] '>
          
          <li className='cursor-pointer px-2  rounded-md  hover:bg-gray-300'>
            <Link to="/">Shop</Link>
          </li>
          <li className='cursor-pointer  rounded-md  hover:bg-gray-300 px-2'>
            <Link to="/about">Account</Link>
          </li>
          <li className='cursor-pointer rounded-md  hover:bg-gray-300 px-2'>
            <Link to="/contact">Menu</Link>
          </li>

        </div>
        </ul>
      </nav>

  )
}

export default Navbar
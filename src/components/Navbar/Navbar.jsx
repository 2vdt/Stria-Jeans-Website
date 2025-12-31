import React from 'react';
import logo from '../../assets/top products/logo.png';
import { IoMdSearch } from "react-icons/io";
import { FaCartShopping } from 'react-icons/fa6';
import { FaCaretDown } from "react-icons/fa";
import Poppup from '../Poppup/Poppup';

const Menu = [

  {
    id: 1,
    name: "Home",
    link: "/#",
  },
  {
    id:2,
    name:"Top Rated",
    link:"/#Services",
  },
  {
    id:3,
    name:"Kids Wear",
    link:"/#"
  },
  {
    id: 4,
    name: "Mens Wear",
    link: "/#",
  },
];

const DropdownLinks = [
   {id:1,
    name:"Trending products",
    link:"/#",
  },
  {
    id:2,
    name:"Best Selling",
    link:"/#"
  },
   {
     id: 3,
     name: "Top Rated",
     link: "/#",
   },
];

const Navbar = ({handleOrderPopup}) => {

  return (
    <>
      <div className='shadow-md bg-white dark:bg-gray-900 dark:text-white duration-200 relative z-40'>
        {/* uppernavbar */}
        <div className='bg-orange-300'>
          <div className='container flex justify-between items-center'>
            <div>
              <a href="#" className="font-bold text-2xl sm:text-3xl flex gap-2">
                <img src={logo} alt="logo" className='w-20' />
              </a>
            </div>
            {/* searchbar */}
            <div className="flex justify-between items-center gap-4">
              <div className='group relative hidden sm:block'>
                <input type="text" placeholder='Search' className="w-[200px] sm:w-[200px] group-hover:w-[300px] transition-all duration-300 rounded-full border border-gray-300 px-2 py-1 focus:outline-none focus:border-1 pr-8" />
                <IoMdSearch className='text-gray-500 group-hover:text-primary absolute top-1/2 -translate-y-1/2 right-3' />
              </div>
              {/* order button */}
              <button onClick={handleOrderPopup}
                className=" bg-gradient-to-r from-orange-400 to-orange-600 transition-all duration-200 text-white py-1 px-4 rounded-full flex items-center gap-3 group "
              >
                <span className="group-hover:block hidden transition-all duration-200">Order</span>
                <FaCartShopping className='text-xl text-white drop-shadow-sm cursor-pointer' />
              </button>
            </div>
          </div>
        </div>
        {/* lowernavbar */}
        <div data-aos="zoom-in" className='flex justify-center'>
          <ul className='sm:flex hidden items-center gap-4'>
            {
              Menu.map((data) => (
                <li key={data.id}>
                  <a href={data.link}
                    className='inline-block px-4 hover:text-orange-400 duration-200'
                  >{data.name}</a>
                </li>
              ))}
            <li className='relative group'>
              <a href='#' className='flex items-center gap-[2px] py-2'>
                Trending
                <span>
                  <FaCaretDown className="transition-all duration-200 group-hover:rotate-180" />
                </span>
              </a>
              <div className='absolute left-0 w-48 bg-white dark:bg-gray-800 shadow-lg rounded-md opacity-0 invisible group-hover:opacity-100 group-hover:visible duration-200 z-50'>
                <ul>
                  {DropdownLinks.map((data) => (
                    <li key={data.id}>
                      <a href={data.link} className='inline-block w-full rounded-md p-2 hover:bg-orange-400'>
                        {data.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </li>
          </ul>
        </div>
      </div>
      
    </>
  );
};

export default Navbar;
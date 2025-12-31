import React from 'react'
import Img1 from '../../assets/top products/1.jpg';
import Img2 from '../../assets/top products/2.jpg'
import Img3 from '../../assets/top products/3.jpg'
import { FaStar } from "react-icons/fa";

const ProductsData =[
  {
    id: 1,
    img: Img1,
    title: "Casual Wear",
    description:"lorem  Repellendus in veritatis sint ab?Quibusdam repellendus aperiam",

  },
  {
    id: 2,
    img: Img2,
    title: "Men Wear",
    description:"lorem  Repellendus in veritatis sint ab?Quibusdam repellendus aperiam",

  },
  {
    id: 3,
    img: Img3,
    title: "Women wear",
    description:"lorem  Repellendus in veritatis sint ab?Quibusdam repellendus aperiam",

  },
  
];



const TopProducts = ({handleOrderPopup}) => {
  return (
    <div>
      <div className='container'></div>
      {/* header section*/}
      <div className='text-left mb-24 '>
            <p data-aos="fade-up " className='text-3xl text-orange-400'>Top Rated Products for you</p>
            <h1 data-aos="fade-up" className='text-3xl font-bold'>Best Products</h1>
              <p   data-aos="fade-up " className='text-xs text-gray-400'>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Repellendus in veritatis sint ab? 
                Quibusdam repellendus aperiam.</p>
        </div>

        {/*body section*/}
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 place-items-center mt-7px'>
          {
            ProductsData.map((data) =>(
<div data-aos="zoom-in" className='rounded-2xl bg-white dark:bg-gray-800 hover:bg-black/80 dark:hover:bg-primary hover:text-white relative shadow-xl duration-high group max-w-[400px]'>
 {/*image section*/}
<div className="h-[100px]">
  <img src ={data.img} alt="" className='max-w-[140px] block mx-auto transform -translate-y-20 group-hover:scale-105 duration-300 drop-shadow-md'/>
</div>
{/*Detail Section*/}
<div className="p-4 text-center">
   {/* star rating */}
                <div className="w-full flex items-center justify-center gap-1">
                  <FaStar className="text-yellow-500" />
                  <FaStar className="text-yellow-500" />
                  <FaStar className="text-yellow-500" />
                  <FaStar className="text-yellow-500" />
</div>
<h1 className="text-xl font-bold">{data.title}</h1>
                <p className="text-gray-500 group-hover:text-white duration-300 text-sm line-clamp-2">
                  {data.description}
                </p>
                <button
                  className="bg-primary hover:scale-105 duration-300 text-white py-1 px-4 rounded-full mt-4 group-hover:bg-orange-700 group-hover:text-primary"
                  onClick={handleOrderPopup}
                >
                  Order Now
                </button>
                </div>
</div>
            ))}
        </div>
    </div>
  )
}

export default TopProducts
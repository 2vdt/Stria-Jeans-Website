import React from 'react'
import Img1 from '../../assets/women fit.png';
import Img2 from '../../assets/men wear.png';
import Img3 from '../../assets/jeaket.png';
import Img4 from '../../assets/denim jeans.png';
import Img5 from '../../assets/trouser.jpg';

import { FaStar } from 'react-icons/fa6';
const ProductsData = [

{
    id: 1,
    img: Img1,
    title: "Women Ethnic",
    rating: 5.0,
    color: "Blue",
    aosDelay: "0",
  },
  {
    id: 2,
    img: Img2,
    title: "Men western",
    rating: 4.5,
    color: "blue & sky blue",
    aosDelay: "200",
  },
  {
    id: 3,
    img: Img3,
    title: "Jacket",
    rating: 4.7,
    color: "denim blue",
    aosDelay: "400",
  },
  {
    id: 4,
    img: Img4,
    title: "denim jeans",
    rating: 4.4,
    color: "blue",
    aosDelay: "600",
  },
  {
    id: 5,
    img: Img5,
    title: "Trouser",
    rating: 4.5,
    color: "Brown",
    aosDelay: "800",
  },
]


const Products = () => {
  return (
    <div className='mt-14 mb-12'>
        <div className='container'>
        {/*Header section*/}
        <div className='text-center mb-10 max-auto'>
            <p data-aos="fade-up " className='text-3xl text-orange-400'>Top Selling Products for you</p>
            <h1 data-aos="fade-up" className='text-3xl font-bold'>Products</h1>
            <p   data-aos="fade-up " className='text-xs text-gray-400'>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                 Repellendus in veritatis sint ab? 
                 Quibusdam repellendus aperiam.</p>
        </div>
        {/*body section*/}
        <div>
<div className='grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 place-items-center gap-5'>
      
      {/*card section*/}
      {
        ProductsData.map((data) => (
            <div data-aos="fade-up" 
            data-aos-dely={data.aosDelay}
            key={data.id} className='space-y-3'>
                <img src={data.img} alt=""
                  className='h-[220px] w-[150px] object-cover rounded-md'
                  />
                  <div>
                    <h3 className='font-semibold'>{data.title}</h3>
                    <p className='text-sm text-gray-600'>{data.color}</p>
                    <div className='flex items-center gap-1'>
                      <FaStar className='text-yellow-400'/>  
                      <span>{data.rating}</span>
                    </div>
                  </div>
            </div>
        ))}
</div>
 <div className='flex justify-center'>
  <button className='text-center mt-10 cursor-pointer bg-orange-400 text-white py-1 px-5 rounded-md'>View All Button</button>
 </div>
</div>
</div>
</div>
  )
}

export default Products
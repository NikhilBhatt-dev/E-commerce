import React from 'react'
import { useContext } from 'react'
import { ShopContext } from '../context/ShopContext';
import Title from '../components/Title';
const Orders = () => {

  const { products, currency } = useContext(ShopContext);
  return (

    <div className='border-t pt-16'> 
    <div className='text-2xl'>
      <Title text1={'My '} text2={'Orders'} />

    </div>


    <div>
      {
        products.slice(1,4).map((item, index) => (
         
          <div key={index} className='py-4 border-t border-b text-gary-700 flex   md: flex-row md:items-center md:justify-between gap-4 '>
            <div className='flex itens-start gap-6 text-sm'>
              <img className='w-16 sm:w-20' src={item.image[0]} alt="" />


            </div>

          </div>
        ))
      }
    </div>
    </div>
  )
}

export default Orders
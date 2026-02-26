import React, { useContext, useState } from 'react'
import { ShopContext } from '../context/ShopContext'
import { assets } from '../assets/assets'
import ProductItem from '../components/ProductItem' 

const Collection = () => {

  const { products } = useContext(ShopContext);
  const [showFilter, setShowFilter] = useState(false);

  return (
    <div className='flex flex-col sm:flex-row gap-1 sm:gap-10 pt-10 border-t'>

      {/* Filter Section */}
      <div className='min-w-60'>

        <p
          onClick={() => setShowFilter(!showFilter)}
          className='my-2 text-xl flex items-center cursor-pointer gap-2'
        >
          Filter
          <img
            className={`h-3 sm:hidden ${showFilter ? 'rotate-90' : ''}`}
            src={assets.dropdown_icon}
            alt=""
          />
        </p>

        {/* Category Filter */}
        <div className={`border border-gray-300 pl-5 py-3 mt-6 ${showFilter ? '' : 'hidden'} sm:block`}>
          <p className='mb-3 text-sm font-medium'>Category</p>

          <div className='flex flex-col gap-2 text-sm font-light text-gray-700'>
            <label className='flex gap-2'>
              <input type="checkbox" value="Men" className='w-3' />
              Men
            </label>

            <label className='flex gap-2'>
              <input type="checkbox" value="Women" className='w-3' />
              Women
            </label>

            <label className='flex gap-2'>
              <input type="checkbox" value="Kids" className='w-3' />
              Kids
            </label>
          </div>
        </div>

        {/* Subcategory Filter */}
        <div className={`border border-gray-300 pl-5 py-3 my-5 ${showFilter ? '' : 'hidden'} sm:block`}>
          <p className='mb-3 text-sm font-medium'>Type</p>

          <div className='flex flex-col gap-2 text-sm font-light text-gray-700'>
            <label className='flex gap-2'>
              <input type="checkbox" value="Topwear" className='w-3' />
              Topwear
            </label>

            <label className='flex gap-2'>
              <input type="checkbox" value="Bottomwear" className='w-3' />
              Bottomwear
            </label>

            <label className='flex gap-2'>
              <input type="checkbox" value="Winterwear" className='w-3' />
              Winterwear
            </label>
          </div>
        </div>

      </div>

    </div>
  )
}

export default Collection
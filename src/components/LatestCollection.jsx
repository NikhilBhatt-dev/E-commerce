import React from 'react';
import { useContext } from "react";
import { ShopContext } from "../context/ShopContext";
import Title from './Title';

const LatestCollection = () => {

    const { products } = useContext(ShopContext);
    

  return (
    <div className='my-10'>
        <div className='text-center py-9 text-3xl'>
            <Title text1={'Latest'} text2={'Collection'} />
        </div>

    </div>
  
  )
}

export default LatestCollection
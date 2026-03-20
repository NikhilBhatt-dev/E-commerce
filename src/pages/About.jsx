import React from 'react'
import Title from '../components/Title'
import { assets } from '../assets/assets'
import NewsLatter from '../components/NewsLatter'

const About = () => {
  return (

    <div>
    <div className='text-2xl text-center pt-8 border-t'>
      
      <Title text1={'About '} text2={'Us'} />
   </div>

    <div className='my-10 flex flex-col md:flex-row gap-16'>
      <img className='w-full md:max-w-[450px]' src={assets.about_img} alt="" />
      <div className='flex flex-col gap-6 justify-center  md:w-2/4'>
      
      <p>dis sequi, placeat quis, beatae magnam in explicabo? Ipsa molestiae, voluptas quasi veniam pariatur unde cupiditate eveniet nisi ducimus delectus accusantium laborum dicta eaque ex. Quos!
      abs
      </p>
      <p>m quas similique perspiciati
            nda aliquam nulla
      </p>
      <b className='text-gray-800'>Our Mission</b>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error fugiat quos inventore.</p>

      </div>
    </div>

    <div className='text-4xl py-4'>
      <Title text1={'Why '} text2={'Choose Us'} />
    </div>

    <div className=' flex flex-col md:flex-row text-sm mv-20'>
        <div className='border  border-black px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
        <b>Quality Assurance :</b>
          <p className='text-gray-600'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corrupti nostrum sed tempore.</p>

      </div>

        <div className='border border-black px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Conveience : </b>
          <p className='text-gray-600'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corrupti nostrum sed tempore.</p>

        </div>


        <div className='border border-black px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Exceptional Customer Servies :</b>
          <p className='text-gray-600'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corrupti nostrum sed tempore.</p>

        </div>      

    </div>
    <div className='mt-20'>
        <NewsLatter />
    </div>
  

    </div>

  )
}

export default About
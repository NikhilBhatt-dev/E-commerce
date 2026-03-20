import React from 'react'


const NewsLatter = () => {
    const onSubmitHandler = (event) => {
        event.preventDefault();
    }
  return (
    <div className='home-newsletter text-center '>
        <p className='home-newsletter-title text-2xl font-medium text-gray-800 '>
            Subscribe now & get 20% off
        </p>
        <p className='home-newsletter-copy text-gray-400 mt-3'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam quas consectetur cupiditate in omnis quos neque soluta, ullam laborum incidunt, qui nesciunt fugit perferendis ab vero voluptate aperiam placeat! Quaerat?

        </p>
        <form onSubmit={onSubmitHandler} className='home-newsletter-form w-full sm:w-1/2 fles items-center gap-3 mx-auto my-6 border pl-3'>
              <input className='home-newsletter-input w-full sm:flex-1 outline-none'  type='email'  placeholder="Enter your email" required />
              <button type='submit' className='home-newsletter-button bg-black text-white text-xs px-10 py-4'>Subscribe</button>
        </form>
    </div>
  )
}

export default NewsLatter

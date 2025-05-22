import React from 'react'
import { assets } from '../assets/assets'

const Footer = () => {
  return (
    <div>
      <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm'>

        <div>
            <img src={assets.logo} className='mb-5 w-32' alt="" />
            <p className='w-full md:w-2/3 text-gray-600'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio rem dolore corporis eius nemo? Laudantium numquam, alias ab perspiciatis eos enim, officiis libero quae aut aliquam laborum, nulla tenetur iure.
            </p>
        </div>
      </div>
    </div>
  )
}

export default Footer

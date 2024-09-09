import React from 'react'
import Banner from './components/Banner/Banner'
import SliderComponent from './components/SliderComponent/SliderComponent'

function page() {
  return (
    <div className='relative w-full overflow-visible'>
      <div className='w-full m-0'>
        <Banner />
        <div className='flex flex-col items-center md:mt-[80px]'>
        <SliderComponent/>

        </div>
      </div>
    </div>

  )
}

export default page
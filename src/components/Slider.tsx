'use client'

import Image from 'next/image'
import React, { useEffect, useState } from 'react'

const data = [
  {
    id: 1,
    title: "Productos endulzados de manera natural",
    image: "/slide1_dried_fruits.jpg",
  },
  {
    id: 2,
    title: "we deliver your order wherever you are in NY",
    image: "/slide2.png",
  },
  {
    id: 3,
    title: "the best pizza to share with your family",
    image: "/slide3.jpg",
  },
];


const Slider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Al pasar un Array vacío, se ejecuta solo una vez, cuando se carga el componente.
  useEffect(() => {
    // Se ejecuta el estado del slide
    const interval = setInterval(
      // si es el último elemento, que sea 0, de lo contrario, el elemento previo se le suma 1.
      () => setCurrentSlide((prev) => (prev === data.length - 1 ? 0 : prev + 1)), 5000);

      // limpia el estado
    return () => clearInterval(interval);
  }, [])

  return (
    <div className='flex flex-col h-[calc(100vh-6rem)] md:h-[calc(100vh-9rem)] lg:flex-row bg-amber-50'>
      {/* TEXT CONTAINER */}
      <div className='flex-1 flex items-center justify-center flex-col gap-8 text-amber-600 font-bold '>
        <h1 className='text-5xl text-center uppercase p-4 md:p-10 md:text-6xl xl:text-7xl'>
          {data[currentSlide].title}
        </h1>
        <button className='bg-amber-600 text-white py-4 px-8'>Order Now</button>
      </div>
      {/* IMAGE CONTAINER */}
      <div className='w-full flex-1 relative '>
        <Image src={data[currentSlide].image} alt='' fill className='object-cover' />
      </div>
    </div>
  )
}

export default Slider
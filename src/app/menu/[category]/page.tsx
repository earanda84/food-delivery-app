import { pizzas } from '@/data'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const CategoryPage
    = () => {
        return (
            <div className='flex flex-wrap text-amber-500'>
                {pizzas.map((item) => (
                    <Link key={item.id} className='w-full h-[60vh] border-r-2 border-b-2 border-amber-500 sm:w-1/2 lg:w-1/3 p-4 flex flex-col justify-between group odd:bg-amber-50' href={`/product/${item.id}`}>
                        {/* IMAGE CONTAINER */}
                        {item.img && (
                            <div className="relative h-[90%]">
                                <Image src={item.img} alt='' fill className='object-contain'/>
                            </div>
                        )}
                        {/* TEXT CONTAINER*/}
                        <div className='flex items-center justify-between font-bold'>
                            <h1 className='text-2xl uppercase p-2'>{item.title}</h1>
                            <h2 className='group-hover:hidden text-xl'>${item.price}</h2>
                            <button className='hidden uppercase bg-amber-500 text-white p-2 rounded-md font-semibold group-hover:block'>Agregar</button>
                        </div>
                    </Link>
                ))}
            </div>
        )
    }

export default CategoryPage

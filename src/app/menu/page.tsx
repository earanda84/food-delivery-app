// import { menu } from '@/data'
import React from 'react'
import Link from 'next/link'

import {MenuType} from '@/types/types'

const getData = async ()=>{
    const res = await fetch('http://localhost:3000/api/categories',{
        cache:'no-cache'
    })

    if(!res.ok){
        throw new Error("Failed!")
    }

    return res.json()
}

const MenuPage = async() => {
    const menu:MenuType = await getData();
    console.log(menu)

    return (
        <div className='p-4 lg:px-40 h-[calc(100vh-6rem)] md:h-[cal(100vh-9rem)] flex flex-col md:flex-row items-center'>
            {menu.map((category) => (
                <Link key={category.id} href={`/menu/${category.slug}`} className='w-full h-1/3 bg-cover p-8 md:h-1/2' style={{backgroundImage:`url(${category.img})`}}>
                    <div className={`text-${category.color} w-1/2`}>
                        <h1 className='uppercase font-bold text-3xl'>{category.title}</h1>
                        <p className='text-sm my-8'>{category.desc}</p>
                        <button className={`hidden 2xl:block bg-black text-${category.color === 'black' ? 'white':'white'} font-bold py-2 px-4 rounded-md`}>Abrir</button>
                    </div>
                </Link>
            ))}
        </div>
    )
}

export default MenuPage
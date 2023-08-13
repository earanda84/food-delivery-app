import Link from 'next/link'
import React from 'react'

const Footer = () => {
  return (
    <div className='h-12 md:h-24 p-4 lg:px-20 xl:px-40 text-amber-500 flex items-center justify-between'>
      <Link href={'/'} className='font-bold text-xl'>FREGOR</Link>
      <p>© TODOS LOS DERECHOS RESERVADOS.</p>
    </div>
  )
}

export default Footer
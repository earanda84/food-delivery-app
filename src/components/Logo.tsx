import React from 'react'

import Link from 'next/link'
import Image from 'next/image'

const Logo = () => {
  return (
    <div className='font-bold'>
    <Link href={'/'}>
      {/* <Image src={'/logo-fregor.png'} alt='' width={80} height={80}/> */}
      <p>Fregor</p>
    </Link>
  </div>
  )
}

export default Logo
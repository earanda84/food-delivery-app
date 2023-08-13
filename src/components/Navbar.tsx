import Link from 'next/link'
import React from 'react'
import Menu from './Menu'
import CartIcon from './CartIcon';
import Image from 'next/image';
import Logo from './Logo';

const Navbar = () => {
  const user = false;
  return (
    <div className='h-12 text-amber-600 p-4 flex items-center justify-between border-b-2 border-b-amber-600 uppercase md:h-24 lg:px-20 xl:px-40'>
      {/* LEFT LINKS */}      
      <div className='hidden md:flex gap-4 flex-1 font-semibold'>
        <Link href={'/'}>Home</Link>
        <Link href={'/menu'}>Menu</Link>
        <Link href={'/'}>Contact</Link>
      </div>
      {/* LOGO */}
     <Logo/>
      {/* MOBILE MENU */}
      <div className='md:hidden'>
        <Menu />
      </div>
      {/* RIGHT LINKS */}
      <div className='hidden md:flex gap-4 items-center justify-end flex-1'>
        <div className='md:absolute top-3 r-2 lg:static flex items-center gap-2 cursor-pointer bg-amber-400 px-1 rounded-md'>
          <Image src={'/phone.png'} alt='' width={20} height={20}/>
          <span>+569 9999 9999</span>
        </div>
        {!user ?(<Link href={'/'}>Login</Link>):
        (<Link href={'/menu'}>Orders</Link>)}
        <CartIcon />
      </div>
    </div>
  )
}

export default Navbar
import React from 'react';
import Image from 'next/image';
import {assets} from '@/assets/assets';
import { useRef,useEffect,useState} from 'react';
const  Navbar = () => {


  const sideMenuRef=useRef();
  const [isScroll,setIsScroll]=useState(false);


const closeMenu = () => {
  sideMenuRef.current.style.transform = 'translateX(100%)';
};

const openMenu = () => {
  sideMenuRef.current.style.transform = 'translateX(0)';
};

useEffect(()=>{
  window.addEventListener('scroll',()=>{
    if(scrollY>50){
      setIsScroll(true);
    }else{
      setIsScroll(false);
    }
  })
},[])

  return (
    <>
    <div className='fixed top-0 right-0 w-11/12 -z-10 translate-y-[-80%]'>
      <Image src={assets.header_bg_color} alt='' className='w-full'></Image>
    </div>
<nav
  className={`w-full fixed px-5 lg:px-8 xl:px-[8%] flex items-center justify-between z-50 transition-all duration-300 ${
    isScroll
      ? "h-16 bg-white/50 backdrop-blur-md shadow-sm"
      : "h-20"
  }`}
>

        <a href="#top">
            <Image src={assets.logo} alt="" className='w-28 cursor-pointer mr-14 '/>
        </a>
        <ul className={`hidden md:flex items-center gap-6 lg:gap-8 rounded-full px-12 py-3 ${isScroll ? "":"bg-white shadow-sm bg-opacity-50"} `}>
            <li ><a className='font-Ovo' href='#top'>Home</a></li>
            <li><a className='font-Ovo' href='#about'>About</a></li>
            <li><a className='font-Ovo'href='#services'>Services</a></li>
            <li><a className='font-Ovo'href='#projects'>Projects</a></li>
            <li><a className='font-Ovo'href='#contact'>Contact Me</a></li>
        </ul>
        <div className='flex items-center gap-5'>
           <button>
            <Image src={assets.moon_icon} alt="" className='w-6'/>
            </button>
            <a className="hidden lg:flex items-center gap-3 px-10 py-2.5 border border-gray-800 rounded-full ml-4 font-ovo" href="#contact">Contact<Image src={assets.arrow_icon} alt="" className='w-3'/></a>
           <button className='black md:hidden ml-3' onClick={openMenu}>
            <Image src={assets.menu_black} alt="" className='w-6'/>
            </button>
       
        </div>
        <ul ref={sideMenuRef} className='flex md:hidden flex-col gap-4 py-20 px-10 fixed -right-0 top-0 bottom-0 w-64 z-50 h-screen bg-rose-50 transition duration-500'>
          
          <div className='absolute right-6 top-6 border border-black-50 p-3 rounded-3xl' onClick={closeMenu}> <Image src={assets.close_black} alt='' className='w-5 cursor-pointer'/></div>
            <li ><a className='font-Ovo block px-4 py-2 rounded-md hover:bg-rose-200 hover:hover:text-gray-800' onClick={closeMenu} href='#top'>Home</a></li>
            <li><a className='font-Ovo block px-4 py-2 rounded-md hover:bg-rose-200 hover:hover:text-gray-800' onClick={closeMenu}  href='#about'>About</a></li>
            <li><a className='font-Ovo block px-4 py-2 rounded-md hover:bg-rose-200 hover:hover:text-gray-800' onClick={closeMenu} href='#services'>Services</a></li>
            <li><a className='font-Ovo block px-4 py-2 rounded-md hover:bg-rose-200 hover:hover:text-gray-800' onClick={closeMenu}  href='#projects'>Projects</a></li>
            <li><a className='font-Ovo block px-4 py-2 rounded-md hover:bg-rose-200 hover:hover:text-gray-800'  onClick={closeMenu} href='#contact'>Contact Me</a></li>
        </ul>
    </nav>
    
    </>
  )
}
export default Navbar;
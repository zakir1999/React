import { assets } from '@/assets/assets'
import React from 'react'
import Image from 'next/image'

const Header = () => {
  return (
<div className="w-11/12 max-w-3xl mx-auto h-screen flex flex-col items-center justify-center text-center gap-4">
  <Image
    src={assets.profile_img}
    alt="Profile picture of Zakir"
    width={200}
    height={200}
  className="rounded-full object-cover border-4 border-white shadow-[0_0_25px_rgba(59,130,246,0.7)]"
  />
  <h3 className="flex items-end justify-center gap-2 text-xl md:text-2xl mb-3 font-Ovo">
    Hi! I'm Md. Zakir Hossen
    <Image src={assets.hand_icon} alt="" className="w-6" />
  </h3>

  <h1 className="text-3xl sm:text-6xl lg:text-[66px] font-Ovo">
    Frontend Web Developer based in Bangladesh.
  </h1>

  <p className="max-w-2xl mx-auto font-Ovo">
I am a Frontend Developer from Dhaka, Bangladesh, with one year of professional experience. I have worked at <strong>SoftBD Ltd.</strong> as a Junior Software Engineer.
  </p>

  <div className="flex flex-col sm:flex-row items-center gap-4 mt-4">
    <a
      href="#contact"
      className="px-10 py-3 border border-white rounded-full bg-black/50 text-white flex items-center gap-2 hover:-translate-x-1 hover:shadow-[0_0_20px_#2a004a] duration-300"
    >
      Contact Me
      <Image src={assets.right_arrow_white} alt="" className="w-4" />
    </a>

    <a
      href="/Resume.pdf"
      download
      className="px-10 py-3 border rounded-full border-gray-500 flex items-center gap-2 hover:-translate-x-1 hover:shadow-[0_0_20px_#2a004a] duration-300"
    >
      My Resume
      <Image src={assets.download_icon} alt="" className="w-4" />
    </a>
  </div>
</div>





  )
}

export default Header
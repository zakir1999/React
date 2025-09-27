import { assets } from '@/assets/assets'
import React from 'react'
import Image from 'next/image'

export const Footer = () => {
  return (
    <div className='mt-20'>
        <div className='text-center'>
            <Image src={assets.logo} alt='' className='w-36 mx-auto mb-2' />


            <div className='flex gap-2 w-max items-center mx-auto'>
            <Image src={assets.mail_icon} alt='' className='w-6 mx-auto mb-2' />
            m.zakirhossen99@gmail.com



            </div>
            <div className='text-center sm:flex items-center justify-between border-t border-gray-400 mx-[10%] mt-12 py-6'>
                <p>© 2025 Md. Jakir Hossen. All rights reserved.
                    
                </p>
                <ul className='flex items-center gap-10 justify-center mt-4 sm:mt-0'>
                    <li>
                        <a target='_blank' href="https://github.com/zakir1999">GitHub</a>
                    </li>
                    <li>
                        <a target='_blank' href="www.linkedin.com/in/zakir-hossen99">Linkedin</a>
                    </li>
                    <li>
                        <a target='_blank' href="https://www.facebook.com/zakir.hossen.983152/">Facebook</a>
                    </li>

                </ul>
            </div>
        </div>
    </div>
  )
}

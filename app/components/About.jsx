import React from 'react'
import { assets, infoList, toolsData } from '@/assets/assets'
import Image from 'next/image'
const About = () => {
  return (
    <div id='about' className='w-full px-[12%] py-10 scroll-mt-20'>

        <h4 className='text-center mb-2 text-lg font-Ovo '>
            Introduction
        </h4>

        <h2 className='text-center text-5xl font-Ovo'>About Me </h2>

        <div className='flex w-full flex-col lg:flex-row items-center gap-20 my-20'>
          <div className='w-64 sm:w-80 rounded-3xl max-w-none' >
            <Image src={assets.profile_img} alt=" user " className='w-full rounded-4xl'/>
          </div>
          <div className='flex-1'>
            <p className='mb-10 max-w-2xl mx-auto font-Ovo'>
              I am an experienced Frontend Developer with over a year of professional expertise. Throughout my career, I have had the opportunity to collaborate with reputable organizations, contributing to their projects and overall growth.
            </p>
            <ul className='grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-2xl'>
              {infoList.map(({icon,iconDark,title,description},index)=>(
                <li key={index} className='border-[0.5px] border-gray-500 rounded-xl p-6 cursor-pointer hover:bg-[#fcf4ff]  hover:-translate-y-2 duration-500 hover:shadow-[0_0_20px_#2a004a]'>
                  <Image src={icon} alt={title}  
                  className='w-7 mt-3'/>
                  <h3 className='my-4 font-semibold text-gray-700'>{title}</h3>
                  <p className='text-gray-600 text-sm'>{description}</p>
                </li>
              ))}
            </ul>

            <h4>Tools I Use</h4>
            <ul className='flex items-center gap-1.5 sm:gap-2'>

              {toolsData.map((tool,index)=>(
              <li key={index} className='flex items-center justify-center w-12 sm:w-14 aspect-square border border-gray-600 rounded-lg cursor-pointer hover:-translate-y-1 duration-500'>
                <Image src={tool} alt='Tool' className='w-5 sm:w-7'/>

              </li>
              ))}
            </ul>
          </div>

        </div>
    </div>
  )
}

export default About
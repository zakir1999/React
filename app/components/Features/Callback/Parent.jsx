import React ,{useState} from 'react'
import Child from './Child';
export const Parent = () => {

const [color,setColor]=useState(null);
const getColor=(color)=>{
    setColor(color);
}

  return (
    <div className='w-full h-screen flex flex-col items-center justify-center'>
        <h1 className='text-blue-500   text-5xl '>Parent Component Box</h1>
        <div className={`flex items-center justify-center h-25 hover:-translate-x-1 hover:shadow-[0_0_20px_#2a004a] duration-300 w-25 mt-10 border border-black-700 rounded-lg `} style={{backgroundColor:color || "transparent"}}>
        Color

        </div>
        <Child getColor={getColor}/>


    </div>
  );
}

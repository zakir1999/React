import React,{useState} from 'react'

const Callback = ({getColor}) => {
    const [activecolor,setActiveColor]=useState("");


    const handleChange =(e)=>{
        const {value} =e.target;
        setActiveColor(value);
        getColor(value);
    };


  return (
    <div >
        <h1 className='text-amber-800 text-2xl'>Child Component</h1>
        <input type="text" id="input" placeholder='Enter Color' aria-label="input" className='border border-black-700 rounded-lg p-2 mt-5' value={activecolor} onChange={handleChange}/>
    </div>
    

  )
}
export default Callback
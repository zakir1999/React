'use client';
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import About from "./components/About";
import Services from "./components/Services";
import Work from './components/Work';
import { Contact } from "./components/Contact";
import { Parent } from "./components/Features/Callback/Parent";
import { Footer } from "./components/Footer";
import { useEffect, useState } from "react";
export default function Home() {
  // const [darkTheme,setdarkTheme]=useState(true);
  // useEffect(()=>{
  //   if(localStorage.theme==='dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme:dark)').matches)){
      
  //     setdarkTheme(true);
  //   }else{
  //     setdarkTheme(false);

  //   }
  // },[])
  // useEffect(()=>{
  //   if(darkTheme){
  //     document.documentElement.classList.add('dark');
  //     localStorage.theme='dark';
  //   }else{
  //     document.documentElement.classList.remove('dark');
  //     localStorage.theme='';
  //   }
  // },[darkTheme])
  return (
    <>
    <Navbar/>
    <Header />
    <About/>
    <Services />
    <Work />
    <Contact />
    <Footer />

    </>
  );
}

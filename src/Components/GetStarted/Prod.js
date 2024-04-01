import React from 'react'
import Navbar from '../Navbar'
import { useState,useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import Type from './Type';
import Footer from './Footer';
function Prod() {

    let navigate = useNavigate();
    const [item,setItem]=useState([]);
    const [show,setShow]=useState(true);
    
    async function fetchData(){
        const resp = await fetch('https://dummyjson.com/products');
        const data = await resp.json();
        setItem(data.products);
        console.log(data.products);
        
        setShow(false);
        
         
        
    
       }
        useEffect(()=>{
            
            fetchData();
            
         },[])

  return (
    <>
        <div className=' bg-slate-300 dark:bg-slate-900 h-full'>
            <Navbar/>
            <Type/>
             <div className=' flex flex-wrap justify-center items-center gap-4'>

            

             {
                item.map(x=>{
                    return(
                    <div onClick={()=>navigate(`/prod/${x.id}`)} key={x.id} className='bg-slate-50  shadow-lg hover:border-4 dark:bg-black my-5 flex flex-col hover: cursor-pointer hover: scale-105 transition-all duration-300 rounded-md p-1  w-[400px] h-[400px] dark:text-white'>
                    <div className=" -mx-1 -mt-1 overflow-y-hidden absolute w-[130px] h-[25px] text-sm z-4 bg-orange-500 text-black py-1 px-2 rounded-tr-md rounded-bl-md font-extrabold uppercase">
        {x.category}
      </div>
                    <div>
                    <div className=' w-12/12 mt-0 flex mb-2'>
                    <img className=' w-[390px] h-[250px] object-contain mt-0' src={x.thumbnail}></img>
                    </div>
                        
                    </div>
                    <div className=' text-xl dark:text-white text-black font-madimi font-extrabold uppercase'>{x.title}</div>
                        <div className='  text-xl dark:text-white text-black font-serif font-bold'>Brand: {x.brand}</div>
                        <div className=' text-xl dark:text-white text-black font-bold'>Price: {x.price}</div>
                        <div className=' text-xl dark:text-white text-black font-bold'>Rating: {x.rating}</div>
                       

                    </div>
                    )
                })
            }  
            </div>
            
        </div>
        <Footer/>
    </>

  )
}

export default Prod
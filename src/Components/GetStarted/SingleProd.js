import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Navbar from '../Navbar';
import Footer from './Footer';

function SingleProd() {
  const [item, setItem] = useState(); 
  const { prodId } = useParams();

  async function fetchData() {
    const resp = await fetch(`https://dummyjson.com/products/${prodId}`);
    const data = await resp.json();
    setItem(data);
  }

  useEffect(() => {
    fetchData();
  }, []);

  // Slider settings
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <>
      <Navbar />
      <div className='flex justify-center items-center bg-slate-300 dark:bg-slate-700'>
        <div className='h-auto md:h-[500px] w-full md:w-8/12 my-[140px] flex flex-col md:flex-row rounded-lg shadow-lg bg-slate-50 dark:bg-slate-900'>
          <div className='md:w-6/12 m-1'>
            <div>
              {/* Slider */}
              {item && (
                <Slider {...sliderSettings}>
                  {item.images.map((image, index) => (
                    <div key={index}>
                      <img src={image} alt={`Slide ${index}`} className='w-full h-full object-cover' style={{ maxHeight: '500px' }} />
                    </div>
                  ))}
                </Slider>
              )}
            </div>
          </div>
          <div className='md:w-6/12 pl-9 py-1 dark:text-white text-black '>
            <div className='text-3xl font-extrabold my-3 font-madimi'>{item?.title}</div>
            <div className='text-xl font-extrabold my-3 font-workbench'>{item?.description}</div>
            <div className='text-xl font-extrabold my-3 font-workbench'>Discount Percentage: {item?.discountPercentage}</div>
            <div className='text-xl font-extrabold my-3 font-workbench'>Rating: {item?.rating}</div>
            <div className='text-xl font-extrabold my-3 font-workbench'>Stock: {item?.stock}</div>
            <div className='text-xl font-extrabold my-3 font-workbench'>Brand: {item?.brand}</div>
            <button onClick={()=>{
              alert('ORDERING FACILITY NOT AVAILABLE NOW, STAY TUNED FOR UPDATES');
            }} className='dark:bg-green-400 bg-black dark:text-black text-white rounded-lg p-3 hover:scale-110 font-serif font-bold hover:cursor-pointer shadow-xl mt-4 md:mt-0'>BUY NOW</button>
          </div>
        </div>
      </div>
      <Footer/>
    </>
  );
}

export default SingleProd;

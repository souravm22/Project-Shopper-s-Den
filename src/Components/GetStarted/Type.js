import React from 'react'
import { TypeAnimation } from 'react-type-animation';



function Type() {
    return (
        <div className=' font-extrabold font-workbench text-2xl text-black dark:text-yellow-300 text-center my-3'>

       
        <TypeAnimation
      sequence={[
        // Same substring at the start will only be typed out once, initially
        "Every Sunday Mega Offer on over 100 products",
        1000, 
        "Every Wednesday, upto 20% off on selected Electronics gadgets",
        1000,

        "Every day: Huge discounts on Deal of the Day products",
        1000,

        
        
      ]}
      
      speed={50}
      
      repeat={Infinity}
    />
     </div>
    );
}
 
export default Type;
import React, { useEffect, useState } from 'react'

function DarkMode() {

    const [theme, setTheme] = useState(
        localStorage.getItem("theme") ? localStorage.getItem("theme") : "light"
      );
    
      const element = document.documentElement; // html element
    
      useEffect(() => {
        if (theme === "dark") {
          element.classList.add("dark");
          localStorage.setItem("theme", "dark");
        } else {
          element.classList.remove("dark");
          localStorage.setItem("theme", "light");
        }
      }, [theme]);
    
  return (
    <>
        <div>
            <button className=' hover: cursor-pointer  hover:scale-110 hover:shadow-xl text-xl font-bold p-1 bg-orange-400 rounded-md border-b-2 dark:border-yellow-300 text-black dark:bg-black dark:text-white' onClick={() => setTheme(theme === "light" ? "dark" : "light")}>Switch Theme</button>
        </div>
    </>
  )
}

export default DarkMode
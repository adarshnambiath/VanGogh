import React from "react";
import Link from 'next/link';
import './/globals.css'
export default function Home() {
  return (
   <>
   <div className="flex flex-wrap justify-center items-center font-extralight" style={{
            backgroundImage: `url("img/portrait.jpeg")`,
            height: "100vh",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
        }}>
        <div className="grid grid-rows-4 gap-4 items-center">
        <h1 className="text-white text-[75px]">Van Gogh</h1>
        <Link href="/early_life" className="text-orange-100 text-[30px] hover:text-white">early life</Link>
        <Link href="/artist" className="text-orange-100 text-[30px] hover:text-white">artistic breakthrough</Link>
        <Link href="/death" className="text-orange-100 text-[30px] hover:text-white">death</Link>
        </div>
        </div>
   </>
  )
}

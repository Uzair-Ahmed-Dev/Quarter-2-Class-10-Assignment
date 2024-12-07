import Image from "next/image";

import React from 'react'



const page = () => {
  return (
    <main>
   


<section className="flex gap-5 my-10 mx-10 ">
    <div className="w-1/2 h-[600px] bg-red-500 bg-cover">
    <Image
      src="/slideShow1.jpg"
      alt="Periwinkle Flower"
      width="700"
      height="900"
      className="rounded-md shadow-xl bg-cover"
      ></Image>
       
    </div>

    <div className="w-1/2 ">
    <Image
      src="/slideShow2.jpg"
      alt="Periwinkle Flower"
      width="700"
      height="400"
      className="rounded-md shadow-xl"
      ></Image>
     
    </div>
    </section>

    <section className=" flex my-40 mx-10 gap-5">
    <div className="w-1/2 border-2  ">
       <Image
      src="/imageWebsite.jpg"
      alt="Rose Flower BUquet"
      width="500"
      height="400"
      className="rounded-md shadow-xl"
      ></Image>
      
    </div>

    <div className="w-1/2 border-2 rounded-lg shadow-xl">
      <Image
      src="/imageWebsite2.jpg"
      alt="Tupil Custom Flower"
      width="440"
      height="370"
      className="rounded-md shadow-xl "
      ></Image>
      
    </div>

    <div className="w-1/2 border-2 rounded-lg shadow-xl">
     <Image
      src="/imageWebsite3.jpg"
      alt="Tupil  Flower"
      width="500"
      height="400"
      className="rounded-md shadow-xl"
      ></Image>
     
    </div>
    </section>
</main>
  )
}

export default page


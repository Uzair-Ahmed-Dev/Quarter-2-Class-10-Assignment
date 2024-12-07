import Image from "next/image"

function ProductCard() {
    return(
<div className="cantainer mx-auto border border-red-700">
<h1 className=" text-4xl w-2/4 m-auto text-center py-5 font-mono ">Discover the Latest Addition at Your Top Choice Flower Shop</h1>
<p className="text-center font-mono w-2/4 m-auto py-5">Share some details here. This is flexiable section where you can share anythings you want.</p>
    <section className=" flex flex-wrap justify-center my-10 mx-10 gap-5">
        {/* First product card */}
        <div className="flex flex-col sm:w-1/1 md:w-1/3 lg:w-1/4">
        <div className="  border-2 rounded-lg shadow-xl h-[600px] md:h-[500px] lg:h-[600px] "> 
        <Image
      src="/product-3.jpg"
      alt="Rose Flower BUquet"
      width="500"
      height="400"
      className="rounded-t-md shadow-xl"
      ></Image>
       <div className="m-10">
       <p className="text-center text-gray-500 font-mono py-2">Bouquet</p>
      <h3 className="text-center p-2 font-mono text-2xl">Rose Flower BUquet</h3>
      <p className="text-center  ">☆☆☆☆☆</p>
      <p className="text-center font-mono"><span className="line-through text-gray-400">$210.00</span> $199.00</p>
      </div>
        </div>
        </div>

        {/* second product card */}
        <div className="flex flex-col sm:w-1/1 md:w-1/3 lg:w-1/4">
        <div className=" border-2 rounded-lg shadow-xl h-[600px] md:h-[500px] lg:h-[600px]  ">
        <Image
      src="/product-4.jpg"
      alt="Tupil Custom Flower"
      width="500"
      height="400"
      className="rounded-t-md shadow-xl"
      ></Image>
       <div className="m-10">
      <p className="text-center text-gray-500 font-mono py-2">Bouquet</p>
      <h3 className="text-center p-2 font-mono text-2xl">Tupil Custom Flower</h3>
      <p className="text-center  ">☆☆☆☆☆</p>
      <p className="text-center font-mono"><span className="line-through text-gray-400">$129.00</span> $129.00</p>
      </div>
        </div>
        </div>

        {/* Third product card */}
        <div className="flex flex-col sm:w-1/1 md:w-1/3 lg:w-1/4">
        <div className="   border-2 rounded-lg shadow-xl h-[600px] md:h-[500px] lg:h-[600px] ">
        <Image
      src="/product-5.jpg"
      alt="Tupil  Flower"
      width="500"
      height="400"
      className="rounded-t-md shadow-xl"
      ></Image>
     <div className="m-10">
      <p className="text-center text-gray-500 font-mono py-2">Bouquet</p>
      <h3 className="text-center p-2 font-mono text-2xl">Tupil  Flower</h3>
      <p className="text-center  ">☆☆☆☆☆</p>
      <p className="text-center font-mono"><span className="line-through text-gray-400">$129.00</span> $99.00</p>
      </div>
        </div>
        </div>
    </section>
    
</div>
    )
}

export default ProductCard;
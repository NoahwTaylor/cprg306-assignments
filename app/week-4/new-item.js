"use client"
import { useState } from "react";

export default function NewItem()
{
  const [quantity, setQuantity] = useState(1);

  function Increment()
  {
    if(quantity < 20)
      {
        setQuantity(quantity + 1);
      }
  }

  function Decrement()
  {
    if(quantity > 1)
      {
        setQuantity(quantity - 1)
      }  
  }

  return(
    
    <section className="flex flex-col items-center rounded-lg mt-5">
      <p className="text-white text-2xl font-bold mb-3">Add New Item</p>
      
      <div className="flex flex-col justify-center bg-white h-36 w-1/5 rounded-sm p-5">
        <p className="text-black">Quantity: <b>{quantity}</b></p>
        <div className="">
          <button className="w-10 h-10 bg-gray-200 hover:bg-gray-300 rounded-md mr-1.5 text-black shadow-md" onClick={Decrement}>-</button>
          <button className="w-10 h-10 bg-blue-500 hover:bg-blue-600 rounded-md shadow-md" onClick={Increment}>+</button>
        </div> 
        <p className="text-black text-xs">Allowed Range: 1-20</p>
      </div>

    </section>
    
  );
}
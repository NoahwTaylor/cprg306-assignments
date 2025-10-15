"use client"
import { useState } from "react";

export default function NewItem()
{
  const [name, setName] = useState("")
  const [quantity, setQuantity] = useState(1);
  const [category, setCategory] = useState("Produce")

  const handleName = (e) => { setName(e.target.value) }
  const handleCategory = (e) => { setCategory(e.target.value)}
  
  const handleSubmit = (e) => { 
    e.preventDefault() 
    alert(`Item: ${name} \nQuantity: ${quantity} \nCategory: ${category}`)
  }

  return(
 
    <section className="flex flex-col items-center rounded-lg mt-5 text-black">
      <p className="text-white text-2xl font-bold mb-3"> Week 5 - New Item</p>
      <div className=" bg-white h-full w-full max-w-md rounded-sm p-5">
        <form onSubmit={handleSubmit} className="flex flex-col justify-center rounded-lg mt-5">

          <label htmlFor="item-name">Item Name:</label>
          <input type="text" name="item-name" onChange={handleName} className="w-full border border-gray-300 rounded-md p-2 mb-6 text-black" placeholder="e.g., milk, 4L" required />
      
          <p>Quantity: <b>{quantity}</b></p>
          <div>
            <button type="button" className="w-10 h-10 bg-gray-200 hover:bg-gray-300 rounded-md mr-1.5 shadow-md" onClick={() => {if(quantity > 1){setQuantity(quantity-1)}}}>-</button>
            <button type="button" className="w-10 h-10 bg-blue-500 hover:bg-blue-600 rounded-md text-white shadow-md" onClick={() => {if(quantity < 20){setQuantity(quantity + 1)}}}>+</button>
          </div> 
          <p className="text-xs mb-6">Allowed Range: 1-20</p>

          <label htmlFor="category">Category:</label>
          <select name="category" onChange={handleCategory} className="w-full border border-gray-300 rounded-md p-2 mb-3 text-black">
            <option value="Produce">Produce</option>
            <option value="Dairy">Dairy</option>
            <option value="Bakery">Bakery</option>
            <option value="Meat">Meat</option>
            <option value="Frozen Foods">Frozen Foods</option>
            <option value="Canned Goods">Canned Goods</option>
            <option value="Dry Goods">Dry Goods</option>
            <option value="Beverages">Beverages</option>
            <option value="Snacks">Snacks</option>
            <option value="Household">Household</option>
            <option value="Other">Other</option>
          </select>

          <button type="submit" className="mt-3 w-full bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded-md shadow-md">Add Item</button>
        </form>
      </div>
    </section>
  );
}
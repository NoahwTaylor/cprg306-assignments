"use client"
import Item from "./item";
import { useState } from "react";
import { useEffect } from "react";


export default function ItemList({items, onItemSelect}){
  const [sortBy, setSortby] = useState("name")
  const [sortedItems, setSortedItems] = useState([...items])

  const sortingChoice = (sortBy, list = sortedItems) => {
    if(sortBy === "name")
    {
      return([...list].sort((o1, o2) => o1.name.localeCompare(o2.name)))
    }
    else if (sortBy === "category")
    {
      return([...list].sort((o1, o2) => o1.category.localeCompare(o2.category)))
    }
    return list;
  }

  useEffect(() => {
      setSortedItems(sortingChoice(sortBy, items));   
    }, [items, sortBy]);

  return(
    <article className="flex justify-center">
      <div className="w-md mx-5">
        <header className="my-5 text-2xl font-bold">
          <h1>Shopping List</h1>
          <div className="font-extralight">
            <p className="text-xs my-3">Sort By:</p>
            <button name="name-sort" className=" w-1/5 p-2 h-10 bg-gray-200 hover:bg-gray-300 rounded-md mr-1.5 text-black shadow-md text-sm" onClick={() => setSortby("name")}>Name</button>
            <button name="category-sort" className="w-1/5 p-2 h-10 bg-blue-500 hover:bg-blue-600 rounded-md text-white shadow-md text-sm" onClick={() => setSortby("category")}>Category</button>
          </div>
        </header>
        {sortedItems.map((item, index) => (
          <Item key={index} {...item} onSelect={onItemSelect}/>
        ))}
      </div>
    </article>
  )
}
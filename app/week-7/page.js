"use client"
import { useState } from "react";
import ItemList from "./item-list"
import NewItem from "./new-item"; 
import itemData from "./items.json"



export default function Page() {
  const [items, setItems] = useState([...itemData])

  const handleAddItem = (newItem) => {setItems((prevItems) => [...prevItems, newItem])}
  return(
    <div>
      <NewItem onAddItem={handleAddItem}/>
      <ItemList items={items}/>
    </div>
    
  );
}
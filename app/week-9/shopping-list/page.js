"use client"
import { useState } from "react";
import ItemList from "./item-list"
import NewItem from "./new-item"; 
import itemData from "./items.json";
import MealIdeas from "./meal-ideas";
import { useUserAuth } from "../../../contexts/AuthContext";

export default function Page() {

  const { user } = useUserAuth();

  const [items, setItems] = useState([...itemData])
  const [selectedItemName, setSelectedItemName] = useState();

  const handleAddItem = (newItem) => {setItems((prevItems) => [...prevItems, newItem])}
  const handleItemSelect = (name) => {setSelectedItemName(name)}

  if (user !== null)
  {
    return(
      <div className="flex flex-crow items-start justify-center gap-6 p-6">
        <div>
          <NewItem onAddItem={handleAddItem}/>
          <ItemList items={items} onItemSelect={handleItemSelect}/>
        </div>

        <MealIdeas ingredient={selectedItemName}/>
      </div> 
    );
  }  
}
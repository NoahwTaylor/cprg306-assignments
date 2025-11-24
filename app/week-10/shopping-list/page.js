"use client"
import { useState, useEffect } from "react";
import ItemList from "./item-list"
import NewItem from "./new-item"; 
import MealIdeas from "./meal-ideas";
import { useUserAuth } from "../../../contexts/AuthContext";
import { getItems, addItems } from "../services/shopping-list-service";

export default function Page() {

  const { user } = useUserAuth();

  const [items, setItems] = useState([])
  const [selectedItemName, setSelectedItemName] = useState();

  const handleAddItem = async (newItem) => { 
    const id = await addItems(user.uid, newItem);
    const fullItem = {id, ...newItem};
    setItems([...items, fullItem]); 
  }

  const handleItemSelect = (name) => {setSelectedItemName(name)}

  const loadItems = async () => { 
    const userItems = await getItems(user.uid);
    setItems(userItems); 
  }
  useEffect(() => { if(user){ loadItems(); } }, [user])

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
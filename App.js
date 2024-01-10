import React, {useState} from "react";
import Form from "./components/Form";
import ShoppingList from "./components/ShoppingList";
import {nanoid} from"nanoid";

function App(props) {
  const [items, setItems] = useState(props.items);
  console.log(items);
  
  function addItem(name){
	const newItem = {id: `item-${nanoid()}`, name, completed: false};
	setItems([...items, newItem]);
  }
  
  function toggleItemCompleted(id){
	  const updateItems = items.map((item) => {
		  if (id === item.id){
			  return{...item, completed: !item.completed};
		  }
		  return item;
	  });
	  setItems(updateItems);	 
  }
  
  function deleteItem(id){
	  const remaingItems = items.filter((item) => id !== item.id);
	  setItems(remaingItems);
  }
  
  function editItem(id, newName){
	  const editedGroceryList = items.map((item)=>{
		  if (id ===item.id){
			  return{...item, name: newName };
		  }
		  return item;
	  });setItems(editedGroceryList);
  }
  
  const groceryList = items.map((item) => (
  <ShoppingList 
	id={item.id} 
	name={item.name} 
	completed={item.completed} 
	key={item.id}
	toggleItemCompleted={toggleItemCompleted}
	deleteItem = {deleteItem}
	editItem={editItem}
  />
  ));	
  
  return (
    <div className="shoppingListApp stack-large">
      <h1>Shopping List</h1>
	  <Form addItem={addItem} />
	  
      <ul
        role="list"
        className="shopping-list stack-large stack-exception"
        aria-labelledby="list-heading">
        {groceryList}
      </ul>	
    </div>
	
	
  );
}

export default App;

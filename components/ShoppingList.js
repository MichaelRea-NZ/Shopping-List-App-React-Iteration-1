import React, {useState} from "react";

function  ShoppingList(props){
	const [isEditing, setEditing] = useState(false);
	const [newName, setNewName] = useState("");
	
	function handleChange(e){
		setNewName(e.target.value);
	}
	
	function handleSubmit(e){
		e.preventDefault();
		props.editItem(props.id, newName);
		setNewName("");
		setEditing(false);
	}
	
	const editingTemplate = (
	  <form className="stack-small" onSubmit= {handleSubmit}>
	  
		<div className="form-group">
		
		  <label className="item-label" htmlFor={props.id}>
			New name for {props.name}
		  </label>
		  
		  <input 
			id={props.id}
			className="item-text"
			type="text"
			value={newName}
			onChange= {handleChange}
		/>
		  
		</div>
		
		<div className="btn-group">
		
		  <button 
			type="button" 
			className="btn item-cancel "
			onClick = {() => setEditing(false)}>
			Cancel
			<span className="visually-hidden">renaming {props.name}</span>
		  </button>
		  
		  <button type="submit" className="btn  item-edit">
			Save
			<span className="visually-hidden">new name for {props.name}</span>
		  </button>
		  
		</div>
		
	  </form>
	);
	
	const viewTemplate = (
	  <div className="stack-small">
		<div className="c-cb">
		  <input
			id={props.id}
			type="checkbox"
			defaultChecked={props.completed}
			onChange={() => props.toggleItemCompleted(props.id)}
		  />
		  <label className="item-label" htmlFor={props.id}>
			{props.name}
		  </label>
				  
		  <button
			type="button"
			className="btn btn__danger"
			onClick={() => props.deleteItem(props.id)}>
			Delete <span className="visually-hidden">{props.name}</span>
		  </button>
		  
		  <button type="button" className="btn btn_edit" onClick={() => setEditing(true)}>
			Edit <span className="visually-hidden">{props.name}</span>
		  </button>
		</div>
	  </div>
	);
	
	
	return	<li className="todo">{isEditing ? editingTemplate : viewTemplate}</li>;
}

export default ShoppingList;
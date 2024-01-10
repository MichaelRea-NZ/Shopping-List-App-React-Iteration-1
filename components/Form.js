import React, {useState} from "react";

function Form(props){
	
	const [name, setName] = useState("");
	
	function handleChange(e){
		console.log(e.target.value);
		setName(e.target.value);
	}
	
	function handleSubmit(e){
		e.preventDefault();
		props.addItem(name);
		setName("");
	}
	
	return(
		<form onSubmit={handleSubmit}>
			<h2 className="lable-wrapper">
				<label htmlFor="new-item-input" className="label__lg">
					Add a new item!
				</label>
			</h2>
			
			<input
			    type="text"
			    id="new-item-input"
			    className="input input__lg"
			    name="text"
			    autoComplete="off"
				value={name}
				onChange={handleChange}				
			/>	
		    <button type="submit" className="btn btn__primary ">
			    Add
			</button>
	  </form>
	);
}

export default Form;
import "./App.css";
import React, {useState, useEffect} from "react";
import Todo from "./components/Todo";
import axios from "axios";

const App = () => {
  const [todos, setTodos] = useState([]);

	useEffect(()=>{
		console.log("Page loaded");
		axios.get("https://jsonplaceholder.typicode.com/todos")
			.then((res)=>{
				setTodos(res.data.slice(0, 10));
			})
			.catch((err)=>{console.log(err)});
	},[])

	useEffect(()=>{
		window.alert("TODOS UPDATED!");
	},[todos])

	const toggleComplete = (id) =>{
		let target = todos;
		console.log(target);
		target = target.map((row)=> row.id==id? {...row, completed : !row.completed} : row);
		console.log(target);
		setTodos(target);
	}

	return (
		<div>
			<h1>Your To Do List</h1>
			<div className='container'>
				{todos &&
					todos.map((row) => (
						<Todo data={row} toggleComplete={toggleComplete} key={row.id} />
					))}
			</div>
		</div>
	);
};

export default App;

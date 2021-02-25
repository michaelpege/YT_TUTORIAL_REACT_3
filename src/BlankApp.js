import "./App.css";
import React, {useState} from "react";
import Todo from "./components/Todo";

const App = () => {
	const [todos, setTodos] = useState([
		{
			userId: 1,
			id: 1,
			title: "delectus aut autem",
			completed: false,
		},
		{
			userId: 1,
			id: 2,
			title: "quis ut nam facilis et officia qui",
			completed: false,
		},
	]);
	return (
		<div>
			<h1>Your To Do List</h1>
			<div className='container'>
				{todos && todos.map((row) => <Todo data={row} key={row.id} />)}
			</div>
		</div>
	);
};

export default App;

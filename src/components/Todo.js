import React from "react";

const Todo = ({data, toggleComplete}) => {
	return (
		<div className='todo'>
			<div
				onClick={() => toggleComplete(data.id)}
				className={data.completed ? "active" : "non-active"}
			></div>
			<div className='text'>{data.title}</div>
		</div>
	);
};

export default Todo;

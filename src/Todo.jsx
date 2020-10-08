import React from 'react';

const Todo = ({ todo, index, completeTodo }) => {
	return (
		<div>
			<ul>
				<li onClick={() => completeTodo(index)}>{todo.text}</li>
			</ul>
		</div>
	);
};

export default Todo;

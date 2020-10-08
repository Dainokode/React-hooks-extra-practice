import React, { useState } from 'react';
import Todo from './Todo';
import './styles.css';
import AddTodoForm from './AddTodoForm';

const App = () => {
	const [todos, setTodos] = useState([]);

	const addTodo = (text) => {
		setTodos([...todos, { text }]);
	};

	const completeTodo = (index) => {
		const newTodos = [...todos];
		newTodos.splice(index, 1);
		setTodos(newTodos);
	};

	return (
		<div className="App">
			<div className="todo-list">
				<h1>Todo List</h1>
				{todos.map((todo, index) => {
					return (
						<Todo
							completeTodo={completeTodo}
							key={index}
							index={index}
							todo={todo}
						/>
					);
				})}
				<AddTodoForm addTodo={addTodo} />
			</div>
		</div>
	);
};

export default App;

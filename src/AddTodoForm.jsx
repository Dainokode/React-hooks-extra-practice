import React, { useState } from 'react';

const AddTodoForm = ({ addTodo }) => {
	const [value, setValue] = useState('');

	const handleSubmit = (e) => {
		e.preventDefault();
		addTodo(value);
		setValue('');
	};

	return (
		<form onSubmit={handleSubmit}>
			<input
				type="text"
				placeholder="Add Todo"
				value={value}
				onChange={(e) => setValue(e.target.value)}
			/>
		</form>
	);
};

export default AddTodoForm;

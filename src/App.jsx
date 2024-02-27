// Import State
import { useState } from "react";

// Import components
import Input from "./components/Input";
import ListOfTodos from "./components/ListOfTodos";

function App() {
	const [todo, setTodo] = useState("");
	const [todos, setTodos] = useState([]);

	// Function for adding todos (btn).
	function handleClick() {
		if (todo !== "") {
			setTodos([...todos, todo]);
			setTodo("");
		}
	}

	// Function for adding todos (key down).
	function onKeyDown(e) {
		if (e.key === "Enter" && todo !== "") {
			setTodos([...todos, todo]);
			setTodo("");
		}
	}

	// Delete a todo.
	const onHandleDelete = text => {
		const deleteTodo = todos.filter(todo => todo !== text);
		setTodos(deleteTodo);
	};

	return (
		<div className="App">
			<div className="wrapper-todo">
				<h1 className="logo">Todo project</h1>
				<Input todo={todo} setTodo={setTodo} handleClick={handleClick} onKeyDown={onKeyDown} />
				<ListOfTodos todos={todos} onHandleDelete={onHandleDelete} />
			</div>
		</div>
	);
}

export default App;

// Import component.
import Item from "./Item";

// Import css file for ListOfTodos.
import "../css/ListOfTodos.css";

const ListOfTodos = ({ todos, onHandleDelete }) => {
	if (todos.length === 0) return <p className="empty">The list of todos is empty</p>;
	return (
		<div className="todo-list">
			{todos.map((todo, i) => (
				<Item text={todo} onHandleDelete={onHandleDelete} key={i} />
			))}
		</div>
	);
};

export default ListOfTodos;

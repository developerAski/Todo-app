// Import css file for Input.
import "../css/Input.css";

const Input = ({ todo, setTodo, handleClick, onKeyDown }) => {
	return (
		<div className="input-wrapper">
			<input
				type="text"
				placeholder="Create a todo"
				value={todo}
				onChange={e => setTodo(e.target.value)}
				onKeyDown={onKeyDown}
			/>
			<button className="btn-add" onClick={handleClick}>
				+
			</button>
		</div>
	);
};

export default Input;

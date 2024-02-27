// Import css file
import "../css/Item.css";

// Import react-icons
import { BsTrash } from "react-icons/bs";

const Item = ({ text, onHandleDelete }) => {
	return (
		<div className="todo">
			<div className="todo-entry">{text}</div>
			<button className="todo-complate" onClick={() => onHandleDelete(text)}>
				<BsTrash className="delete" />
			</button>
		</div>
	);
};

export default Item;

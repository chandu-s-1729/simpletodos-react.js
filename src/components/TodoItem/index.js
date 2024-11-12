// Write your code here
import './index.css'

const TodoItem = props => {
  const {itemDetails, onDeleteTodo} = props
  const {id, title} = itemDetails

  const onDelete = () => {
    onDeleteTodo(id)
  }

  return (
    <li className="list-item">
      <p>{title}</p>
      <button onClick={onDelete} className="todo-item-btn" type="button">
        Delete
      </button>
    </li>
  )
}

export default TodoItem

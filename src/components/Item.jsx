import { FaTimes } from 'react-icons/fa'
import Card from './Card'

function Item({ eachItem, handleDelete }) {
  return (
    <Card>
      <div className="item">{eachItem.text}</div>
      <button className="btn-link" onClick={() => handleDelete(eachItem.id)}>
        <FaTimes />
      </button>
    </Card>
  )
}
export default Item

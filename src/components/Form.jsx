import { useState } from 'react'
import { FaPlus } from 'react-icons/fa'
// import { Alert } from 'react-alert'

function Form({ handleAdd }) {
  const [text, setText] = useState('')

  const handleTextChange = ({ target: { value } }) => {
    setText(value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const newItem = {
      text: text,
    }
    if (text === '') {
      alert('please enter an item.')
    } else {
      handleAdd(newItem)
      setText('')
    }
  }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          onChange={handleTextChange}
          type="text"
          className="form-input"
          placeholder="Enter Item"
          value={text}
        />
        <button type="submit" className="btn">
          <FaPlus />
          Add Item
        </button>
      </form>
    </div>
  )
}

export default Form

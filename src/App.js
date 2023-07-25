import { v4 as uuidv4 } from "uuid"
import { useState } from "react"

import Header from "./components/Header"
import Form from "./components/Form"
import Itemlist from "./components/Itemlist"
import ItemData from "./components/ItemData"
import ClearAll from "./components/ClearAll"

function App() {
  const [item, setItem] = useState(ItemData)

  const addItem = (newItem) => {
    newItem.id = uuidv4()
    setItem([newItem, ...item])
  }


  const deleteItem = (id) => {
    if (window.confirm('Are you sure?')) {
      setItem(item.filter((eachItem) => eachItem.id !== id)
      )
    }
  }

  const clearAllItems = () => {
    if (window.confirm("Are you sure to clear all items?")) {

      setItem([]);

    }
  }


  return (
    <>
      <div className="container">
        <Header />
        <Form handleAdd={addItem} />
        <Itemlist item={item} handleDelete={deleteItem} />
        <ClearAll handleClear={clearAllItems} />
      </div>
    </>
  );
}

export default App;

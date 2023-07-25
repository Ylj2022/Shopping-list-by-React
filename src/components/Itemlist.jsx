import Item from './Item'

function Itemlist({ item, handleDelete }) {
  return (
    <div className="item-list">
      {item.map((eachItem) => (
        <Item
          key={eachItem.id}
          eachItem={eachItem}
          handleDelete={handleDelete}
        />
      ))}
    </div>
  )
}
export default Itemlist

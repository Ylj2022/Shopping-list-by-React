import note from "../note.png"

function Header() {
  return (
    <div className="header">
        <img src={note} />
        <h1>Shopping List</h1>
    </div>
  )
}
export default Header
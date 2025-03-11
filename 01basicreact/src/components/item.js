import "./item.css"
function Item(props) {
    const itemName = props.name;
    return (<div className = "item">
        <h1>{itemName}</h1>
    </div>)
}

export default Item;
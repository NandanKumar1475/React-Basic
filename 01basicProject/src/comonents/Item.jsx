import'./Item.css'
import { useState } from 'react';
function Item(props){
    const itemName = props.name;
    return(
        <h1>{itemName}</h1>
    )
}
export default Item;
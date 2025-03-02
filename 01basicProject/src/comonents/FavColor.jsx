import { useState } from "react";

function FavColor() {
    const [color, setColor] = useState('red'); // Correctly destructuring the state

    return (
        <>
            <h1>My favorite color is {color}</h1>
            <button
                type="button"
                onClick={() => setColor('blue')} // Properly using the state setter function
            >
              blue
            </button>

            <button type="button"
              onClick={()=> setColor('green')}
            >green</button>
        </>
    );
}

export default FavColor;

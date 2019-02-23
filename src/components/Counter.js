import React from 'react';

const Counter = (props) => {
    const index = props.index;
    //sau pot sa un in (props.index)
    return (
        <div className="counter">
            <button className="counter-action decrement" onClick = { () => props.changeScore(index, -1) }>-</button>
            {/* trebuie sa returnam arrow function(functie anonima) la props.changeScore - cand lucram cu event handleluri,
            trb sa pasam arrow fnct*/}
            {/* exercitiu fun: in loc de index punem numere  */}

            <span className="counter-score">{ props.score2 }</span>

            <button className="counter-action increment" onClick = { () => props.changeScore(index, 1) }>+</button>
        </div>
        //odata ce il ui in return detecteaza ce e si autocompleteaza
    );
   
}

export default Counter;

// ctrl + , -settings
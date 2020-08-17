
import React, {useState, useEffect} from 'react';


function Counter() {
    const [count, setCount] = useState();
    const handleChangeCount= (event) => {setCount(event.target.value)};

    useEffect(
        ()=>{
            document.title ='Votre compteur affiche la valeur de : ${count}'
        }
    );

  
    return (
      <div>
        <p>Entrez la valeur de départ</p>
        <input type='number' value={count} onChange={handleChangeCount}/>
        <p>Ajoutez les points</p>
        <button onClick={() => setCount(count + 1)}>
          +1
        </button>
        <p>Ou supprimez les points</p>
        <button onClick={() => setCount(count - 1)}>
          -1
        </button>
        <p>Votre compteur affiche la valeur de : {count}</p>
      </div>
    );
  }

  export default Counter;
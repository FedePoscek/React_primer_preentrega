import { useState } from "react"
import "./ItemCount.css";

// paso 1 - trabajar con ujn estado que garde el numero seleccionado por el cliente
    // tenemos un Hook q nos permite crear un estado "useState"

    // paso 2 - importar useState
    // me devuelve un array con 2 elemenos, el estado actual y una función que me actualiza ese estado, lo desestructuro y le pongo el prefijo SET

const ItemCount = () => {
    const [contador, setContador] = useState(1);
    // arranco en 1 por que hay 1 en stock, pensando en un ecommerce)

    const incrementar = () => {
        if (contador < 10) {
            setContador(contador + 1);
        }
    }
    // acá el 10 es el stock

    const decrementar = () => {
        if (contador > 1) {
            setContador(contador - 1);
        }
       
    }

  return (
    <>
        <div className="ContenedorCounter">
            <button onClick={decrementar}> - </button>
            <p className="NumeroCounter"> {contador} </p>
            <button onClick={incrementar}> + </button>
        </div>
    </>

    // las funciones van sin parentesis 
  )
}

export default ItemCount
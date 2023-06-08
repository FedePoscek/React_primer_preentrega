// JSX es una extensión de JAVASCRIPT
import './App.css';
import NavBar from './components/NavBar/NavBar';
import TituloPrincipal from './components/TituloPrincipal/tituloPrincipal';
import ItemCount from './components/ItemCount/ItemCount';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';

const App = () => {

  // acá va la parte lógica

  // crea un nuevo objeto `Date`
var today = new Date();
 
// `getDate()` devuelve el día del mes (del 1 al 31)
var dayOf = today.getDay();

// función para obtener el día actual para la pantalla de inicio
function getWeekDay() {
    switch (dayOf){
        case 0: return "domingo";
        case 1: return "lunes";
        case 2: return "martes";
        case 3: return "Miércoles";
        case 4: return "Jueves";
        case 5: return "Viernes";
        case 6: return "Sábado";
    }
}
var dayToday = getWeekDay();


  // en el return va la interfaz del usuario
  return (
    // el div general es por que cada componente debe retornar UN elemento, pero los dejamos vacios "FRAGMENTS"
    <>
      <NavBar />
      <ItemListContainer greeting = {"Bienvenidos a la tienda"} />
      <TituloPrincipal titulo = {"Hola"} dia = {dayToday}/>
      <ItemCount />      
    </>
  )
}

export default App




// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//       <div>
//         <a href="https://vitejs.dev" target="_blank">
//           <img src={viteLogo} className="logo" alt="Vite logo" />
//         </a>
//         <a href="https://react.dev" target="_blank">
//           <img src={reactLogo} className="logo react" alt="React logo" />
//         </a>
//       </div>
//       <h1>Vite + React</h1>
//       <div className="card">
//         <button onClick={() => setCount((count) => count + 1)}>
//           count is {count}
//         </button>
//         <p>
//           Edit <code>src/App.jsx</code> and save to test HMR
//         </p>
//       </div>
//       <p className="read-the-docs">
//         Click on the Vite and React logos to learn more
//       </p>
//     </>
//   )
// }

// export default App

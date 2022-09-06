import React from "react";
import AppUi from "./AppUi";
import './App.css';
import { ContextProvider} from "../TodoContext/ContextProvider";


function App() {
  return ( //Todas las funciones, estados y variables necesarias en los componentes hijos son enviadas mediante los React hooks de context mediante el componente de ContextProvider sin necesidad de pasar props
  <ContextProvider>
    <AppUi/>
  </ContextProvider>
  );
}

export default App;

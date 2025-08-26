import { useState } from "react";
import styles from "./Contador.module.css";

function Contador() {
  const [contador, setContador] = useState(0);
  const recarregarPagina = () => {
    window.location.reload();
  };
    return (

    <>
    
        <div className={styles.container}>
            <h2>Contador: {contador}</h2>
            <button onClick={() => setContador(contador + 1)} >👍LIKE</button>
            <button onClick={() => contador >= 1 && setContador(contador - 1 )} >👎DISLIKE</button>
            <button onClick={recarregarPagina}>🔃REINICIA</button>
        </div>
    
    </>

)
}

export default Contador

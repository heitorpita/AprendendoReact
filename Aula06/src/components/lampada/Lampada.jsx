import React, { useState } from "react";
import styles from "./Lampada.module.css";
import imgAcesa from "../../assets/img/acessa.jpg";
import imgApagada from "../../assets/img/apagada.jpg";

function Lampada() {
  const [acesa, setAcesa] = useState(false);

  return (
    <div className={styles.container}>
      <img
        src={acesa ? imgAcesa : imgApagada}
        alt={acesa ? "Lâmpada acesa" : "Lâmpada apagada"}
        className={styles.lampada}
      />
      <button onClick={() => setAcesa(!acesa)}>
        {acesa ? "DESLIGAR" : "LIGAR"}
      </button>
    </div>
  );
}

export default Lampada;

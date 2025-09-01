import { useState } from "react";
import Button from "../../components/button/Button";
import styles from "./Calculadora.module.css";

function Calculadora() {
  const [expressao, setExpressao] = useState("");
  const [resultado, setResultado] = useState("");

  function adicionarValor(valor) {
    setExpressao((prev) => prev + valor);
  }

  function calcularResultado() {
    try {
      const res = eval(expressao);
      setResultado(res);
    } catch (error) {
      setResultado("Erro");
    }
  }

  function limpar() {
    setExpressao("");
    setResultado("");
  }

  return (
    <div className={styles.container}>
      <h1>Calculadora do JS</h1>
      <div className={styles.visor}>
        <p>{expressao || "0"}</p>
      </div>
      <div className={styles.visor}>
        <p>= {resultado}</p>
      </div>

      <div className={styles.buttons}>
        <Button label="C" onClick={limpar} data-type="action" />
        <Button label="➕" onClick={() => adicionarValor("+")} data-type="operator" />
        <Button label="➖" onClick={() => adicionarValor("-")} data-type="operator" />
        <Button label="✖️" onClick={() => adicionarValor("*")} data-type="operator" />
        <Button label="➗" onClick={() => adicionarValor("/")} data-type="operator" />

        <Button label="7️⃣" onClick={() => adicionarValor("7")} data-type="number" />
        <Button label="8️⃣" onClick={() => adicionarValor("8")} data-type="number" />
        <Button label="9️⃣" onClick={() => adicionarValor("9")} data-type="number" />

        <Button label="4️⃣" onClick={() => adicionarValor("4")} data-type="number" />
        <Button label="5️⃣" onClick={() => adicionarValor("5")} data-type="number" />
        <Button label="6️⃣" onClick={() => adicionarValor("6")} data-type="number" />

        <Button label="1️⃣" onClick={() => adicionarValor("1")} data-type="number" />
        <Button label="2️⃣" onClick={() => adicionarValor("2")} data-type="number" />
        <Button label="3️⃣" onClick={() => adicionarValor("3")} data-type="number" />

        <Button label="0️⃣" onClick={() => adicionarValor("0")} data-type="number" />
        <Button label="🟰" onClick={calcularResultado} data-type="operator" />
      </div>
    </div>
  );
}

export default Calculadora;

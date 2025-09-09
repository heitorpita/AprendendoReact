import React from "react";
import Livro from "../Livro/Livro";
import styles from "./List.module.css";

function List({ livros }) {
  return (
    <div className={styles.container}>
      {livros.map((livro, index) => (
        <Livro key={index} {...livro} />
      ))}
    </div>
  );
}

export default List;
import React from 'react';
import styles from "./Livro.module.css";

function Livro({ titulo, autor, ano, genero, capa, disponivel = true, badge, children }) {
  // classe condicional para o card
  const classeLivro = `${styles.card} ${!disponivel ? styles.indisponivel : ""}`;

  return (
    <div className={classeLivro}>
      {/* badge opcional */}
      {badge && <span className={styles.badge}>{badge}</span>}

      {/* capa */}
      <img src={capa} alt={`Capa do livro ${titulo}`} className={styles.capa} />

      {/* título */}
      <div className={styles.titulo}>{titulo}</div>

      {/* autor e ano */}
      <div className={styles.autorAno}>
        {autor} • {ano}
      </div>

      {/* gênero */}
      <div className={styles.genero}>{genero}</div>

      {/* children opcional */}
      {children && <div className={styles.extra}>{children}</div>}
    </div>
  );
}

export default Livro;

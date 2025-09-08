import React from 'react'
import styles from './styles.module.css'

function Card({ pergunta, resposta}) {
  return (
    <div className={styles.container}>
    
        <h1>{pergunta}</h1>
        <p>{resposta}</p>
    
    </div>
  )
}

export default Card
import React from "react";
import styles from "./styles.module.css";
import Card from "../EventCard/EventCard";

function  ListEvents() {
    return (
        <>
            <main className={styles.container}>

                <Card pergunta="Explique com suas palavras o que é um componente no react" resposta="Um componente no React é uma função  que retorna algo para mostrar na tela." />
                <Card pergunta="Qual a Função do arquivo App.jsx em um projeto React? pq ele é considerado um componente Principal?" resposta="é o componente principal que reúne e exibe todos os outros componente e ele é o principal pq é o primeiro a ser renderizado" />
                <Card pergunta="Descreva o papel do arquivo main.jsx ou index.js ? oq ele faz em relção ao html da aplicação?" resposta="O main.jsx ou index.js conecta o React ao HTML sendo assim ele inicia a aplicação e exibe o componente principal na tela" />
                <Card pergunta="O ciclo de vida de um componente React pode ser dividio em tres fases. quais sao elas ? explique cada um com um exemplo simples." resposta="O ciclo de vida de um componente React tem três fases: montagem (quando aparece na tela), atualização (quando muda) e desmontagem (quando é removido)." />

            </main>
        </>
    )
}
export default ListEvents;
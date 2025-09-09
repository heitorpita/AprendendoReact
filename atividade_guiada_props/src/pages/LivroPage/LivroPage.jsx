import React from "react";
import List from "../../components/List/List";
import styles from "./LivroPage.module.css";

const livros = [
  {
    titulo: "Linux Pocket Guide",
    autor: "Daniel J. Barrett",
    ano: 2016,
    genero: "Linux",
    capa: "./src/assets/img/LinuxPocketGuide.jpg",
    disponivel: true,
    badge: "Essencial",
    children: <p>Um guia prático e compacto para comandos fundamentais do Linux.</p>,
  },
  {
    titulo: "How Linux Works",
    autor: "Brian Ward",
    ano: 2021,
    genero: "Linux",
    capa: "./src/assets/img/HowLinuxWorks.jpg",
    disponivel: true,
    badge: "Novo",
    children: <p>Desvende o funcionamento interno do Linux e amplie seu domínio do sistema operacional.</p>,
  },
  {
    titulo: "The Web Application Hacker's Handbook",
    autor: "Dafydd Stuttard & Marcus Pinto",
    ano: 2011,
    genero: "Pentest",
    capa: "./src/assets/img/webhacker.jpg",
    disponivel: false,
    badge: "Pentest",
    children: <p>Referência completa para testar e invadir aplicações web, utilizada por profissionais de segurança.</p>,
  },
  {
    titulo: "Penetration Testing: A Hands-On Introduction to Hacking",
    autor: "Georgia Weidman",
    ano: 2014,
    genero: "Pentest",
    capa: "./src/assets/img/pentesting.jpg",
    disponivel: true,
    badge: "Promoção",
    children: <p>Livro introdutório com exemplos práticos para quem deseja aprender pentest desde o básico.</p>,
  },
];

function LivroPage() {
  return (
    <div className={styles.page}>
      <h1 className={styles.titulo}>Catálogo de Livros</h1>
      <p className={styles.subtitulo}>
        Confira livros sobre Linux e Pentest, essenciais para seu aprendizado em sistemas e segurança da informação.
      </p>
      <List livros={livros} />
    </div>
  );
}

export default LivroPage;
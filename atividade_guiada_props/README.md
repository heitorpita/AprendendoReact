# Catálogo de Livros React

Projeto desenvolvido para praticar conceitos de componentes, props e estilização com módulos CSS no React.  
O objetivo é criar uma página de catálogo de livros, exibindo informações de cada obra de forma organizada, responsiva e reutilizável.

## Funcionalidades

- **Componente Livro:**  
  Exibe informações detalhadas de um livro (título, autor, ano, gênero, capa), com opção de badge (rótulo) e estilo diferenciado para livros indisponíveis. Permite conteúdo extra via `children` (ex: resenhas).

- **Componente List:**  
  Recebe um array de livros e renderiza o componente Livro para cada item. Layout responsivo em grid.

- **Página LivroPage:**  
  Gerencia os dados dos livros (array) e exibe o catálogo, com título e descrição.

## Estrutura do Projeto

```
src/
 ├── components/
 │    ├── Livro/
 │    │     ├── Livro.jsx
 │    │     └── Livro.module.css
 │    └── List/
 │          ├── List.jsx
 │          └── List.module.css
 ├── pages/
 │    ├── LivroPage.jsx
 │    └── LivroPage.module.css
 ├── App.jsx
 └── index.css
```

## Como executar

1. **Instale as dependências:**
   ```bash
   npm install
   ```
2. **Rode o projeto:**
   ```bash
   npm run dev
   ```
3. **Acesse:**  
   Abra [http://localhost:5173](http://localhost:5173) no navegador.

## Exemplos de livros exibidos

- **Linux Pocket Guide**
- **How Linux Works**
- **The Web Application Hacker's Handbook**
- **Penetration Testing: A Hands-On Introduction to Hacking**

## Observações

- Projeto utiliza [Vite](https://vitejs.dev/) para ambiente de desenvolvimento rápido.
- Para adicionar mais livros, edite o array `livros` em `LivroPage.jsx`.
- Os estilos de cada componente são separados por módulos CSS (isolamento de escopo).

## Autor

Heitor Pita  
[GitHub](https://github.com/heitorpita)

---

Projeto para estudos e atividades guiadas de ReactJS.
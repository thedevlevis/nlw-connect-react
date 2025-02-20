![Demonstração](./.github/gift.gif)

# 🚀 NLW Connect (React)

![Next.js](https://img.shields.io/badge/Framework-Next.js-informational?style=flat&logo=next.js&color=000000)
![TypeScript](https://img.shields.io/badge/Language-TypeScript-informational?style=flat&logo=typescript&color=3178C6)
![Node.js](https://img.shields.io/badge/Runtime-Node.js-informational?style=flat&logo=node.js&color=339933)
![React](https://img.shields.io/badge/Library-React-informational?style=flat&logo=react&color=61DAFB)
![Lucide](https://img.shields.io/badge/Icons-Lucide-informational?style=flat&logo=lucide&color=000000)
![Tailwind CSS](https://img.shields.io/badge/CSS-Tailwind-informational?style=flat&logo=tailwindcss&color=06B6D4)
![Orval](https://img.shields.io/badge/API-Orval-informational?style=flat&logoColor=white&color=333333)
![Zod](https://img.shields.io/badge/Validation-Zod-informational?style=flat&logoColor=white&color=009688)
[![License](https://img.shields.io/badge/License-MIT-green)](#)

## 📌 Sobre o projeto

O **NLW Connect** é uma aplicação web desenvolvida durante o evento NLW da **Rocketseat**.

Essa aplicação é um sistema de indicações por meio de um link de compartilhamento.

A aplicação foi construída utilizando **React**, **Next.js** e **TypeScript**, com estilização via **Tailwind CSS**. Para o gerenciamento de dados e validação, são utilizadas as bibliotecas **Zod** e **Orval**.  

---

## 🚀 Tecnologias utilizadas

- **[Next.js](https://nextjs.org/)** – Framework React para desenvolvimento web moderno.
- **[React](https://react.dev/)** – Biblioteca para construção de interfaces dinâmicas.
- **[TypeScript](https://www.typescriptlang.org/)** – Superconjunto do JavaScript para código mais seguro.
- **[Node.js](https://nodejs.org/)** – Runtime JavaScript para execução no servidor.
- **[Tailwind CSS](https://tailwindcss.com/)** – Estilização moderna e otimizada com classes utilitárias.
- **[Lucide](https://lucide.dev/)** – Conjunto de ícones minimalistas e personalizáveis.
- **[Orval](https://orval.dev/)** – Gerador de clientes API a partir de OpenAPI/Swagger.
- **[Zod](https://zod.dev/)** – Biblioteca para validação de dados com TypeScript.

---

## 🛠 Instalação e execução

Siga os passos abaixo para configurar e rodar o projeto corretamente:

### 🔹 1️⃣ Configuração do Back-End

Clone o repositório do servidor e entre na pasta do projeto:

```sh
git clone https://github.com/thedevlevis/nlw-connect-node.git
cd nlw-connect-node
````
Inicialize os containers com Docker:

```sh
docker compose up -d
````
Execute as migrations para criar as tabelas:

```sh
npm run dp:migrate
````
Inicie o servidor back-end:

```sh
npm run dev
````
### 🔹 2️⃣ Configuração do Front-End
Clone o repositório do front-end e entre na pasta do projeto:

```sh
git clone https://github.com/thedevlevis/nlw-connect-react.git
cd nlw-connect-react
````

Instale as dependências:

```sh
npm install
````

Inicie o servidor de desenvolvimento:

```sh
npm run dev
````

## 🌎 Links importantes
* 🔗 Aplicação Web: http://localhost:3000
* 🔗 API: http://localhost:3333
* 📖 Documentação da API: http://localhost:3333/docs#

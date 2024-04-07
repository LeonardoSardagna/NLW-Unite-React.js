<h1 align="center">Pass-In Event Manager (Front-End)</h1>

###

## Projeto

#### Tela Principal

<img src="public/assets/tela-principal.png" width="720px">

#### Busca de participantes

<img src="public/assets/tela-de-pesquisa.png" width="720px">

###

O aplicativo Pass-In Event Manager é um projeto desenvolvido durante a Next Level Week, um evento da Rocketseat. O Pass.in é uma aplicação de gestão de participantes em eventos presenciais. Utiliza ReactJS e Tailwind CSS para criar uma experiência de usuário dinâmica e visualmente atraente. Para acessar o back-end desta aplicação, visite [este repositório](https://github.com/LeonardoSardagna/NLW-Unite-server-NodeJS.git).

## Funcionalidades

- **Criação e Gerenciamento de Eventos**: Permite aos usuários criar e gerenciar eventos, incluindo detalhes importantes.
- **Gerenciamento de Participantes**: Adiciona e gerencia participantes, facilitando o controle de presença.
- **Check-in em Tempo Real**: Interface para realizar o check-in dos participantes, atualizando o status de participação instantaneamente.
- **Filtragem e Pesquisa Avançada**: Recursos de busca e filtragem para encontrar participantes facilmente.

## Tecnologias Utilizadas 

- **ReactJS**: Criação de uma interface de usuário interativa.
- **Tailwind CSS**: Design responsivo e moderno com uma abordagem utility-first.
- **TypeScript**: Melhoria da manutenção e escalabilidade do código com tipagem estática.

## Integrando Front-End e Back-End

Para uma funcionalidade completa, você precisará configurar e executar o [back-end](https://github.com/LeonardoSardagna/NLW-Unite-server-NodeJS.git), que é responsável por toda a lógica de negócios, autenticação e comunicação com o banco de dados.

## Como executar

1. Clone o repositório do front-end:

```bash
git clone https://github.com/LeonardoSardagna/NLW-Unite-React.js.git
```
2. Intale as dependências:

```bash
npm i
```
3. Inicie o servidor de desenvolvimento:

```bash
npm run dev
```
4. Siga as instruções no [repositório do back-end](https://github.com/LeonardoSardagna/NLW-Unite-server-NodeJS.git) para configurar e executar o servidor Node.js.

5. Não se esqueça de configurar a URL do back-end no arquivo `.env` do front-end para que a aplicação possa se comunicar corretamente.

```js
VITE_API_BASE_URL = "http://localhost:3333";
```

Front-End: [https://github.com/LeonardoSardagna/NLW-Unite-React.js.git](https://github.com/LeonardoSardagna/NLW-Unite-React.js.git)

Back-End: [https://github.com/LeonardoSardagna/NLW-Unite-server-NodeJS.git](https://github.com/LeonardoSardagna/NLW-Unite-server-NodeJS.git)


<img alt="Ignite" src="https://www.notion.so/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2Fad01ee79-762a-4775-bbb6-354f2f42879a%2Fcover-node.js.png?table=block&id=59ccb235-aecd-43a6-a06b-f09a24e7ede8&width=3840&userId=2851198d-6d7e-47d6-b66a-5928d7b96353&cache=v2" />

<h3 align="center">
  Desafio 2-1 e 2-2: Intrudução ao SOLID e Documentando o Swagger
</h3>

<p align="center">
  🧠 Aplicação de listagem e cadastro de usuários
</p>

---

## 🚀 Sobre o desafio

Essa é uma aplicação de listagem e cadastro de usuários. Para que a listagem de usuários funcione, o usuário que solicita a listagem deve ser um admin (mais detalhes ao longo da descrição).

---

### 💻 Instalação e Execução do Projeto

- Clone este repositório

```
$ git clone https://github.com/pedrofbaltar/ignite-mod02-challenge01
```

- Navegue até o diretório principal do projeto

```
$ cd ignite-mod02-challenge01
```

- Instale as dependências com o Yarn

```
$ yarn
```

- Rode a suite de testes

```
$ yarn test
```

- Execute o projeto

```
$ yarn dev
```

---

### 🗺️ Rotas da aplicação

Aqui teremos uma breve descrição de cada rota.

### POST `/users`

A rota deve receber `name`, e `email` dentro do corpo da requisição para que seja possível cadastrar um usuário.

### PATCH `/users/:user_id/admin`

A rota deve receber, nos parâmetros da rota, o `id` de um usuário e transformar esse usuário em admin.

### GET `/users/:user_id`

A rota deve receber, nos parâmetros da rota, o `id` de um usuário e devolver as informações do usuário encontrado pelo corpo da resposta.

### GET `/users`

A rota deve receber, pelo header da requisição, uma propriedade `user_id` contendo o `id` do usuário e retornar uma lista com todos os usuários cadastrados. O `id` deverá ser usado para validar se o usuário que está solicitando a listagem é um admin. O retorno da lista deve ser feito apenas se o usuário for admin.

---

### 🤨 Observações

Você pode ter acesso à documentação no Notion sobre as rotas e testes do desafio 2-1 clicando [aqui](https://www.notion.so/Desafio-01-Introdu-o-ao-SOLID-3b9be286fac0482ca3b275473ddd2d72), e do desafio 2-2 clicando [aqui](https://www.notion.so/Desafio-02-Documentando-com-Swagger-8ce869ea608743e292851bd951f3239f)

---

### 📜 LIcença

Esse projeto está sob a licença do MIT. Veja o arquivo do desafio [LICENSE](./LICENSE).

---

Feito com 💜 por <a href="https://www.linkedin.com/in/pedro-felipe-baltar-2a26a31ab/">Pedro Felipe Baltar</a>
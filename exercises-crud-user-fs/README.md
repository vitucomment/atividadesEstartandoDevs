# CRUD de usuários usando node FS

&nbsp;

<p align="center">
  <img alt="CRUD" src="https://res.cloudinary.com/eufelipe/image/upload/v1655221774/EDevs/O-que-e-CRUD-740x414_adkcri.webp">
</p>

Nesse exercício você deve implementar um CRUD que é uma sigla para Create, Read, Update and Delete, em pt-br seria Criar, Ler, Atualizar, Deletar um registro.

O objetivo é simular operações em um banco de dados.

Para isso você deve escrever as alterações no arquivo `src/data/users.json` usando as API's nativas do **Node** de **[File System](https://nodejs.org/docs/latest-v16.x/api/fs.html)**

**IMPORTANTE** Você deve trabalhar com dois conceitos de padrões de projetos, o Repository para ser responsável pelo acesso direto ao dado e o Service para incluir as regras de negócio e usar o Repository.

&nbsp;
&nbsp;

# 📝 Material para consulta

- [Node: File System](https://nodejs.org/docs/latest-v16.x/api/fs.html)
- [Node: Path](https://nodejs.org/docs/latest-v16.x/api/path.html)
- [CRUD](https://pt.wikipedia.org/wiki/CRUD)

&nbsp;
&nbsp;

# 💁‍♂️ Dicas

- Use a extensão **[Todo Tree](https://marketplace.visualstudio.com/items?itemName=Gruntfuggly.todo-tree)** para facilitar a visualização das tarefas;
- Use as funcionalidades de Array **map, find, filter, some** para gerenciar os dados;
- Crie outras funções e arquivos para entregar um código de qualidade;

&nbsp;
&nbsp;

## 🤝 Testando o projeto

No final do exercício, será possível usar o CLI com as funcionalidades que você implementou ;)

```bash
npm run start
```

<p align="center">
  <img alt="CRUD CLI" src="https://res.cloudinary.com/eufelipe/image/upload/v1655225556/EDevs/cli-crud_kxilsy.gif">
</p>

&nbsp;
&nbsp;

## ℹ️ Testes automatizados

Se quiser checar se sua implementação está correta, rode o comando abaixo

```bash
npm run test
```

Se quiser checar apenas o arquivo que esta trabalhando, use o comando:

```bash
npm run test NOME_DO_ARQUIVO
```

Exemplo:

```bash
npm run test user-repository
```

---

Made with ♥ by **ED Team** 👋: [Get in touch!](http://www.estartandodevs.com.br/)

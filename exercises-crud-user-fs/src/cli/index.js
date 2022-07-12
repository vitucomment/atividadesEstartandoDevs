const inquirer = require("inquirer");
const menuItems = require("./menu");

const {
  loadAllUsers,
  createUser,
  updateUser,
  deleteUser,
  findUserById,
  findUserByEmail,
  searchUsers,
} = require("../services/users");

const nameField = {
  type: "input",
  name: "name",
  message: "Informe o Nome",
};

const emailField = {
  type: "input",
  name: "email",
  message: "Informe o Email",
  async validate(value) {
    const alreadyExist = await findUserByEmail(value);
    if (alreadyExist) {
      new inquirer.Separator();
      console.log("\nEmail já existe");
      return false;
    }
    return true;
  },
};

const passwordField = {
  type: "password",
  message: "Digite a senha",
  name: "password",
  async validate(value) {
    if (value.length < 8) {
      new inquirer.Separator();
      console.log("\nA senha precisa ter pelo menos 8 caracteres");
      return false;
    }
    return true;
  },
};
const phoneField = {
  type: "input",
  name: "phone",
  message: "Informe o Telefone",
};

const idField = {
  type: "input",
  message: "Digite o ID do usuário",
  name: "id",
};

const promptCreateUser = () => {
  inquirer
    .prompt([nameField, emailField, passwordField, phoneField])
    .then(async (answers) => {
      await createUser(answers);
      main();
    });
};

const promptUpdateUserById = () => {
  inquirer.prompt([idField]).then(async ({ id }) => {
    promptUpdateUser(id);
  });
};
const promptUpdateUser = (id) => {
  inquirer
    .prompt([nameField, passwordField, phoneField])
    .then(async (answers) => {
      await updateUser(id, answers);
      main();
    });
};

const promptFindUserById = () => {
  inquirer.prompt([idField]).then(async ({ id }) => {
    const user = await findUserById(id);
    main(user);
  });
};

const promptSearchUsers = () => {
  inquirer.prompt([nameField]).then(async ({ name }) => {
    const user = await searchUsers(name);
    main(user);
  });
};

const promptDeleteUser = () => {
  inquirer.prompt([idField]).then(async ({ id }) => {
    await deleteUser(id);
    main();
  });
};

const promptLoadAllUsers = async () => {
  console.clear();
  const users = await loadAllUsers();
  const choices = users.map((user) => ({ ...user, value: user.id }));
  inquirer
    .prompt([
      {
        type: "list",
        loop: false,
        name: "id",
        message: "Lista de usuários",
        choices,
      },
    ])
    .then((answers) => {
      console.clear();
      main(answers);
    });
};

const main = async (anyValue) => {
  console.clear();
  if (anyValue) {
    console.table(anyValue);
  }
  inquirer
    .prompt({
      type: "list",
      name: "id",
      message: "Bem vindo ao sistema de gerenciamento de usuários",
      choices: menuItems,
    })
    .then((answers) => {
      switch (answers.id) {
        case "list-users":
          promptLoadAllUsers();
          break;
        case "find-user-by-id":
          promptFindUserById();
          break;
        case "search-users":
          promptSearchUsers();
          break;
        case "create-user":
          promptCreateUser();
          break;
        case "update-user":
          promptUpdateUserById();
          break;
        case "delete-user":
          promptDeleteUser();
          break;
        case "exit":
          process.exit();
          break;
      }
    });
};

main();

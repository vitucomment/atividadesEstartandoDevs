const path = require("path");
const mockFs = require("mock-fs");

const {
  loadUsersRepository,
  createUserRepository,
  deleteUserRepository,
  updateUserRepository,
} = require("../../src/repositories/user-repository");

describe("User Repository", () => {
  beforeEach(() => {
    mockFs({
      "src/data/users.json": mockFs.load(
        path.resolve(__dirname, "..", "mocks", "users-mock.json")
      ),
    });
  });

  afterEach(() => {
    mockFs.restore();
  });

  it("Should return empty user list", async () => {
    mockFs({
      "src/data/users.json": "[]",
    });

    const users = await loadUsersRepository();
    expect(users.length).toBe(0);
  });

  it("Should return the list of users correctly with 2 valid users", async () => {
    const users = await loadUsersRepository();
    expect(users.length).toBe(2);
    expect(users[0].email).toEqual("jao@gmail.com");
    expect(users[1].id).toEqual(1654826575603);
  });

  it("Should be able to create a valid user", async () => {
    const user = {
      id: 1654826575603,
      name: "Jao",
      email: "jao@gmail.com",
      password: "123456",
      phone: "11999999999",
    };

    const beforeUsers = await loadUsersRepository();
    expect(beforeUsers.length).toBe(2);

    await createUserRepository(user);

    const afterUsers = await loadUsersRepository();
    expect(afterUsers.length).toBe(3);
  });

  it("should return an error if it does not receive a valid user for create new user", () => {
    expect.assertions(1);
    return expect(createUserRepository()).rejects.toEqual(
      Error("User is required")
    );
  });

  it("Should be able to update a user", async () => {
    const beforeUsers = await loadUsersRepository();
    const oldUser = beforeUsers[0];

    expect(oldUser.id).toEqual(1654822963639);
    expect(oldUser.name).toEqual("João das Couves");
    expect(oldUser.email).toEqual("jao@gmail.com");
    expect(oldUser.password).toEqual("123456");
    expect(oldUser.phone).toEqual("21988884444");

    const dataUser = {
      name: "Name updated",
      email: "email updated",
      password: "password updated",
      phone: "phone updated",
    };

    await updateUserRepository(1654822963639, dataUser);

    const afterUsers = await loadUsersRepository();
    const newUser = afterUsers[0];

    expect(newUser.id).toEqual(1654822963639);
    expect(newUser.name).toEqual("Name updated");
    expect(newUser.email).toEqual("email updated");
    expect(newUser.password).toEqual("password updated");
    expect(newUser.phone).toEqual("phone updated");
  });

  it("should return an error if it does not receive a valid id user for update", () => {
    expect.assertions(1);
    return expect(updateUserRepository()).rejects.toEqual(
      Error("User Id is required")
    );
  });

  it("I should be able to delete a user", async () => {
    const beforeUsers = await loadUsersRepository();
    expect(beforeUsers.length).toBe(2);
    const oldUser = beforeUsers[0];

    await deleteUserRepository(oldUser.id);

    const afterUsers = await loadUsersRepository();
    expect(afterUsers.length).toBe(1);
  });

  it("should return an error if it does not receive a valid id user for delete", () => {
    expect.assertions(1);
    return expect(deleteUserRepository()).rejects.toEqual(
      Error("User Id is required")
    );
  });
});

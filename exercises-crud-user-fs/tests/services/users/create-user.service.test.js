const {
  createUser,
} = require("../../../src/services/users/create-user.service");

const USER_MOCK = require("../../mocks/userMock");

jest.mock("../../../src/repositories/user-repository", () => {
  const originalModule = jest.requireActual(
    "../../../src/repositories/user-repository"
  );

  const USER_MOCK = require("../../mocks/userMock");

  return {
    __esModule: true,
    ...originalModule,
    loadUsersRepository: jest.fn(() => [USER_MOCK]),
    createUserRepository: jest.fn(() => "createUserRepository"),
  };
});

jest.mock("../../../src/utils/encrypt-password");

describe("Create User Service", () => {
  it("Should return an error if no Name is passed", () => {
    expect.assertions(1);
    const user = Reflect.deleteProperty({ ...USER_MOCK }, "name");
    return expect(createUser(user)).rejects.toEqual(
      Error("Name, Email, Password are required")
    );
  });
  it("Should return an error if no Email is passed", () => {
    expect.assertions(1);
    const user = Reflect.deleteProperty({ ...USER_MOCK }, "email");
    return expect(createUser(user)).rejects.toEqual(
      Error("Name, Email, Password are required")
    );
  });
  it("Should return an error if no Password is passed", () => {
    expect.assertions(1);
    const user = Reflect.deleteProperty({ ...USER_MOCK }, "password");
    return expect(createUser(user)).rejects.toEqual(
      Error("Name, Email, Password are required")
    );
  });

  it("Should return an error if the user already exists", () => {
    expect.assertions(1);

    return expect(createUser(USER_MOCK)).rejects.toEqual(
      Error("User already exists")
    );
  });

  it("Should be able to successfully create a user", async () => {
    const user = { ...USER_MOCK, email: "succes@example.com" };
    const result = await createUser(user);

    expect(result.id).toBeGreaterThanOrEqual(1000);
    expect(result.email).toBe(user.email);
    expect(result.status).toBe(true);
  });
});

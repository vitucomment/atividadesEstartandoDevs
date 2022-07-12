const {
  findUserById,
} = require("../../../src/services/users/find-user-by-id.service");

const {
  loadUsersRepository,
} = require("../../../src/repositories/user-repository");

const USERS_MOCK = require("../../mocks/users-mock.json");

jest.mock("../../../src/repositories/user-repository");

loadUsersRepository.mockReturnValue(USERS_MOCK);

describe("Find User By ID Service", () => {
  it("Should return NULL if user does not exist", async () => {
    const result = await findUserById("no_exist@gmail.com");
    expect(result).toBe(null);
  });

  it("Should return a user if it exists", async () => {
    const result = await findUserById(1654822963639);
    expect(result.name).toEqual("João das Couves");
    expect(result.email).toEqual("jao@gmail.com");
  });
});

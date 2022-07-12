const {
  findUserByEmail,
} = require("../../../src/services/users/find-user-by-email.service");

const {
  loadUsersRepository,
} = require("../../../src/repositories/user-repository");

const USERS_MOCK = require("../../mocks/users-mock.json");

jest.mock("../../../src/repositories/user-repository");

loadUsersRepository.mockReturnValue(USERS_MOCK);

describe("Find User By Email Service", () => {
  it("Should return FALSE if there is no user", async () => {
    const result = await findUserByEmail("no_exist@gmail.com");
    expect(result).toBe(false);
  });

  it("Should return a user if found", async () => {
    const result = await findUserByEmail("jao@gmail.com");
    expect(result.name).toEqual("João das Couves");
    expect(result.email).toEqual("jao@gmail.com");
  });
});

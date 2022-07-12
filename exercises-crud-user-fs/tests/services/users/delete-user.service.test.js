const {
  deleteUser,
} = require("../../../src/services/users/delete-user.service");

const {
  loadUsersRepository,
  deleteUserRepository,
} = require("../../../src/repositories/user-repository");

const USERS_MOCK = require("../../mocks/users-mock.json");

jest.mock("../../../src/repositories/user-repository");

loadUsersRepository.mockReturnValue(USERS_MOCK);
deleteUserRepository.mockReturnValue(true);

describe("Delete User Service", () => {
  it("Should return an error if the user ID is not passed", () => {
    expect.assertions(1);
    return expect(deleteUser()).rejects.toEqual(Error("User ID is required"));
  });

  it("Should return an error if the user does not exist", () => {
    expect.assertions(1);
    return expect(deleteUser(-1)).rejects.toEqual(Error("User not exists"));
  });

  it("Should return TRUE if the user is deleted", async () => {
    const result = await deleteUser(1654822963639);
    expect(result).toBe(true);
  });
});

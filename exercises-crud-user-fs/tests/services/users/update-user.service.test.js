const {
  updateUser,
} = require("../../../src/services/users/update-user.service");

const {
  loadUsersRepository,
} = require("../../../src/repositories/user-repository");

const USERS_MOCK = require("../../mocks/users-mock.json");

jest.mock("../../../src/repositories/user-repository");

describe("Search User Service", () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  it("Should return an error if the user ID is not passed", () => {
    expect.assertions(1);
    const user = USERS_MOCK[0];
    return expect(updateUser(undefined, user)).rejects.toEqual(
      Error("User ID is required")
    );
  });
  it("Should return an error if the user does not exist", () => {
    loadUsersRepository.mockReturnValue(USERS_MOCK);
    expect.assertions(1);
    const user = USERS_MOCK[0];
    return expect(updateUser(200, user)).rejects.toEqual(
      Error("User not exists")
    );
  });

  it("Should return TRUE if the user is successfully updated", async () => {
    loadUsersRepository.mockReturnValue(USERS_MOCK);
    const result = await updateUser(1654822963639, { name: "Ciclano" });
    expect(result).toBe(true);
  });
});

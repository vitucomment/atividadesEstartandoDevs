const {
  searchUsers,
} = require("../../../src/services/users/search-users.service");

const {
  loadUsersRepository,
} = require("../../../src/repositories/user-repository");

const USERS_MOCK = require("../../mocks/users-mock.json");

jest.mock("../../../src/repositories/user-repository");

describe("Search User Service", () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  it("Should return an empty user list", async () => {
    loadUsersRepository.mockReturnValue([]);
    const result = await searchUsers("invalid user");
    expect(result.length).toBe(0);
  });

  it("Should return a user by name", async () => {
    loadUsersRepository.mockReturnValue(USERS_MOCK);
    const result = await searchUsers("Fulano Beltrano");
    expect(result.length).toBe(1);
  });
});

const {
  loadAllUsers,
} = require("../../../src/services/users/load-users.service");

const {
  loadUsersRepository,
} = require("../../../src/repositories/user-repository");

const USERS_MOCK = require("../../mocks/users-mock.json");

jest.mock("../../../src/repositories/user-repository");

describe("Load User Service", () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  it("Should return an empty user list", async () => {
    loadUsersRepository.mockReturnValue([]);
    const result = await loadAllUsers();
    expect(result.length).toBe(0);
  });

  it("Should return a list of valid users", async () => {
    loadUsersRepository.mockReturnValue(USERS_MOCK);
    const result = await loadAllUsers();
    expect(result.length).toBe(2);
  });
  it("Should return a list of valid users with status (pegadinha =P)", async () => {
    loadUsersRepository.mockReturnValue(USERS_MOCK);
    const result = await loadAllUsers();
    expect(result[0].status).toBe(true);
  });
});

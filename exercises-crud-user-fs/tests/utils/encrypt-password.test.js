const { encryptPassword } = require("../../src/utils/encrypt-password");

jest.mock("crypto", () => {
  const originalModule = jest.requireActual("crypto");
  return {
    __esModule: true,
    ...originalModule,
  };
});

describe("Encrypt Password", () => {
  it("Should return an error if no password is passed", () => {
    try {
      encryptPassword();
      expect(true).toBe(false);
    } catch (e) {
      expect(e.message).toBe("Password is required");
    }
  });
  it("It should return an error if the password passed is less than 8 characters", () => {
    try {
      encryptPassword("123456");
      expect(true).toBe(false);
    } catch (e) {
      expect(e.message).toBe("Password must be at least 8 characters");
    }
  });
  it("It should return a hash with a valid password", () => {
    const result = encryptPassword("password");
    expect(result.length).toBeGreaterThanOrEqual(100);
  });
});

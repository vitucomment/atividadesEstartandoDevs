const { task1, task2, task3, task4 } = require("../src/tasks");

jest.useFakeTimers();
jest.spyOn(global, "setTimeout");

describe("Tasks", () => {
  it("should call task1() and receive a promise with a 10 second delay", () => {
    const promise = task1();
    expect(promise).toBeInstanceOf(Promise);
    expect(setTimeout).toHaveBeenCalledWith(expect.any(Function), 10 * 1000);
  });

  it("should call task2() and receive a promise with a 5 second delay", () => {
    const promise = task2();
    expect(promise).toBeInstanceOf(Promise);
    expect(setTimeout).toHaveBeenCalledWith(expect.any(Function), 5 * 1000);
  });

  it("should call task3() and receive a promise with a 4 second delay", () => {
    const promise = task3();
    expect(promise).toBeInstanceOf(Promise);
    expect(setTimeout).toHaveBeenCalledWith(expect.any(Function), 4 * 1000);
  });

  it("should call task4() and receive a promise with a 4 second delay", () => {
    const promise = task4();
    expect(promise).toBeInstanceOf(Promise);
    expect(setTimeout).toHaveBeenCalledWith(expect.any(Function), 4 * 1000);
  });
});

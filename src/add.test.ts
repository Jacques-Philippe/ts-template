import { add } from "./add";

describe("Add tests", () => {
  test("Adding numbers together should return their sum", () => {
    expect(add(1, 2)).toEqual(3);
  });

  test("Adding a number and its negative should equal zero", () => {
    const exNumber = 1;
    expect(add(exNumber, -exNumber)).toEqual(0);
  });
});

const add = require("./calculator").add;
const subtract = require("./calculator").subtract;
const multiply = require("./calculator").multiply;
const divide = require("./calculator").divide;

test("expect 1 + 4 to return 5", () => {
    expect(add(1, 4)).toBe(5);
});

test("expect 4 - 1 to return 3", () => {
    expect(subtract(4, 1)).toBe(3);
});

test("expect 2 * 4 to return 8", () => {
    expect(multiply(2, 4)).toBe(8);
});

test("expect 8 / 2 to return 4", () => {
    expect(divide(8, 2)).toBe(4);
});

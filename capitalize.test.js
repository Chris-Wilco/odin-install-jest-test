const capitalize = require("./capitalize");

test('Capitalize the first letter in "a string" to return the string "A string"', () => {
    expect(capitalize("a string")).toMatch("A string");
});

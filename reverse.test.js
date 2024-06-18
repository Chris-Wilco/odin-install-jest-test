const reverse = require("./reverse.js");

test("Reverse the characters in a string to that 'chris' is returned as 'sirhc'", () => {
    expect(reverse("chris")).toMatch("sirhc");
});

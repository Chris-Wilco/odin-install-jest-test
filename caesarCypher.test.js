const caesarCypher = require("./caesarCypher").caesarCypher;
const letterDecrypt = require("./caesarCypher").letterDecrypt;
const calcIndex = require("./caesarCypher").calcIndex;

test("expect 5 + 6 to return 11", () => {
    expect(calcIndex(5, 6)).toBe(11);
});

test("expect 4 + 21 to return 25", () => {
    expect(calcIndex(4, 21)).toBe(25);
});

test("expect 6 + 21 to return 1", () => {
    expect(calcIndex(6, 21)).toBe(1);
});

test("expect 'A' shifted by 2 to return 'C'", () => {
    expect(letterDecrypt("A", 2)).toBe("C");
});

test("expect 'Z' shifted by 1 to return 'A'", () => {
    expect(letterDecrypt("Z", 1)).toBe("A");
});

test("expect 'Z' shifted by 26 to return 'Z'", () => {
    expect(letterDecrypt("Z", 26)).toBe("Z");
});

test("expect 'a' shifted by 3 to return 'd'", () => {
    expect(letterDecrypt("a", 3)).toBe("d");
});

test("expect 'z' shifted by 1 to return 'a'", () => {
    expect(letterDecrypt("z", 1)).toBe("a");
});

test("expect 'z' shifted by 26 to return 'z'", () => {
    expect(letterDecrypt("z", 26)).toBe("z");
});

test("expect 'abc' shifted by 3 to return 'def'", () => {
    expect(caesarCypher("abc", 3)).toBe("def");
});

test("expect 'xyz' shifted by 1 to return 'yza'", () => {
    expect(caesarCypher("xyz", 1)).toBe("yza");
});

test("expect 'xyz' shifted by 3 to return 'abc'", () => {
    expect(caesarCypher("xyz", 3)).toBe("abc");
});

test("expect 'xyz' decrypted by 3 to return 'uvw'", () => {
    expect(caesarCypher("xyz", 3, true)).toBe("uvw");
});

test("expect 'abc' decrypted by 3 to return 'xyz'", () => {
    expect(caesarCypher("abc", 3, true)).toBe("xyz");
});

test("expect 'abc def' shifted by 3 to return 'def ghi'", () => {
    expect(caesarCypher("abc def", 3)).toBe("def ghi");
});

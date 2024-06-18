function caesarCypher(inputString, shiftNum, decrypt) {
    inputArray = inputString.split("");

    if (decrypt) {
        shiftNum *= -1;
    }

    outputArray = [];
    inputArray.forEach((element) => {
        outputArray.push(letterDecrypt(element, shiftNum));
    });

    console.log(inputString);
    console.log(outputArray.join(""));

    return outputArray.join("");
}

function letterDecrypt(inputLetter, shiftNum) {
    const lettersLower = [
        "a",
        "b",
        "c",
        "d",
        "e",
        "f",
        "g",
        "h",
        "i",
        "j",
        "k",
        "l",
        "m",
        "n",
        "o",
        "p",
        "q",
        "r",
        "s",
        "t",
        "u",
        "v",
        "w",
        "x",
        "y",
        "z",
    ];

    const lettersUpper = [
        "A",
        "B",
        "C",
        "D",
        "E",
        "F",
        "G",
        "H",
        "I",
        "J",
        "K",
        "L",
        "M",
        "N",
        "O",
        "P",
        "Q",
        "R",
        "S",
        "T",
        "U",
        "V",
        "W",
        "X",
        "Y",
        "Z",
    ];

    startIndex = lettersLower.indexOf(inputLetter);
    upperCase = false;

    if (startIndex < 0) {
        startIndex = lettersUpper.indexOf(inputLetter);
        upperCase = true;
    }

    if (startIndex < 0) {
        return inputLetter;
    }

    newIndex = calcIndex(startIndex, shiftNum);

    newLetter = upperCase ? lettersUpper[newIndex] : lettersLower[newIndex];

    return newLetter;
}

function calcIndex(originalIndex, shiftNum) {
    if (shiftNum < 0) {
        shiftNum += 26;
    }

    newIndex = originalIndex + shiftNum;

    return newIndex % 26;
}

module.exports = { caesarCypher, letterDecrypt, calcIndex };

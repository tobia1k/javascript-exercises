const palindromes = function (str) {
    formattedStr = str.toLowerCase().split("").filter(formatStr).join("");
    let firstHalf = formattedStr.slice(0, (Math.floor(formattedStr.length / 2)));
    let lastHalf = formattedStr.slice(Math.ceil(formattedStr.length / 2)).split("").reverse().join("");

    for (let i = 0; i < firstHalf.length; i++) {
        if (firstHalf[i] !== lastHalf[i])
            return false;
    }
    return true;
};

function formatStr(c) {
    return !/[^\w\s]|\s/g.test(c);
}

// Do not edit below this line
module.exports = palindromes;

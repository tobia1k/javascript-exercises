const fibonacci = function(num) {
    if (num < 0) {
        return "OOPS";
    }
    let a = 0;
    let b = 1;
    for (let i = 1; i <= num; i++) {
        let tmp = a;
        a = b;
        b += tmp;
    }
    return a;
};

// Do not edit below this line
module.exports = fibonacci;

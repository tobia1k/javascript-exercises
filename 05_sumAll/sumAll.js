const sumAll = function(first, last) {
    if (typeof first === "number" && typeof last === "number" && 
        first >= 0 && last >= 0 && 
        Number.isInteger(first) && Number.isInteger(last)){
        if (first != Math.min(first, last)) {
            const tmp = first;
            first = last;
            last = tmp;
        }
        let sum = 0;
        for (first; first <= last; first++) {
            sum += first;
        }
        return sum;
    }
    else {
        return "ERROR";
    }
};

// Do not edit below this line
module.exports = sumAll;

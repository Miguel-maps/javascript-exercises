function repeatString(string, num) {
    if (num >= 0) {
        let aux = "";
        for (let i = 0; i < num; i++) {
            aux += string;
        }
        return aux;
    } else {
        return 'ERROR';
    }
};

// Do not edit below this line
module.exports = repeatString;

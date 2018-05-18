function fn(x) {
    let day = 0.002;
    let result = 0;
    for (let i = 1; i < x; i++) {
        result += day;
        if (i % 20 == 0) {
            day = day / 2;
        }
    }
    console.log(i, result);
    return result;
}

/* fn(560);

for (let i = 300; i < 700; i++) {
    console.log(i, "======", fn(i))
} */

let finResult = 0, i = 0;
do {
    i++;
    finResult = fn(i);
} while (finResult < 1);

console.log("天数：", i);
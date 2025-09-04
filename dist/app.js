const createNumber = (value) => {
    return Math.floor(Math.random() * value) + 1;
};
const setNumberList = (value, v, crateNumber) => {
    const t = [];
    for (let i = 0; i < value; i++) {
        t.push(crateNumber(v));
    }
    return t;
};
function setNumberList2(count, v, createNumber) {
    return Array.from({ length: count }, (item) => createNumber(v));
}
const numbers = setNumberList2(100, 50, createNumber);
console.log(numbers);
const statistic = {};
//statistic["1000"] = 59
for (let v of numbers) {
    if (v in statistic) {
        statistic[v] = 1;
    }
}
export {};
//# sourceMappingURL=app.js.map
function FirstFunc (a) {
    return function SecondFunc(b) {
        return a + b;
    }
}
let result = FirstFunc(19);
console.log(result(5));


function isPrime(anynum) {

    if (anynum <= 1 || anynum > 1000) return 'Данные неверны';
    for (let i = 2; i < anynum; i++) {
        if (anynum % i === 0) {
            return 'непростое число';
        }  return 'простое число';
    }
    
}
console.log(isPrime(7));

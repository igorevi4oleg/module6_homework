function MyFirstFunc() {
    const arr = [1, 2, 3, 8, null, undefined, 9.6, 7, 24, 'word', 'AlsoWord'];
    let EvenNumber = 0;
    let NotEvenNumber = 0;
    let Words = 0;
    let AmountNulls = 0;
    for (let i = 0; i < arr.length; i++){
        if (typeof arr[i] === 'number' && !isNaN[i] && i % 2 === 0) {
            EvenNumber += 1;
        } else if (typeof arr[i] === 'number' && !isNaN[i] && i % 2 !== 0) {
            NotEvenNumber += 1;
        } else if (typeof arr[i] === 'string') {
            Words +=1;
        } else {
            AmountNulls += 1;
        }
    }
    console.log('Колчество чётных чисел:' + (EvenNumber));
    console.log('Колчество нечётных чисел:' + (NotEvenNumber));
    console.log('Колчество строк:' + (Words));
    console.log('Колчество нулей:' + (AmountNulls));}
    MyFirstFunc ();

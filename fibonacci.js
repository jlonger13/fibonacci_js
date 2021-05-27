function fibonacci(num) { //input 10 to get first 10 numbers in fib sequence
    var a = 1;
    var b = 0;
    var temp;
    while (num >= 0) {
        temp = a;
        a += b;
        b = temp;
        num--;
    }
    return b;
}

//recursive algorithm 
function fibonacciRecursive(num) {  //input 10 to get first 10 numbers in fib sequence
    if(num <= 1){ //base case
        return 1;
    }
    return fibonacciRecursive(num - 1) + fibonacciRecursive(num - 2);
}
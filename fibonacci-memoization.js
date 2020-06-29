// reference: https://www.youtube.com/watch?v=UxICsjrdlJA

// Fibonacci Definition: F(n) = F(n-1) + F(n-2), or n (if n <= 1)
// 0 1 1 2 3 5 8 13 ...

// Note: Memoization is more performant than regular recursion

let f = [];
f[0] = 0;
f[1] = 1;
function fib(n) {
    if (typeof f[n] != 'undefined') {
        return f[n]
    }
    f[n] = fib(n-1) + fib(n-2)
    return f[n]
}

console.log (fib(0)); //0
console.log (fib(1)); //1
console.log (fib(2)); //1
console.log (fib(3)); //2
console.log (fib(10)) //55
console.log (fib(40)) //55

//* [Done] exited with code=0 in 0.053 seconds
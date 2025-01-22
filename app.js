'use strict';
// 連想配列使用(再帰)
const memo = new Map();
memo.set(0, 0);
memo.set(1, 1);
function fib(n) {
    if (memo.has(n)) {
        return memo.get(n);
    } 
    const value = fib(n - 1) + fib(n - 2);
    memo.set(n, value);
    return value;
}

const length = 40;
for (let i = 0; i <= length; i++) {
    console.log(fib(i));
}

// 配列使用(再帰)
let memo2 = [0, 1];
function fib2(n) {
    if (memo2[n] !== undefined) {
        return memo2[n];
    }
    memo2[n] = fib2(n - 1) + fib2(n - 2);
    return memo2[n];
}

for (let i = 0; i <= length; i++) {
    console.log(fib2(i));
}

// 配列使用(再帰なし)
let memo3 = Array(41).fill(undefined);
memo3[0] = 0;
memo3[1] = 1;

for (let i = 0; i <= length; i++) {
    if(i >= 2) {
        memo3[i] = memo3[i - 1] + memo3[i - 2];
    }
    console.log(memo3[i]);
}

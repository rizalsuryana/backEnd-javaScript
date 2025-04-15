const f = (n) => {
    if(n === 0) throw new Error();
    f(n -1);
}

f(99);
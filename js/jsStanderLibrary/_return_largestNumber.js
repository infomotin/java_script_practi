function sieve(n) {
    let a = new Uint8Array(n + 1);
    let Max = Math.floor(Math.sqrt(n));
    let p = 2;
    while (p <= Max) { 
        if (a[p] === 0) {
            for (let i = p * p; i <= n; i += p) {
                a[i] = 1;
                while (a[++p])
            }
        }
    }
}
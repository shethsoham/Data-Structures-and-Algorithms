// pointing to same memory 

var a = 1000
let b = 200
const c = 5000;
{
    var a = 1;
    let b = 10;
    const c  = 100;
    console.log(a)
    console.log(b)
    console.log(c)
}
console.log(a) // taking value inside block instead of global .. beacuse they arepoitung gtowrds same memory
console.log(b) // npt taking value from block taking value outside block
console.log(c) // npt takimg again from block temopral dead zone 
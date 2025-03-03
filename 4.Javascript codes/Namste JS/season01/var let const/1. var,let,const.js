/*

let 
const 
var 

*/


// Block, scope , shadowing

const a = 10;
{
    const a = 100;
    {
        console.log(a)
    }
}
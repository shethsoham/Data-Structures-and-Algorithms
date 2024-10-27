// use the spread Operator to evaluate arrays in-place
// spread operator looks just like rest operator 3 dots (...)
// But it expands in already existing array or spreads out an array

const arr1 = ['Jan', 'Feb', 'Mar', 'Apr', 'MAY'];

let arr2;
(function(){
    //arr2 = arr1 ; [ 'potato', 'Feb', 'Mar', 'Apr', 'MAY' ]
    arr2 = [...arr1]
    arr1[0] = 'potato'
})();

console.log(arr2)


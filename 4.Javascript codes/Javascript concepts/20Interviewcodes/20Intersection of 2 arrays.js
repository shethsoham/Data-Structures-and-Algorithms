// Intersection of  arrays

console.log(interSection([1,2,3,4],[3,4,5,6]))

function interSection(arr1,arr2){
    let set = new Set(arr1);
    let interSection = arr2.filter(element => set.has(element));
    return  interSection
}
// Brute force solution comparing all the elements with each other T.C. O(n**2) S.C O(1)
// Better Solution : sorting the array O(nlogn) and the find the next array O(n) therefore, T.C: O(nlogn) S.C. : O(1)
// Optimal Solution : Using hashmap, storing the new value in hashmap and if  it exist in hashmap return true. 
// T.C : O(n) S.C. : O(n)

// comparing length approach :
var containsDuplicate = function(nums) {
    let my_set = new Set(nums);
    if (nums.length != my_set.size){
        return true;
    }else{
        return false;
    }
};

// ------------------------------------
var containsDuplicate = function(nums){
    let my_set = set()
    for (let n of nums){
        if (n in my_set) {
            return true
        }
        my_set.append(n)
    }
    return false
}

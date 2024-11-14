var merge = function(nums1, m, nums2, n) {
    let i = 0;
    let j = 0;
    let arr =[]

    while (i<= m && j <= n){
        if (nums1[i]<=nums2[j]){
            arr.push(nums1[i])
            i++
        }
        else {
            arr.push(nums2[j])
            j++
        }
    }

    while (i<=m){
        arr.push(nums1[i])
    }

    while(j<=n){
        arr.push(nums2[j])
    }

    return arr
};


console.log(( [1,2,3], 3, [1,2,3], 3))
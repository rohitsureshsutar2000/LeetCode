/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    if(nums.length < 1) {
        return 0;
    }
    let i = 0;
    let j = 1;
    while( j <= nums.length) {
        if(nums[i] === nums[j]) {
            j++
        } else {
            i++ 
            nums[i] = nums[j]
            j++
        }
    }
    return i;
};
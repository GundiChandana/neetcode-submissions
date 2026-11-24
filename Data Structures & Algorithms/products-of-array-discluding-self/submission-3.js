class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
       let prefixArray = [];
       let postfixArray = [];
       let output = [];
       for(let i=1; i<nums.length; i++) {
        prefixArray[0] = postfixArray[nums.length-1] = 1;
        prefixArray[i] = prefixArray[i-1] * nums[i-1];
        postfixArray[(nums.length-1)-i] = postfixArray[(nums.length-1)-i+1] *nums[(nums.length-1)-i+1];
       }

       for(let i=0; i<nums.length; i++) {
        output[i] = prefixArray[i]*postfixArray[i];
       }
       return output;
    }
}

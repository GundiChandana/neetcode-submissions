class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {

        let set = new Set(nums);
        
        let maxCount = 0;
        for(let num of nums) {
            let count = 1;
            if(!set.has(num-1)) {
                
                while(set.has(num+1)) {
                    count++;
                    num++;
                }
                
            }
            maxCount = Math.max(maxCount, count);

        }
        return maxCount;
    }
}

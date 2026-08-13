class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums: number[], target: number): number[] {
        const map = new Map();
        for(const [index, num] of nums.entries()) {
            let offset = target - num;
            
            if (map.has(offset)) {
                const offsetIndex = map.get(offset);
                return [offsetIndex, index];
            }

            map.set(num, index);
        }
        
        return [];
    }
}

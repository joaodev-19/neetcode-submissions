class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums: number[]): boolean {
        const map = new Map<number,number>();

        for (let num of nums) {
            if (map.has(num)) {
                return true;
            } else {
                map.set(num, num);
            }
        };

        return false;
    }
}

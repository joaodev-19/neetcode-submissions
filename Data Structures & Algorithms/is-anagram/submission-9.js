class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        if (s.length !== t.length) return false;
        const seen = {};

        for(const c of s) {
            if (c.toLowerCase() in seen) {
                seen[c]++;
            } else {
                seen[c] = 1;
            }
        }   

        for(const c of t) {
            if (c.toLowerCase() in seen) {
                seen[c]--;
            } else {
                seen[c] = -1;
            }
        }

        for(const v of Object.values(seen)){
            if (v !== 0) {
                return false;
            }
        }

        return true;
    }
}
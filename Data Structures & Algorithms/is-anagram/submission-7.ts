class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s: string, t: string): boolean {
        const mapStringOne = new Map<string, number>();
        const mapStringTwo = new Map<string, number>();

        for(let caracter of s) {
            if (mapStringOne.has(caracter)) {
                let value = mapStringOne.get(caracter)!;
                mapStringOne.set(caracter, value + 1);
            } else {
                mapStringOne.set(caracter, 1);
            }
        }

        for(let caracter of t) {
            if (mapStringTwo.has(caracter)) {
                let value = mapStringTwo.get(caracter)!;
                mapStringTwo.set(caracter, value + 1);
            } else {
                mapStringTwo.set(caracter, 1);
            }
        }

        if (mapStringOne.size !== mapStringTwo.size) {
            return false;
        }

        for(const [key, valueOne] of mapStringOne) {
            const valueTwo = mapStringTwo.get(key);

            if (valueOne !== valueTwo) {
                return false;
            }
        }

        return true;
    }
}

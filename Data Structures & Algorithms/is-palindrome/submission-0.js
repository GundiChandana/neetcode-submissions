class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        let l = 0;
        let r = s.length - 1;
        function isAlphanumerical(c) {
            return (
            (c >= 'A' && c <= 'Z') ||
            (c >= 'a' && c <= 'z') ||
            (c >= '0' && c <= '9')
        );
        }

        while (l < r) {
            while (l < r && !isAlphanumerical(s[l])) {
                l++;
            }
            while (l < r && !isAlphanumerical(s[r])) {
                r--;
            }

            if (s[l].toLowerCase() !== s[r].toLowerCase()) {
                return false;
            }

            r--;
            l++;
        }
        return true;
    }
}

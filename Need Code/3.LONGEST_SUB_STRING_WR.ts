function lengthOfLongestSubstring(s: string): number {
    let maxLength = 0;
    const charMap = new Map<string, number>();
    let left = 0;

    for (let right = 0; right < s.length; right++) {
        const currentChar = s[right];
        if (charMap.has(currentChar) && charMap.get(currentChar)! >= left) {
            left = charMap.get(currentChar)! + 1;
        }
        charMap.set(currentChar, right);
        maxLength = Math.max(maxLength, right - left + 1);
    }

    return maxLength;
};
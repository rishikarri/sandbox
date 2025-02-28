class Solution:
    def canConstruct(self, ransomNote: str, magazine: str) -> bool:
        for char in ransomNote: 
            print('char', char)
            if magazine.find(char) != -1:
                continue 
            return False
        return True


ransom_note = 'a'
magazine = 'b'

test = Solution().canConstruct(ransom_note, magazine)


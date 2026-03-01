class Solution:
    def isAnagram(self, s: str, t: str) -> bool:

        if len(s) != len(t):
            return False
        s_lookup = {

        }
        
        for char in s:

            if not s_lookup.get(char):
                s_lookup[char] = 1
            else:
                s_lookup[char] += 1
        
        for char in t:
            if s_lookup.get(char):
                s_lookup[char] -= 1
            else:
                return False

        return True
        print(s_lookup)
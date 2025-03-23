class Solution:
    def characterReplacement(self, s: str, k: int) -> int:
        left = 0
        result = 0
        char_lookup = {

        }

        for right in range(len(s)):
            current_char = s[right]
            if current_char in char_lookup:
                char_lookup[current_char] += 1
            else:
                char_lookup[current_char] = 1

            max_char_in_set = max(char_lookup.values())
            substr_length = right - left + 1
            while substr_length - max_char_in_set > k:
                left_char = s[left]
                char_lookup[left_char] -= 1
                left += 1
                substr_length = right - left + 1
                max_char_in_set = max(char_lookup.values())
            
            result = max(result, substr_length)
            
# char_lookup - {A: 4, B: 2}

#  l
# AAABABB
#      r       
            
            # result can be 
        print(max_char_in_set)
        print(char_lookup)
        return result
        

   
            
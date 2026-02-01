class Solution:
    def isPalindrome(self, s: str) -> bool:
        if not s: 
            return True 
        
        
        trimmed_and_lowered = "".join(char for char in s if char.isalnum()).lower()
        print(trimmed_and_lowered, 'trimmed_and_lowered')

        if len(trimmed_and_lowered) == 1:
            return True

        left = 0
        right = len(trimmed_and_lowered) - 1

        while left <= right:
            left += 1
            right -= 1

            if trimmed_and_lowered[left] != trimmed_and_lowered[right]:
                return False
        
        return True
class Solution:
    def longestPalindrome(self, s: str) -> str:

        if len(s) == 1:
            return s

        if len(s) == 2 and s[1] != s[0]:
            return s[0]        
        res = ""
        res_len = 0

        # check for odd palindromes
        for i in range(len(s)):
            left = i 
            right = i 
            
            
            print(left, right, 'left, right')
            while(left > -1 and right < len(s) and s[left] == s[right]):
                current_len = right - left + 1
                if (current_len) > res_len:
                    res_len = current_len
                    res = s[left:right + 1]
                left -= 1                 
                right += 1
            
            # check for even palindromes - the cneter is 2 characters

            left = i 
            right = i + 1
            
            
            print(left, right, 'left, right')
            while(left > -1 and right < len(s) and s[left] == s[right]):
                current_len = right - left + 1
                if current_len > res_len:
                    res_len = current_len
                    res = s[left:right + 1]
                left -= 1                 
                right += 1
            
        print('res', res)
        



        # check for even palindromes

            



            
        
        return res

        # check for even palindromes 


        
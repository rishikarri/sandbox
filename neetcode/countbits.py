class Solution:
    def countBits(self, n: int) -> List[int]:
        output = []
        for i in range(0, n + 1): 
            counter = 0 
            while (i > 0):
                counter +=1
                i &= i - 1
            output.append(counter)
        return output
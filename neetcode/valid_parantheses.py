class Solution:
    def isValid(self, s: str) -> bool:

        if (len(s) % 2 > 0):
            return False 

        open_paren_options = [
            '(',
            '[',
            '{'
        ]

        close_paren_options = [
            ')',
            ']',
            '}'
        ]
        open_paren_stack = []

        for char in s:
            if char in open_paren_options:
                open_paren_stack.insert(0, char)
            
            print('open_paren_stack', open_paren_stack)

            if char in close_paren_options:
                if len(open_paren_stack) == 0:
                    return False
                # check to see if we have a match at the right spot
                if char == ')':
                    if open_paren_stack[0] != '(':
                        return False 
                    open_paren_stack.pop(0)
                if char == ']':
                    if open_paren_stack[0] != '[':
                        return False 
                    open_paren_stack.pop(0)
                if char == '}':
                    if open_paren_stack[0] != '{':
                        return False 
                    open_paren_stack.pop(0)

        if (len(open_paren_stack) > 0):
            return False
            

        return True
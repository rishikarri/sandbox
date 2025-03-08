class Node:
    def __init__(self):
        self.children = {}
        self.word = False

class PrefixTree:

    def __init__(self):
        self.root = Node()
        

    def insert(self, word: str) -> None:
        current = self.root
        for c in word:
            if c not in current.children:
                current.children[c] = Node()
            
            current = current.children[c]
            print('c',current)
        
        current.word = True


    def search(self, word: str) -> bool:
        return True

    def startsWith(self, prefix: str) -> bool:
        return True
    
pt = PrefixTree()
pt.insert("apple")
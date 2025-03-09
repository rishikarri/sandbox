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
        print("HI")


    def search(self, word: str) -> bool:
        current = self.root
        for idx, c in enumerate(word):            
            if idx == len(word) - 1 and current.children[c].word:
                return True
            
            if c not in current.children:
                return False
            
            current = current.children[c]
            

    def startsWith(self, prefix: str) -> bool:
        current = self.root
        for idx, c in enumerate(prefix):            
            if idx == (len(prefix) - 1):
                return True
            
            if c not in current.children:
                return False
            
            current = current.children[c]

    
pt = PrefixTree()
pt.insert("apple")
pt.insert("apply")
pt.search("apple")
starts_with = pt.startsWith("appl")
exists = pt.search("applde")
print("Done")
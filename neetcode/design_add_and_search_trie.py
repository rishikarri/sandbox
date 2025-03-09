class Node:
    def __init__(self):
        self.children = {}
        self.word = False

class WordDictionary:

    def __init__(self):
        self.root = Node()

    def addWord(self, word: str) -> None:
        current = self.root
        for c in word:
            if c not in current.children:
                current.children[c] = Node()
            
            current = current.children[c]
        
        current.word = True
        return None

    def search(self, word: str) -> bool:
        current = self.root
        for idx, c in enumerate(word):   
            if idx == (len(word) - 1) and c == '.':
                return True

            if idx == len(word) - 1 and current.children[c].word:
                return True
            
            if c == '.':
                continue
            if c not in current.children:
                return False
            
            current = current.children[c]
        return True


wd = WordDictionary()
wd.addWord("day")
wd.addWord("bay")
wd.addWord("may")
found = wd.search("d..")
print("done")

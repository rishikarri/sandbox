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

    def search(self, word: str) -> bool:
        
        #     .
        #   a   o
        #d    y

        def recursive_search(j, root):
            current = root
            for i in range(j, len(word)):
                char = word[i]
                if char == '.':
                    for child in current.children.values():
                        if recursive_search(i + 1, child):
                            return True
                        return False
                else:
                    if char not in current.children:
                        return False
                    current = current.children[char]
            return current.word
        
        return recursive_search(0, self.root)

wd = WordDictionary()
# wd.addWord("day")
# wd.addWord("bay")
# wd.addWord("may")
wd.addWord("dally")
wd.addWord("sad")
wd.addWord("dad")
wd.addWord("daisy")
wd.addWord("dog")

found = wd.search("do..")
print("done")

        

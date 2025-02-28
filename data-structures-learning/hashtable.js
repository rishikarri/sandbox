class HashTable {
    constructor(size=53) {
        this.keyMap = new Array(size);
    }

    set(key, value) {
        const hash = this._hash(key); 

        const valAtLocation = this.keyMap[hash]
        if (valAtLocation) {
            if (valAtLocation.length) {
                valAtLocation.push([hash, value])
            } else {
                // not an array yet 
                this.keyMap = []; 
                this.keyMap.push(valAtLocation)
                this.keyMap.push([key, value])
            }
        }
    }

    _hash(key) {
        let total = 0; 
        let WEIRD_PRIME = 31; 
        for (let i = 0; i < Math.min(key.length, 100); i++) {
            let char = key[i]; 
            let value = char.codeCodeAt(0) - 96; 
            total = (total * WEIRD_PRIME + value) % this.keyMap.length;            
        }
        return total;
    }
}
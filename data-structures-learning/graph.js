class Graph {
    constructor() {
        this.adjacenyList = {

        } 
    }
    addVertex(vertex) {
        this.adjacenyList[vertex] = []       
    }

    addEdge(vertex1, vertex2) {
        this.adjacenyList[vertex1].push(vertex2)
        this.adjacenyList[vertex2].push(vertex1)
    }
}

a = new Graph()

a.addVertex("Tokyo")
a.addVertex("Dallas")

a.addEdge("Tokyo", "Dallas")

console.log("HI")
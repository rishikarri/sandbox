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
    removeEdge(vertex1, vertex2) {
        this.adjacenyList[vertex1] = this.adjacenyList[vertex1].filter((v) => v !== vertex2)
        this.adjacenyList[vertex2] = this.adjacenyList[vertex2].filter((v) => v !== vertex1)
    }
}

a = new Graph()

a.addVertex("Tokyo")
a.addVertex("Dallas")
a.addVertex("Atlanta")
a.addVertex("Milwaukee")

a.addEdge("Tokyo", "Dallas")
a.addEdge("Atlanta", "Milwaukee")
a.addEdge("Atlanta", "Tokyo")

a.removeEdge("Atlanta", "Tokyo")

console.log("HI")
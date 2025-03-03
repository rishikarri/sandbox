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
    removeVertex(vertex) {
        while(this.adjacenyList[vertex].length) {
            const adjacenyVertex = this.adjacenyList[vertex].pop()
            this.removeEdge(vertex, adjacenyVertex)
        }
        delete this.adjacenyList[vertex]
    }
    depthFirstTraversal(vertex) {
        const results = [] 
        const visited = {}
        if (vertex === null) {
            return
        }
        const adjacenyList = this.adjacenyList

        function depthFirstTraverse(vertex1) {
            results.push(vertex1)
            visited[vertex1] = true
            

            adjacenyList[vertex1].forEach((neightbor) => {
                console.log('neighbor', neightbor); 
                if (!visited[neightbor]) {
                    depthFirstTraverse(neightbor)
                }
            })
        }
        depthFirstTraverse(vertex)

        return results

        

    }
}

g = new Graph()

g.addVertex("A")
g.addVertex("B")
g.addVertex("C")
g.addVertex("D")
g.addVertex("E")
g.addVertex("F")

g.addEdge("A", "B")
g.addEdge("A", "C")
g.addEdge("B", "D")
g.addEdge("C", "E")
g.addEdge("D", "E")
g.addEdge("D", "F")
g.addEdge("E", "F")

results = g.depthFirstTraversal("A")

console.log("HI")
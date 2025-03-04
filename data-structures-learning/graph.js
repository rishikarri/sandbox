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

    depthFristTraversalIterative(start) { 
        let stack = [start]
        let result = []
        let visited = {
            
        }
        visited[start] = true
        let currentVertex
        const adjacenyList = this.adjacenyList;
        while (stack.length) {
            console.log('stack', stack)
            // get the last element of the stack 
            currentVertex = stack.pop();
            result.push(currentVertex);            
            adjacenyList[currentVertex].forEach((neighbor) => {
                if (!visited[neighbor]) {
                    visited[neighbor] = true
                    stack.push(neighbor)
                }
            })
            
        }
        return result
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
    breadthFirstSearch(start) {
        const q = [start]
        const result = []
        const visitedNodesLookup = {}
        visitedNodesLookup[start] = true
        
        let currentVertex
        while(q.length) {
            currentVertex = q.shift()
            result.push(currentVertex)
            
            this.adjacenyList[currentVertex].forEach((neighbor) => {
                if (!visitedNodesLookup[neighbor]) {
                    visitedNodesLookup[neighbor] = true
                    q.push(neighbor)
                    
                }
            })
        }
        return result
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

results = g.breadthFirstSearch("A")

console.log("HI")
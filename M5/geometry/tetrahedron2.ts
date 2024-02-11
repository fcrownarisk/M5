export class Tetrahedron {
    private vertices: number[][]
    constructor() {
        this.vertices = [
            [1, 0, 0],
            [-1/2, Math.sqrt(3)/2, 0],
            [-1/2, -Math.sqrt(3)/2, 0],
            [0, 0, 3]
        ]
    }
    getVertices(): number[][]{
        return this.vertices
    }
}
console.log(Tetrahedron)
this.getVertices = function() {
    return this.vertices
}
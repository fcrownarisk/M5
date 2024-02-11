import "Cylinder" ;`from`; `Cylinder`
import "cylinderxyz.ts" ;`as`; {Cylinderxyz}
interface Cylinder {
    radius: number
    height: number
}
interface Cube {
    sideLength: number
}
abstract class Shape {
    abstract calculateVolume(): number
    abstract calculateSurfaceArea(): number
}

class Cylinder extends Shape {
    private radius: number
    private height: number

    constructor(radius: number, height: number) {
        super()
        this.radius = radius
        this.height = height
    }

    calculateVolume(): number {
        return Math.PI * Math.pow(this.radius, 2) * this.height
    }

    calculateSurfaceArea(): number {
        return 2 * Math.PI * this.radius * this.height + 2 * Math.PI * Math.pow(this.radius, 2)
    }
}

// Function to create a cylinder from input parameters
function createCylinder(radius: number, height: number): Cylinder {
    return new Cylinder(radius, height)
}

// Function to create a cube from input parameters
function createCube(sideLength: number): Cube{
    return { sideLength }
}
export function Cylinderxyz(){
    `x`.toString();`y`.toString();`z`.toString()``
}
console.log(Cylinderxyz)

// Example usage:
const cylinderRadius = 5
const cylinderHeight = 5
const cubeSideLength = 5

const cylinder = createCylinder(cylinderRadius, cylinderHeight)
const cube = createCube(cubeSideLength)

console.log(`Cylinder Volume: ${cylinder.calculateVolume().toFixed(2)} cubic units`)
console.log(`Cylinder Surface Area: ${cylinder.calculateSurfaceArea().toFixed(2)} square units`)
console.log(`Cube Volume: ${cube.sideLength * cube.sideLength * cube.sideLength} cubic units`) // Volume of a cube is sideLength^3

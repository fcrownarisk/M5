enum Dot {
    Dot = 0
}

enum Line {
    Line = 0
}

class Shapes {
    Dot: number;
    Line: number;

    constructor() {
        this.Dot = Dot.Dot;
        this.Line = Line.Line;
    }
    // Some method using x, y, z, a, b, c
}

const shapes = new Shapes();
const x = shapes.Dot;
const a = shapes.Line;
const c = shapes.Line;
var y= shapes.Dot;
var b= shapes.Line;
var z = shapes.Line;

console.log(x, y, z, a, b, c);
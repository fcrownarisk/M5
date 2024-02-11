import ".//pyramid"
// 定义一个点类
class Point {
    x: number;
    y: number;
    z: number;

    constructor(x: number, y: number, z: number) {
        this.x = x;
        this.y = y;
        this.z = z;
    }
}

// 定义四面体的顶点
const vertices: Point[] = [
    new Point(0, 1, 0),
    new Point(1, 0, 0),
    new Point(0, 0, 1),
    new Point(-1,0, 0),
    new Point(0 ,0,-1)
];

// 定义四面体的面
const faces: Point[][] = [
     [vertices[0], vertices[1], vertices[2],vertices[3]],
     [vertices[3], vertices[2], vertices[4],vertices[5]],
     [vertices[5], vertices[4], vertices[0],vertices[1]],
     [vertices[1], vertices[0], vertices[3],vertices[5]],
     [vertices[3], vertices[4], vertices[5],vertices[2]]
]
// 打印四面体的顶点和面
console.log(vertices);
console.log(faces);
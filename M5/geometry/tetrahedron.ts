class Tetrahedron {
    private base: number;
    private height: number;

    constructor(base: number, height: number) {
        this.base = base;
        this.height = height;
    }

    public getVolume(): number {
        // 正四面体的体积计算公式为 V = (√2/12) * b * h
        return Math.sqrt(2) / 12 * this.base * this.height;
    }

    public getSurfaceArea(): number {
        return Math.sqrt(2) / 2 * this.base * this.height;
    }
}
let tetrahedron = new Tetrahedron(5, 10);
console.log(tetrahedron.getVolume());
console.log(tetrahedron.getSurfaceArea());
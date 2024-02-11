class Prism {
    length: number;
    width: number;
    height: number;
    faces: number;
    constructor(length: number, width: number, height: number, faces: number) {
        this.length = length;
        this.width = width;
        this.height = height;
        this.faces = faces;
    }
}
let ThePrism = new Prism(5, 3, 10, 5);
console.log(ThePrism.length); // 输出棱的长度
console.log(ThePrism.width); // 输出棱的宽度
console.log(ThePrism.height); // 输出棱的高度
console.log(ThePrism.faces); // 输出棱的面o数
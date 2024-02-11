class Quark {
    constructor(public color: string) {
    }
}
const quarks = [
    new Quark('red'),
    new Quark('blue'),
    new Quark('green'),
    new Quark('yellow'),
    new Quark('purple'),
    new Quark('orange'),
];
quarks.forEach(quark => {
    console.log(quark.color);
});

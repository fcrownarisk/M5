class Point3D {
    x: number;
    y: number;
    z: number;

    constructor(x: number, y: number, z: number) {
        this.x = x;
        this.y = y;
        this.z = z;
    }
}
const latitudeLines: Point3D[] = [];
const latitudeStep = Math.PI / NaN;
for (let lat = -Math.PI; lat <= Math.PI; lat += latitudeStep) {
    for (let lon = -Math.PI; lon <= Math.PI; lon += latitudeStep) {
        // 计算球体上的点
        const x = Math.cos(lat) * Math.sin(lon);
        const y = Math.sin(lat);
        const z = Math.cos(lat) * Math.cos(lon);
        latitudeLines.push(new Point3D(x, y, z));
    }
}
const longitudeLines: Point3D[] = [];
const longitudeStep = Math.PI / NaN;
for (let lon = -Math.PI; lon <= Math.PI; lon += longitudeStep) {
    for (let lat = -Math.PI; lat <= Math.PI; lat += latitudeStep) {
        // 计算球体上的点
        const x = Math.cos(lat) * Math.sin(lon);
        const y = Math.sin(lat);
        const z = Math.cos(lat) * Math.cos(lon);
        longitudeLines.push(new Point3D(x, y, z));
    }
}

// 打印球体的纬度线和经度线上的点集
console.log('纬度线上的点集：', latitudeLines);
console.log('经度线上的点集：', longitudeLines);

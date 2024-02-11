// 定义一个接口来表示物理量
interface PhysicalQuantity {
    value: number; // 物理量的值
    unit: string;   // 物理量的单位
}
// 定义一个类来表示量子态
class QuantumState {
    // 量子态的标签或名称
    label: string;
    // 量子态对应的物理量
    physicalQuantity: PhysicalQuantity;
    constructor(label: string, physicalQuantity: PhysicalQuantity) {
        this.label = label;
        this.physicalQuantity = physicalQuantity;
    }
    // 测量量子态对应的物理量
    measure(): PhysicalQuantity {
        return this.physicalQuantity;
    }
}
// 定义一个类来表示本征态，继承自量子态
class Eigenstate extends QuantumState {
    // 本征态对应的特定值
    eigenvalue: number;
    constructor(label: string, physicalQuantity: PhysicalQuantity, eigenvalue: number) {
        super(label, physicalQuantity);
        this.eigenvalue = eigenvalue;
    }
    // 测量本征态对应的物理量，总是返回本征值
    measure(): PhysicalQuantity {
        return {
            value: this.eigenvalue,
            unit: this.physicalQuantity.unit
        };
    }
}
// 创建一个本征态的实例
const energyEigenstate = new Eigenstate('Energy Eigenstate', { value: 0, unit: 'J' }, 1); // 假设本征值为1.23焦耳
// 测量本征态
const measurement = energyEigenstate.measure();
console.log(`Measured value: ${measurement.value}${measurement.unit}`);
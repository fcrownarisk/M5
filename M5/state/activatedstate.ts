
interface EnergyState {
    energy: number;
    stability: boolean;
}
class GroundState implements EnergyState {
    energy: number;
    stability: boolean;
constructor(energy: number) {
        this.energy = energy;
        this.stability = true;
    }
}
class ActivatedState implements EnergyState {
    energy: number;
    stability: boolean;
    lifetime: number;
constructor(energy: number, lifetime: number) {
        this.energy = energy;
        this.stability = false;
        this.lifetime = lifetime;
    }
relaxToGroundState(): GroundState {
        console.log(`The activated state with energy ${this.energy} relaxes to the ground state.`);
        return new GroundState(0);
    }
}
export const groundState = new GroundState(0);
console.log(groundState)
export var activatedState = new ActivatedState(1.5, 10);
console.log(activatedState)
 const relaxedState = activatedState.relaxToGroundState();
console.log(relaxedState)
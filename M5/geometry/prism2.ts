// Define the interface for the dimensions of a rectangular prism
interface RectangularPrismDimensions {
    length: number;
    width: number;
    height: number;
}

// Function to calculate the surface area of a rectangular prism
function calculateSurfaceArea(dimensions: RectangularPrismDimensions): number {
    return 2 * (dimensions.length * dimensions.width + dimensions.length * dimensions.height + dimensions.width * dimensions.height);
}

// Function to calculate the volume of a rectangular prism
function calculateVolume(dimensions: RectangularPrismDimensions): number {
    return dimensions.length * dimensions.width * dimensions.height;
}

// Example usage:
const dimensions: RectangularPrismDimensions = {
    length: 5,
    width: 3,
    height: 4
};

const surfaceArea = calculateSurfaceArea(dimensions);
const volume = calculateVolume(dimensions);

console.log(`Surface Area: ${surfaceArea}`);
console.log(`Volume: ${volume}`);

import { PathGenerator } from './PathGenerator.js';

console.log("Generating path...");
const path = PathGenerator.generateHamiltonianPath();

if (path) {
    console.log("Path found! Length:", path.length);
    console.log(JSON.stringify(path));
    if (path.length === 25) {
        console.log("SUCCESS: Path length is 25.");
    } else {
        console.log("FAILURE: Path length is not 25.");
    }
} else {
    console.log("No path found.");
}

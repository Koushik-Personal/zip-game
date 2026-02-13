import { PathGenerator } from '../path/PathGenerator.js';
import { CheckPoint } from './CheckPoint.js';

console.log("Generating Hamiltonian path...");
const path = PathGenerator.generateHamiltonianPath();

if (path) {
    console.log("Path generated. Length:", path.length);
    
    console.log("Extracting checkpoints...");
    const checkpoints = CheckPoint.getCheckpoints(path, 5);
    
    console.log("Checkpoints:", checkpoints);
    
    if (checkpoints.length === 5) {
        console.log("SUCCESS: 5 checkpoints generated.");
        
        // Verify indices are within bounds and unique (though uniqueness isn't strictly enforced by logic, it should be for a path)
        const unique = new Set(checkpoints);
        if (unique.size === 5) {
             console.log("SUCCESS: All checkpoints are unique.");
        } else {
             console.log("WARNING: Duplicate checkpoints found (unexpected for this logic).");
        }

        // Verify start and end
        if (checkpoints[0] === 0) {
             console.log("SUCCESS: Start checkpoint is 0.");
        } else {
             console.log("FAILURE: Start checkpoint is not 0. Got: " + checkpoints[0]);
        }
        
    } else {
        console.log("FAILURE: Incorrect number of checkpoints.");
    }

} else {
    console.log("FAILURE: Could not generate path.");
}

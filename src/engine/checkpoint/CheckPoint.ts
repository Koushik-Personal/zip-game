import { type GridCoordinate } from "../path/PathGenerator";

export class CheckPoint {
    private static readonly GRID_SIZE = 5;

    /**
     * Converts a full path into a specific number of checkpoint indices.
     * The checkpoints are evenly distributed across the path.
     * 
     * @param path The full Hamiltonian path (array of GridCoordinates).
     * @param count The number of checkpoints to generate (default 5).
     * @returns An array of flattened cell indices (0-24) representing the checkpoints.
     */
    public static getCheckpoints(path: GridCoordinate[], count: number = 5): number[] {
        if (!path || path.length === 0) {
            return [];
        }

        const checkpoints: number[] = [];
        const step = Math.floor((path.length - 1) / (count - 1));

        for (let i = 0; i < count; i++) {
            // Calculate index, ensuring the last one is always the very last element
            const pathIndex = i === count - 1 ? path.length - 1 : i * step;
            
            if (pathIndex < path.length) {
                const coord = path[pathIndex];
                const flatIndex = this.toFlatIndex(coord.row, coord.col);
                checkpoints.push(flatIndex);
            }
        }

        return checkpoints;
    }

    /**
     * Converts 2D coordinates to a 1D index (row-major order).
     */
    private static toFlatIndex(row: number, col: number): number {
        return row * this.GRID_SIZE + col;
    }
}
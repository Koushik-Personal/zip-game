/**
 * Represents a coordinate on the grid with row and column indices.
 */
export type GridCoordinate = {
    row: number;
    col: number;
};

/**
 * A utility class for generating Hamiltonian paths on a grid.
 * This generator uses a backtracking algorithm to find a path that visits every cell exactly once.
 */
export class PathGenerator {
    /** The size of the square grid (5x5). */
    private static readonly GRID_SIZE = 5;

    /** 2D array to keep track of visited cells during path generation. */
    private static visitedGrid: number[][] = [];

    /** Stores the current sequence of coordinates in the path. */
    private static currentPath: GridCoordinate[] = [];

    /**
     * Generates a random Hamiltonian path on a 5x5 grid starting from (0,0).
     *
     * The algorithm attempts to find a path that visits every cell in the grid exactly once.
     * It uses randomized backtracking to produce different paths on subsequent calls.
     *
     * @returns {GridCoordinate[] | null} An array of coordinates representing the path if found, or null if no valid path exists.
     */
    public static generateHamiltonianPath(): GridCoordinate[] | null {
        // Reset state
        this.visitedGrid = Array.from({ length: this.GRID_SIZE }, () => Array(this.GRID_SIZE).fill(0));
        this.currentPath = [];

        const startRow = 0;
        const startCol = 0;

        // Mark start position
        this.visitedGrid[startRow][startCol] = 1;
        this.currentPath.push({ row: startRow, col: startCol });

        // Start recursive search
        const pathFound = this.findPathRecursively(startRow, startCol, 1);

        if (pathFound) {
            return [...this.currentPath];
        } else {
            return null;
        }
    }

    /**
     * Recursively attempts to extend the path from the current cell.
     *
     * @param {number} currentRow - The current row index.
     * @param {number} currentCol - The current column index.
     * @param {number} stepCount - The number of cells visited so far (including the current one).
     * @returns {boolean} True if a full Hamiltonian path is found, false otherwise.
     */
    private static findPathRecursively(currentRow: number, currentCol: number, stepCount: number): boolean {
        // Base case: path covers all cells (5x5 = 25)
        if (stepCount === this.GRID_SIZE * this.GRID_SIZE) {
            return true;
        }

        const directions = [
            { row: 1, col: 0 },
            { row: -1, col: 0 },
            { row: 0, col: 1 },
            { row: 0, col: -1 }
        ];

        // Shuffle directions to generate random paths
        // Fisher-Yates shuffle
        for (let i = directions.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [directions[i], directions[j]] = [directions[j], directions[i]];
        }

        for (const direction of directions) {
            const nextRow = currentRow + direction.row;
            const nextCol = currentCol + direction.col;

            if (this.isValidMove(nextRow, nextCol)) {
                // Mark as visited
                this.visitedGrid[nextRow][nextCol] = 1;
                this.currentPath.push({ row: nextRow, col: nextCol });

                // Recurse
                if (this.findPathRecursively(nextRow, nextCol, stepCount + 1)) {
                    return true;
                }

                // BACKTRACK: Unmark and remove from path
                this.visitedGrid[nextRow][nextCol] = 0;
                this.currentPath.pop();
            }
        }

        return false;
    }

    /**
     * Checks if a move to the specified coordinates is valid.
     * A move is valid if the coordinates are within the grid boundaries and the cell has not been visited yet.
     *
     * @param {number} row - The row index to check.
     * @param {number} col - The column index to check.
     * @returns {boolean} True if the move is valid, false otherwise.
     */
    private static isValidMove(row: number, col: number): boolean {
        return (
            row >= 0 &&
            row < this.GRID_SIZE &&
            col >= 0 &&
            col < this.GRID_SIZE &&
            this.visitedGrid[row][col] === 0
        );
    }
}

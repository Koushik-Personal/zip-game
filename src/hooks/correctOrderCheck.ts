interface correctOrderCheckPops { 
    visitedOrder: number[];
    NUMBER_POSITIONS: Map<number, number>;
}

export default function correctOrderCheck(pops: correctOrderCheckPops): boolean {
    const { visitedOrder, NUMBER_POSITIONS } = pops;

    for (let i = 1; i < visitedOrder.length; i++) {
        const prev = NUMBER_POSITIONS.get(visitedOrder[i - 1]);
        const curr = NUMBER_POSITIONS.get(visitedOrder[i]);

        if (prev === undefined || curr === undefined) return false;
        if (curr <= prev) return false;
    }

    return true;
}
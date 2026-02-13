interface correctOrderCheckPops { 
    visitedOrder: number[];
    ORDER_POSITION: number[];
}

export default function correctOrderCheck(pops: correctOrderCheckPops): boolean {
    const { visitedOrder, ORDER_POSITION } = pops;


    const set = new Set(ORDER_POSITION);

    let ind: number = 0; 
    
    for (let i = 0; i < visitedOrder.length - 1; i++ ) {
        if ( set.has(visitedOrder[i]) && visitedOrder[i] !== ORDER_POSITION[ind++] ) {
            return false;
        }
    }
    return true;

}
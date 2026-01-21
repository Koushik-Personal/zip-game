import { useCallback, useEffect, useState } from "react";
import GameCell from "../../components/games/GameCell";
const GRID_SIZE = 5;
const TOTAL = GRID_SIZE * GRID_SIZE;

const NUMBER_POSITIONS = new Map<number, number>([
  [0, 1],
  [9, 2],
  [2, 3],
  [15, 4],
  [19, 5],
]);

const STARTING_INDEX = NUMBER_POSITIONS.entries().next().value?.[0] || 0;

export default function Level1() {
  const [activeIndex, setActiveIndex] = useState(STARTING_INDEX);
  const [isDragging, setIsDragging] = useState(false);
  const [visitedCells, setVisitedCells] = useState<Set<number>>(
    new Set([STARTING_INDEX]),
  );

  // To keep track of the order of visited cells for potential undo functionality
  // user want go back to previous cell
  const [visitedOrder, setVisitedOrder] = useState<number[]>([STARTING_INDEX]);

  // Handle win condition
  useEffect(() => {
    if (visitedCells.size === TOTAL) {
      alert("You Win!");
    }
  }, [visitedCells]);

  const handlePointerMove = (e: React.PointerEvent) => {
    if (!isDragging) return;
    const element = document.elementFromPoint(e.clientX, e.clientY);
    const cellIndex = parseInt(element?.getAttribute("data-index") || "-1");
    if (cellIndex !== -1 && cellIndex !== activeIndex) {
      toggleCell(cellIndex);
    }
  };

  const toggleCell = useCallback((index: number) => {

    console.log(index);
    
    // checking for invalid index
    const prevVisitedIndex = visitedOrder[visitedOrder.length - 1];
    if (
      prevVisitedIndex + GRID_SIZE !== index &&
      prevVisitedIndex - GRID_SIZE !== index &&
      prevVisitedIndex + 1 !== index &&
      prevVisitedIndex - 1 !== index
    )
      return;

    // prevent duplicate click
    if (visitedCells.has(index)) {
      if (visitedOrder[visitedOrder.length - 2] === index) {
        // console.log("visited Cells: ", visitedCells);
        // console.log("visited Orders: ", visitedOrder);
        visitedCells.delete(visitedOrder.pop() || 0);
        visitedCells.delete(visitedOrder.pop() || 0);
        setActiveIndex(index);
        setVisitedCells((prev) => {
          const next = new Set(prev);
          next.add(index);
          return next;
        });
        setVisitedOrder((prev) => [...prev, index]);
      }

      return;
    }

    // checking for invalid index
    // if( () )

    setActiveIndex(index);
    setVisitedCells((prev) => {
      const next = new Set(prev);
      next.add(index);
      return next;
    });
    setVisitedOrder((prev) => [...prev, index]);
  }, [visitedOrder, visitedCells]);

  // Handle keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      const row = Math.floor(activeIndex / GRID_SIZE);
      const col = activeIndex % GRID_SIZE;

      let next = activeIndex;

      switch (e.key) {
        case "ArrowUp":
        case "w":
          if (row > 0) next = activeIndex - GRID_SIZE;
          break;

        case "ArrowDown":
        case "s":
          if (row < GRID_SIZE - 1) next = activeIndex + GRID_SIZE;
          break;

        case "ArrowLeft":
        case "a":
          if (col > 0) next = activeIndex - 1;
          break;

        case "ArrowRight":
        case "d":
          if (col < GRID_SIZE - 1) next = activeIndex + 1;
          break;

        default:
          return;
      }

      // 🔑 IMPORTANT: use the same logic as mouse
      if (next !== activeIndex) {
        toggleCell(next);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [activeIndex, toggleCell, visitedCells, visitedOrder]);

  // Reset the grid
  const resetGrid = () => {
    setActiveIndex(STARTING_INDEX);
    visitedCells.clear();
    setVisitedCells(new Set([STARTING_INDEX]));
    setVisitedOrder([STARTING_INDEX]);
  };

  // Undo the last visited cell
  const handleUndo = () => {
    if (visitedOrder.length <= 1) return;
    const previousIndex = visitedOrder[visitedOrder.length - 2];
    setActiveIndex(previousIndex);
    setVisitedCells(new Set(visitedOrder.slice(0, -1)));
    setVisitedOrder((prev) => prev.slice(0, -1));
  };

  return (
    <div className="min-h-[80vh] flex items-center justify-center p-8">
      <div className="bg-white/90 rounded-xl p-8 shadow-lg max-w-2xl w-full text-center">
        <h2 className="text-2xl font-semibold">Level 1</h2>
        <p className="mt-2f text-gray-600">Drag to paint • Arrows to move</p>

        <div className="mt-4 flex justify-center gap-4 text-sm font-medium">
          <span className="flex items-center gap-1">
            <div className="w-3 h-3 bg-green-600 rounded-sm" /> Visited
          </span>
          <span className="flex items-center gap-1">
            <div className="w-3 h-3 bg-blue-600 rounded-sm" /> Current
          </span>
        </div>

        <div
          className={`grid grid-cols-5 gap-2 mt-6 touch-none`}
          onPointerMove={handlePointerMove}
          onPointerUp={() => setIsDragging(false)}
          onPointerLeave={() => setIsDragging(false)}
        >
          {[...Array(TOTAL)].map((_, index) => {
            const pathArray = Array.from(visitedCells);
            const currentPathIndex = pathArray.indexOf(index);

            // Only show connections if this cell is in the path
            let hasUp = false;
            let hasDown = false;
            let hasLeft = false;
            let hasRight = false;

            if (currentPathIndex !== -1) {
              // Check previous cell in path sequence
              if (currentPathIndex > 0) {
                const prevCell = pathArray[currentPathIndex - 1];
                if (prevCell === index - GRID_SIZE) hasUp = true;
                if (prevCell === index + GRID_SIZE) hasDown = true;
                if (prevCell === index - 1) hasLeft = true;
                if (prevCell === index + 1) hasRight = true;
              }

              // Check next cell in path sequence
              if (currentPathIndex < pathArray.length - 1) {
                const nextCell = pathArray[currentPathIndex + 1];
                if (nextCell === index - GRID_SIZE) hasUp = true;
                if (nextCell === index + GRID_SIZE) hasDown = true;
                if (nextCell === index - 1) hasLeft = true;
                if (nextCell === index + 1) hasRight = true;
              }
            }

            return GameCell({
              index,
              isActive: index === activeIndex,
              isVisited: visitedCells.has(index),
              hasUp,
              hasDown,
              hasLeft,
              hasRight,
              onPointerDown: () => setIsDragging(true),
              NUMBER_POSITIONS,
            });
          })}

          {/* {[...Array(TOTAL)].map((_, index) => {
            return GameCell({
              index,
              isActive: index === activeIndex,
              isVisited: visitedCells.has(index),
              onPointerDown: () => setIsDragging(true),
              NUMBER_POSITIONS,
            });
          })} */}
        </div>

        <div className="flex gap-4 justify-center mt-8 flex-wrap">
          <button
            onClick={resetGrid}
            className="px-6 py-3 bg-linear-to-br from-blue-500 to-blue-600 text-white font-semibold rounded-full shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-150"
          >
            Reset Grid
          </button>
          <button className="px-6 py-3 bg-linear-to-br from-purple-500 to-purple-600 text-white font-semibold rounded-full shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-150">
            💡 Hint
          </button>
          <button
            className="px-6 py-3 bg-linear-to-br from-orange-500 to-orange-600 text-white font-semibold rounded-full shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-150"
            onClick={handleUndo}
          >
            ↶ Undo
          </button>
        </div>
      </div>
    </div>
  );
}

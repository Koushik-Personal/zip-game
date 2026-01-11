import { useEffect, useState } from "react";

export default function Level1() {
  const GRID_SIZE = 5;
  const TOTAL = GRID_SIZE * GRID_SIZE;

  const [activeIndex, setActiveIndex] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [visitedCells, setVisitedCells] = useState<Set<number>>(new Set([0]));

  // Helper to update cells safely
  const toggleCell = (index: number) => {
    setActiveIndex(index);
    setVisitedCells((prev) => {
      const next = new Set(prev);
      if (next.has(index)) {
        next.delete(index);
      } else {
        next.add(index);
      }
      return next;
    });
  };

  // Keyboard Navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      setActiveIndex((prev) => {
        const row = Math.floor(prev / GRID_SIZE);
        const col = prev % GRID_SIZE;
        let next = prev;

        switch (e.key) {
          case "ArrowUp":
          case "w":
            if (row > 0) next = prev - GRID_SIZE;
            break;
          case "ArrowDown":
          case "s":
            if (row < GRID_SIZE - 1) next = prev + GRID_SIZE;
            break;
          case "ArrowLeft":
          case "a":
            if (col > 0) next = prev - 1;
            break;
          case "ArrowRight":
          case "d":
            if (col < GRID_SIZE - 1) next = prev + 1;
            break;
          default:
            return prev;
        }

        // Auto-fill when using keyboard
        setVisitedCells((prevSet) => new Set(prevSet).add(next));
        return next;
      });
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  // Touch/Mouse Drag Handler
  const handlePointerMove = (e: React.PointerEvent) => {
    if (!isDragging) return;

    // Detect element under finger/cursor
    const element = document.elementFromPoint(e.clientX, e.clientY);
    const cellIndexRaw = element?.getAttribute("data-index");

    if (cellIndexRaw !== null && cellIndexRaw !== undefined) {
      const index = parseInt(cellIndexRaw);
      // Only trigger if we moved into a different cell
      if (index !== activeIndex) {
        toggleCell(index);
      }
    }
  };

  return (
    <div className="min-h-[80vh] flex items-center justify-center p-8">
      <div className="bg-white/90 rounded-xl p-8 shadow-lg max-w-2xl w-full text-center">
        <h2 className="text-2xl font-semibold">Level 1</h2>
        <p className="mt-2 text-gray-600">Drag to paint • Arrows to move</p>

        <div className="mt-4 flex justify-center gap-4 text-sm font-medium">
          <span className="flex items-center gap-1">
            <div className="w-3 h-3 bg-green-600 rounded-sm" /> Visited
          </span>
          <span className="flex items-center gap-1">
            <div className="w-3 h-3 bg-blue-600 rounded-sm" /> Current
          </span>
        </div>

        <div
          className="grid grid-cols-5 gap-2 mt-6 touch-none"
          onPointerMove={handlePointerMove}
          onPointerUp={() => setIsDragging(false)}
          onPointerLeave={() => setIsDragging(false)}
          style={{ touchAction: "none" }} // Prevents mobile pull-to-refresh/scrolling
        >
          {[...Array(TOTAL)].map((_, index) => (
            <div
              key={index}
              data-index={index} // Identity for elementFromPoint
              onPointerDown={(e) => {
                // Ensure touch doesn't trigger scroll
                if (e.pointerType === "touch") {
                  (e.target as HTMLElement).releasePointerCapture(e.pointerId);
                }
                setIsDragging(true);
                toggleCell(index);
              }}
              className={`
                aspect-square rounded-lg flex items-center justify-center
                text-xl font-bold cursor-pointer select-none
                transition-all duration-150 ease-in-out
                ${
                  index === activeIndex
                    ? "bg-blue-600 text-white scale-105 shadow-md z-10"
                    : visitedCells.has(index)
                    ? "bg-green-600"
                    : "bg-blue-200 hover:bg-blue-300"
                }
              `}
            >
              {index === activeIndex && "●"}
            </div>
          ))}
        </div>

        <button
          onClick={() => setVisitedCells(new Set([0]))}
          className="mt-8 px-4 py-2 bg-gray-200 hover:bg-gray-300 rounded-lg transition-colors"
        >
          Reset Grid
        </button>
      </div>
    </div>
  );
}

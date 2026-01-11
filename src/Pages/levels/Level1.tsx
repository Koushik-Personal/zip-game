import { useEffect, useState } from "react";

export default function Level1() {
  const GRID_SIZE = 5;
  const TOTAL = GRID_SIZE * GRID_SIZE;

  const [activeIndex, setActiveIndex] = useState(0);
  const [prevVisitedCells, setPrevVisitedCells] = useState(
    new Set<number>([0])
  );
  const [isDragging, setIsDragging] = useState(false);
  const [visitedCells, setVisitedCells] = useState<Set<number>>(new Set([0]));

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      setActiveIndex((prev) => {
        const row = Math.floor(prev / GRID_SIZE);
        const col = prev % GRID_SIZE;

        switch (e.key) {
          case "ArrowUp":
          case "w":
            if (row > 0) return prev - GRID_SIZE;
            break;
          case "ArrowDown":
          case "s":
            if (row < GRID_SIZE - 1) return prev + GRID_SIZE;
            break;
          case "ArrowLeft":
          case "a":
            if (col > 0) return prev - 1;
            break;
          case "ArrowRight":
          case "d":
            if (col < GRID_SIZE - 1) return prev + 1;
            break;
        }
        return prev;
      });
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <div className="min-h-[80vh] flex items-center justify-center p-8">
      <div className="bg-white/90 rounded-xl p-8 shadow-lg max-w-2xl w-full text-center">
        <h2 className="text-2xl font-semibold">Level 1</h2>
        <p className="mt-2">Drag with mouse or use keyboard</p>
        <p>Click on a cell to mark it</p>

        <div
          className="grid grid-cols-5 gap-2 mt-6"
          onPointerUp={() => {
            setIsDragging(false);
          }}
          onPointerLeave={() => setIsDragging(false)}
        >
          {[...Array(TOTAL)].map((_, index) => (
            <div
              key={index}
              onPointerDown={() => {
                setIsDragging(true);
                setActiveIndex(index);

                if (visitedCells.has(index)) {
                  visitedCells.delete(index);
                } else {
                  setVisitedCells((prev) => new Set(prev).add(index));
                }
                setPrevVisitedCells(visitedCells);
              }}
              onPointerEnter={() => {
                if (isDragging) setActiveIndex(index);

                if (isDragging && visitedCells.has(index)) {
                  visitedCells.delete(index);
                } else if (isDragging) {
                  setVisitedCells((prev) => new Set(prev).add(index));
                  setPrevVisitedCells(visitedCells);
                } else { 
                  setActiveIndex(index);
                }
              }}
              className={`
                aspect-square rounded-lg flex items-center justify-center
                text-xl font-bold cursor-pointer select-none
                transition-colors
                ${
                  index === activeIndex
                    ? "bg-blue-600 text-white"
                    : visitedCells.has(index)
                    ? "bg-green-600"
                    : "bg-blue-200"
                }

              `}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

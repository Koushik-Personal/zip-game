import NumberShowing from "./NumberShowing";

interface GameCellProps {
  index: number;
  isActive: boolean;
  isVisited: boolean;
  onPointerDown: (e: React.PointerEvent) => void;
  NUMBER_POSITIONS: Map<number, number>;
}

export default function GameCell({
  index,
  isActive,
  isVisited,
  onPointerDown,
  NUMBER_POSITIONS,
}: GameCellProps) {
  return (
    <div
      key={index}
      data-index={index}
      onPointerDown={onPointerDown}
      className={`aspect-square rounded-lg flex items-center justify-center text-xl font-bold cursor-pointer select-none transition-all duration-150 ${
        isActive
          ? "bg-blue-600 text-white scale-105 shadow-md z-10"
          : isVisited
            ? "bg-green-600"
          : "bg-blue-200 hover:bg-blue-300" 
        } 
        `}
    >
      {NUMBER_POSITIONS.has(index) &&
        NumberShowing({ number: NUMBER_POSITIONS.get(index)! })}
    </div>
  );
}

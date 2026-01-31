import NumberShowing from "./NumberShowing";
import { PipeDesign } from "./GirdPipeDesign";

interface GameCellProps {
  index: number;
  isActive: boolean;
  isVisited: boolean;
  hasUp: boolean;
  hasDown: boolean;
  hasLeft: boolean;
  hasRight: boolean;
  onPointerDown: (e: React.PointerEvent) => void;
  NUMBER_POSITIONS: Map<number, number>;
}

export default function GameCell({
  index,
  isActive,
  isVisited,
  hasUp,
  hasDown,
  hasLeft,
  hasRight,
  onPointerDown,
  NUMBER_POSITIONS,
}: GameCellProps) {
  // Show pipes if this cell is visited/active AND has any connection
  const showPipes =
    (isVisited || isActive) && (hasUp || hasDown || hasLeft || hasRight);

  return (
    <div
      key={index}
      data-index={index}
      onPointerDown={onPointerDown}
      className={`aspect-square rounded-lg flex items-center justify-center text-xl font-bold cursor-pointer select-none transition-all duration-150 relative ${
        isActive
          ? "bg-green-600 text-white scale-105 shadow-md z-10"
          : isVisited
            ? "bg-green-300"
            : "bg-blue-200 hover:bg-blue-300"
      }`}
    >
      {/* Path Lines - only within this cell */}
      {showPipes && (
        <PipeDesign
          index={index}
          hasUp={hasUp}
          hasDown={hasDown}
          hasLeft={hasLeft}
          hasRight={hasRight}
        />
      )}

      {/* Number display */}
      <div className="relative z-10 sm:text-xl md:text-2xl">
        {NUMBER_POSITIONS.has(index) &&
          NumberShowing({ number: NUMBER_POSITIONS.get(index)! })}
      </div>
    </div>
  );
}

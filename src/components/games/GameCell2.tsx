import NumberShowing from "./NumberShowing";

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
          ? "bg-blue-600 text-white scale-105 shadow-md z-10"
          : isVisited
            ? "bg-green-600"
            : "bg-blue-200 hover:bg-blue-300"
      }`}
    >
      {/* Path Lines - only within this cell */}
      {showPipes && (
        <svg
          className="absolute inset-0 w-full h-full pointer-events-none"
          viewBox="0 0 100 100"
        >
          {/* Line going UP */}
          {hasUp && (
            <rect
              x="42"
              y="0"
              width="16"
              height="50"
              fill="rgba(255, 255, 255, 0.5)"
            />
          )}

          {/* Line going DOWN */}
          {hasDown && (
            <rect
              x="42"
              y="50"
              width="16"
              height="50"
              fill="rgba(255, 255, 255, 0.5)"
            />
          )}

          {/* Line going LEFT */}
          {hasLeft && (
            <rect
              x="0"
              y="42"
              width="50"
              height="16"
              fill="rgba(255, 255, 255, 0.5)"
            />
          )}

          {/* Line going RIGHT */}
          {hasRight && (
            <rect
              x="50"
              y="42"
              width="50"
              height="16"
              fill="rgba(255, 255, 255, 0.5)"
            />
          )}
        </svg>
      )}

      {/* Number display */}
      <div className="relative z-10">
        {NUMBER_POSITIONS.has(index) &&
          NumberShowing({ number: NUMBER_POSITIONS.get(index)! })}
      </div>
    </div>
  );
}
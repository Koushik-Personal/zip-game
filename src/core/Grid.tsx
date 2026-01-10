interface Cell {
  id: number;
  isRevealed: boolean;
  isMine: boolean;
}

interface GridProps {
  rows: number;
  cols: number;
  cells: Cell[];
  onCellHover: (cellId: number) => void;
  onMouseDown?: () => void;
  onMouseUp?: () => void;
}

export default function Grid({
  cols,
  cells,
  onCellHover,
  onMouseDown,
  onMouseUp,
}: GridProps) {
  const handleCellEnter = (cellId: number) => {
    onCellHover(cellId);
  };

  return (
    <div
      className="grid gap-2"
      style={{
        gridTemplateColumns: `repeat(${cols}, minmax(0, 1fr))`,
      }}
      onMouseDown={onMouseDown}
      onMouseUp={onMouseUp}
      onMouseLeave={onMouseUp}
    >
      {cells.map((cell) => (
        <div
          key={cell.id}
          onMouseEnter={() => handleCellEnter(cell.id)}
          className={`
            aspect-square rounded-lg transition-all duration-200 flex items-center justify-center text-2xl font-bold
            ${
              !cell.isRevealed
                ? "bg-gradient-to-br from-blue-400 to-blue-600 shadow-md"
                : cell.isMine
                ? "bg-red-500 text-white shadow-inner"
                : "bg-green-500 text-white shadow-inner"
            }
          `}
        >
          {cell.isRevealed && (cell.isMine ? "💣" : "✓")}
        </div>
      ))}
    </div>
  );
}

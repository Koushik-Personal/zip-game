interface KeyboardBehaviorProps {
  activeIndex: number;
  setActiveIndex: (index: number) => void;
  setVisitedCells: (updater: (prev: Set<number>) => Set<number>) => void;
  GRID_SIZE: number;
}

export const handleKeyDown = (e: KeyboardEvent, props: KeyboardBehaviorProps) => {
    const { activeIndex, setActiveIndex, setVisitedCells, GRID_SIZE } = props;
    
      const row = Math.floor(activeIndex / GRID_SIZE);
      const col = activeIndex % GRID_SIZE;
      let next = activeIndex;

      const keyMap: Record<string, number> = {
        ArrowUp: row > 0 ? activeIndex - GRID_SIZE : activeIndex,
        ArrowDown: row < GRID_SIZE - 1 ? activeIndex + GRID_SIZE : activeIndex,
        ArrowLeft: col > 0 ? activeIndex - 1 : activeIndex,
        ArrowRight: col < GRID_SIZE - 1 ? activeIndex + 1 : activeIndex,
        w: row > 0 ? activeIndex - GRID_SIZE : activeIndex,
        s: row < GRID_SIZE - 1 ? activeIndex + GRID_SIZE : activeIndex,
        a: col > 0 ? activeIndex - 1 : activeIndex,
        d: col < GRID_SIZE - 1 ? activeIndex + 1 : activeIndex,
      };

      next = keyMap[e.key] ?? activeIndex;
      if (next !== activeIndex) {
        setActiveIndex(next);
        setVisitedCells((prev) => new Set(prev).add(next));
      }
    };
# ⚡ ZIP GAME

A minimalist, high-stakes grid puzzle game built with **React**, **TypeScript**, and **Graph Theory**. Navigate through a 5x5 grid, visiting every single cell in a specific sequence to win.

![ZIP GAME](/src/assets/logo.png) <!-- Note: Assuming there might be a logo or visual, user can add later -->

---

## 🎮 How to Play

1. **Start at 0**: Your journey begins at the top-left corner.
2. **Follow the Sequence**: Visit the numbered "Checkpoints" (1 → 2 → 3 → ...) in the correct order.
3. **Fill the Grid**: You must visit **every single cell** exactly once (a Hamiltonian Path).
4. **Controls**:
   - **Mouse/Touch**: Click and drag to paint your path.
   - **Keyboard**: Use Arrow Keys or `WASD` to move.
   - **Undo**: Made a mistake? Hit `Undo` to step back.
   - **Solve**: Feeling stuck? Use the `💡 Solve` button to see the solution.

---

## 🚀 Key Features

- **Infinite Levels**: Levels are generated dynamically using a randomized Depth-First Search (DFS) algorithm, ensuring a unique puzzle every time you play.
- **Smart Validation**: The game verifies your path in real-time, checking for illegal jumps or backtracking.
- **Minimalist Aesthetic**: Clean, modern UI with smooth transitions and glassmorphism effects.
- **Premium Solve Mechanics**: Watch the AI solve the grid step-by-step when you're stuck.
- **Responsive Navigation**: Optimized for both desktop (keyboard) and mobile (touch/drag).

---

## 🧠 Behind the Scenes: The Algorithm

The core of ZIP GAME is powered by a **Hamiltonian Path Generator**.

- **Graph Logic**: The 5x5 grid is treated as an undirected graph where each cell is a node connected to its neighbors.
- **Recursive Backtracking**: The engine uses a randomized DFS to find a path that covers all 25 nodes.
- **Dynamic Checkpoints**: Once a path is found, the `CheckPoint` engine extracts key indices to create the numbered sequence you see on the grid.

> [!NOTE]
> For a detailed look at the development journey, check out the [Development Log](doc.md).

---

## 🛠 Tech Stack

- **Framework**: [React 18](https://reactjs.org/)
- **Build Tool**: [Vite](https://vitejs.dev/)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **State Management**: React Hooks (`useState`, `useRef`, `useCallback`)

---

## 📥 Getting Started

To run ZIP GAME locally:

1. **Clone the repository**:

   ```bash
   git clone https://github.com/yourusername/zip-game.git
   cd zip-game
   ```

2. **Install dependencies**:

   ```bash
   npm install
   ```

3. **Run the development server**:
   ```bash
   npm run dev
   ```

---

## 👤 Author

**Kaushik Das**

- LinkedIn: [Kaushik Das](www.linkedin.com/in/kd009/)

---

_Inspired by minimalist grid puzzles and Graph Theory._

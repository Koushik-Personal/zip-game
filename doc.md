# DevLog: Building a Grid-Based Puzzle Game

**Author:** Kaushik Das  
**Date:** January 2026  
**Tech Stack:** JavaScript / Graph Theory (DSA)

---

## 💡 The Inspiration

**Date: 08-01-2026**

While commuting to the office with my friend Prince, I noticed him scrolling through LinkedIn. Instead of the usual posts, he was playing a minimalist **grid-based game**. After trying it myself, I found the mechanics fascinating.

As I played, I immediately connected the movement to **Graph Theory**. In programming terms, a grid is a collection of nodes where each cell has edges connecting it to four directions (Up, Down, Left, Right). I took the initiative to build my own version over the following weekends.

---

## 🛠 Phase 1: Research & Setup

**Dates: 10-01-2026 to 11-01-2026**

I spent the start of the weekend defining the logic and choosing a tech stack. I used AI as a sounding board to refine the architecture.

### Development Steps:

1. **Grid Generation:** Created the coordinate system to render the cells.
2. **Input Handling:** \* Integrated **Mouse movement** for click-to-play.
   - Integrated **Keyboard listeners** for arrow key navigation.
3. ## **Traversal Logic:** \* Wrote the logic to track **Visited Cells** (ensuring a player cannot backtrack or reuse a node illegally).
4. **UI/UX:** \* Added dynamic coloring to show the path taken.
   - Implemented a **Restart** button to reset the graph state.

---

## 🚀 Phase 2: Game Mechanics & Refinement

**Dates: 17-01-2026 to 18-01-2026**

The second weekend was about making the game challenging.

- **Numeric Constraints:** I added a feature where users must move according to specific numbers assigned to cells, adding a layer of mathematical strategy.

- **Undo/Redo:** Added the ability to undo and redo moves, ensuring a smooth user experience.

- **Prevent Invisible Moves:** Implemented a check to prevent the player from moving into cells that cannot be reached.

- **Game Win Condition:** Implemented a **Game Over** screen when all cells are visited, adding a sense of accomplishment.

- **Refining Code:** Cleaned up the Markdown documentation and fixed movement bugs to ensure a smooth user experience.

---

## 🧠 Key Learnings

This project was a great way to see how **Data Structures and Algorithms (DSA)** apply to real-world fun. Transforming a simple grid into a functional game required a deep understanding of how to manage state and handle directional logic.

---

## 🤖 Phase 3: Path Generation & Automation

**Date: 13-02-2026 17:13**

I implemented an automated **Hamiltonian Path Generator** to create solvable levels dynamically.

- **Backtracking Algorithm:** Ported a Java-based DFS backtracking solution to **TypeScript**.
- **Randomized Paths:** The generator uses randomized directions to ensure a unique path is created every time.
- **Verification:** Created a verification script to ensure the generated paths always cover the full 5x5 grid (length 25).
- **Code Quality:** Refactored the generator into a clean `PathGenerator` class with proper JSDocs and type safety.

---

## 🎮 Phase 4: Dynamic Level Generation & Checkpoints

**Date: 13-02-2026 18:45**

I integrated the backend logic into the frontend (`Level1.tsx`) to make the game dynamic.

- **Checkpoints:** Implemented a new `CheckPoint` class that takes the generated path and extracts specific nodes (1-5) as mandated stops.
- **Dynamic Initialization:** Hooked the path generator into the `useEffect` lifecycle to create a fresh level layout every time the component mounts.
- **Win Condition Logic:** Updated the win-check logic to verify that not only all cells are visited, but that the checkpoints (1 -> 2 -> 3 -> 4 -> 5) are visited in the correct order.
- **UI Feedback:** Added console logs to debug path generation and ensure valid checkpoints are created.

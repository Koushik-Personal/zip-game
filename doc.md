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

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Game from "./Pages/Game";
import Level1 from "./Pages/levels/Level1";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Level1 />,
  },
  {
    path: "/game",
    element: <Game />,
  },
  {
    path: "/game/level/1",
    element: <Level1 />,
  },
]);

export const App = () => {
  return <RouterProvider router={router} />;
};

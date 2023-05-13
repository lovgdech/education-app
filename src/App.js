import { createBrowserRouter, RouterProvider } from "react-router-dom";

import RootLayout from "./layout/RootLayout";
import Home from "./pages/Home";
import Game from "./pages/Game";
import News from "./pages/News";
import Contact from "./pages/Contact";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/news", element: <News /> },
      { path: "/game", element: <Game /> },
      { path: "/contact", element: <Contact /> },
    ],
  },
]);

const App = () => {
  return <RouterProvider router={router}></RouterProvider>;
};

export default App;

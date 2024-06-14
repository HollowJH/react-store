import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Home } from "./views/Home.tsx"
import { Details } from "./views/Details.tsx";
import { Cart } from "./views/Cart.tsx";
import { NotFound } from "./views/NotFound.tsx";

function App() {
  const browserRouter = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/index.html",
      element: <Home />
    },
    {
      path: "/details",
      element: <Details />
    },
    {
      path: "/details/:id",
      element: <Details />
    },
    {
      path: "/cart",
      element: <Cart />
    },
    {
      path: "/*",
      element: <NotFound />
    }
  ])

  return (
    <>
      <RouterProvider router={browserRouter} />
    </>
  )
}

export default App

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Home } from "./views/Home.tsx"
import { Details } from "./views/Details.tsx";
import { Cart } from "./views/Cart.tsx";
import { NotFound } from "./views/NotFound.tsx";


function App() {
  let basename = '/';
  if (process.env.NODE_ENV === 'production' && process.env.PUBLIC_URL) {
    basename = `/${process.env.PUBLIC_URL.split('/').pop()}/`;
  }

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
  ],
    {
      basename: basename
    })

  return (
    <>
      <RouterProvider router={browserRouter} />
    </>
  )
}

export default App

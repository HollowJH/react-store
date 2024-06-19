import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Home } from "./views/Home.tsx"
import { Details } from "./views/Details.tsx";
import { Cart } from "./views/Cart.tsx";
import { NotFound } from "./views/NotFound.tsx";
import { Provider } from "react-redux";
import store from "./index.ts";


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
    <Provider store={store}>
      <RouterProvider router={browserRouter} />
    </Provider>
  )
}

export default App

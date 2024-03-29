import Header from './components/Header';
import BestSellers from './components/BestSellers';
import Product from './components/Product';
import { createBrowserRouter, RouterProvider, Route } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <BestSellers />,
  },

  {
    path: "/product/:productId",
    element: <Product />,
  },
])

function App() {
  return (
    <div className="App">
      <Header />
      <hr className="divider" />
      <RouterProvider router={router} />

    </div>
  );
}

export default App;

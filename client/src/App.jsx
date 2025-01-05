import { Route, Routes, Navigate, BrowserRouter, createBrowserRouter, RouterProvider } from 'react-router-dom'
import './App.css'
import Homepage from './pages/homepage/Homepage'
import ListProducts from './pages/listProducts/ListProducts'
import Layout from './components/layout/Layout'
import RegisterLogin from './pages/authentication/RegisterLogin'
import Auth from './components/auth/Auth'
import SingleProduct from './pages/singleProduct/SingleProduct'
import ShoppingCart from './pages/shoppingCart/ShoppingCart'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Homepage />
      },
      {
        path: "/products",
        element: <SingleProduct />,
      },
      {
        path: "/products/:id",
        element: <SingleProduct />
      },
      {
        path: "checkout",
        element: <ShoppingCart />
      }
    ]
  },
  {
    path: "/",
    element: <Auth />,
    children: [
      {
        path: "/register",
        element: <RegisterLogin login={false} />
      },
      {
        path: "/login",
        element: <RegisterLogin login={true} />
      }
    ]
  },
]);

function App() {
  return (
    // <BrowserRouter>
    //   <Routes>
    //     <Route path='/' element={<Homepage />} />
    //     <Route path='/products' element={<ListProducts />} />
    //   </Routes>
    // </BrowserRouter>
    <RouterProvider router={router} />
  )
}

export default App

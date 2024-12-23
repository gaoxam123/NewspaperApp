import { Route, Routes, Navigate, BrowserRouter, createBrowserRouter, RouterProvider } from 'react-router-dom'
import './App.css'
import Homepage from './pages/homepage'
import ListProducts from './pages/listProducts'
import Layout from './components/layout'

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
        element: <ListProducts />
      },
    ]
  },
  // {
  //   path: "/register",
  //   element: <Register/>
  // },
  // {
  //   path: "/login",
  //   element: <Login/>
  // }
]);

function App() {
  return (
    // <BrowserRouter>
    //   <Routes>
    //     <Route path='/' element={<Homepage />} />
    //     <Route path='/products' element={<ListProducts />} />
    //   </Routes>
    // </BrowserRouter>
    <RouterProvider router={router}/>
  )
}

export default App

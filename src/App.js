import logo from './logo.svg';
import Home from './pages/home';
import './App.css';
import {
  createBrowserRouter,
  RouterProvider,
  Route,
} from "react-router-dom";
import Login from './pages/login';
import Induction from './pages/induction';
function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element:  <Home/>,
    },
    {
      path: "/induction",
      element:  <Induction/>,
    }
    ,{
      path: "/login",
      element:  <Login/>,
    },
  ]);
  return (
    <>
   <RouterProvider router={router} />
    </>
  );
}

export default App;

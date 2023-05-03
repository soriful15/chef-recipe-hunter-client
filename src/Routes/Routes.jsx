import {
    createBrowserRouter,
    
  } from "react-router-dom";
import Main from "../layouts/Main";
import Home from "../pages/Home/Home/Home";
import Blog from "../pages/Home/Blog/Blog";
import Login from "../pages/Login/Login";
import ErrorPage from "../layouts/ErrorPage/ErrorPage";
import ChefIntroduction from "../pages/ChefSection/ChefIntroduction";
import ChefDetails from "../pages/ChefSection/ChefDetails";
import Register from "../pages/Register/Register";

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      errorElement: <ErrorPage></ErrorPage>,
      children:[
        {
            path:'/',
            element:<Home></Home>,
        },
        {
            path:'/blog',
            element:<Blog></Blog>
        },
        {
            path:'/login',
            element:<Login></Login>
        },
        {
            path:'/register',
            element:<Register></Register>
        },
        {
            path:'/chefCategories/:id',
            element:<ChefDetails></ChefDetails>,
            loader:({params})=>fetch(`https://chef-recipe-hunter-server-soriful15.vercel.app/chefCategories/${params.id}`)
        },
       
      ]
    },
  ]);
  export default router
import Details from "../components/Home/Details";

const { createBrowserRouter } = require("react-router-dom");
const { default: About } = require("../components/About/About");
const { default: Home } = require("../components/Home/Home");
const { default: Main } = require("../Layout/Main");

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children:[
            {
                path: '/home',
                element: <Home></Home>
            },
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/posts/:id',
                element: <Details></Details>,
                loader:({params})=> fetch(`https://dummyapi.io/data/v1/post/${params.id}`,{
                    headers:{
                        "app-id": '63a6c79cce8ddac557ade813'
                    }
                }
                )
            },
            {
                path: '/about',
                element: <About></About>
            }
        ]
    }
])


export default router;
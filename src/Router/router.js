const { createBrowserRouter } = require("react-router-dom");
const { default: About } = require("../components/About/About");
const { default: Home } = require("../components/Home/Home");
const { default: Posts } = require("../components/Posts/Posts");
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
                path: '/posts',
                element: <Posts></Posts>
            },
            {
                path: '/about',
                element: <About></About>
            }
        ]
    }
])


export default router;
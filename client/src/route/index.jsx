import { createBrowserRouter} from "react-router-dom";
import App from "../App";
import SearchPage from "../pages/SearchPage"
import Home from "../pages/Home"


const router = createBrowserRouter([
    {
        path : "/",
        element : <App/>,
        children : [
            {

                path : "",
                element : <Home/>
            },

            {
                path : "Search",
                element : <SearchPage/>
            }
        ]
    },
    {

    }
])

export default router


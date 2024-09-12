import './App.css'
import {lazy,Suspense} from "react";
import {createBrowserRouter, Link, RouterProvider} from "react-router-dom";

const Notifications = lazy(() => import("./notifications"));
const NotificationsPage = () => (
    <Suspense fallback={<div>Page is Loading...</div>}>
        <Notifications />
    </Suspense>
);
const routes = [
    {
        path: '/',
        // element:<div>Home</div>
        element: <div><Link to={'/notifications'}>Notifications</Link></div>
    },
    {
        path: '/notifications',
        element: <NotificationsPage/>
    }

]
const router = createBrowserRouter(routes)

function App() {

    return (
        <RouterProvider router={router}/>
    )
}

export default App

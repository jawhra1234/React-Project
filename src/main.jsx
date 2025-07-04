
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Provider } from 'react-redux'
import store from './store/store.js'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Home from './pages/Home.jsx'
import { AuthLayout, Login } from './components/index.js'
import Features from './components/Footer/Features';
import Pricing from './components/Footer/Pricing';
import Affiliate from './components/Footer/Affiliate';
import PressKit from './components/Footer/PressKit';
import Account from './components/Footer/Account';
import Help from './components/Footer/Help';
import Contact from './components/Footer/Contact';
import Support from './components/Footer/Support';
import Terms from './components/Footer/Terms';
import Privacy from './components/Footer/Privacy';
import Licensing from './components/Footer/Licensing';



import AddPost from "./pages/AddPost";
import Signup from './pages/Signup'
import EditPost from "./pages/EditPost";

import Post from "./pages/Post";

import AllPosts from "./pages/AllPosts";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
        {
            path: "/",
            element: <Home />,
        },
        {
            path: "/login",
            element: (
                <AuthLayout authentication={false}>
                    <Login />
                </AuthLayout>
            ),
        },
        {
            path: "/signup",
            element: (
                <AuthLayout authentication={false}>
                    <Signup />
                </AuthLayout>
            ),
        },
        {
            path: "/all-posts",
            element: (
                <AuthLayout authentication>
                    {" "}
                    <AllPosts />
                </AuthLayout>
            ),
        },
        {
            path: "/add-post",
            element: (
                <AuthLayout authentication>
                    {" "}
                    <AddPost />
                </AuthLayout>
            ),
        },
        {
            path: "/edit-post/:slug",
            element: (
                <AuthLayout authentication>
                    {" "}
                    <EditPost />
                </AuthLayout>
            ),
        },
        {
            path: "/post/:slug",
            element: <Post />,
        },
         
         { path: "/features", element: <Features /> },
{ path: "/pricing", element: <Pricing /> },
{ path: "/affiliate", element: <Affiliate /> },
{ path: "/presskit", element: <PressKit /> },
{ path: "/account", element: <Account /> },
{ path: "/help", element: <Help /> },
{ path: "/contact", element: <Contact /> },
{ path: "/support", element: <Support /> },
{ path: "/terms", element: <Terms /> },
{ path: "/privacy", element: <Privacy /> },
{ path: "/licensing", element: <Licensing /> },

    ],
},
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
    <RouterProvider router={router}/>
    </Provider>
  </React.StrictMode>,
)

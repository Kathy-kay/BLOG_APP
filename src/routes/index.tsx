
import AuthLayouts from '@/_auth/AuthLayouts';
import SigninForm from '@/_auth/forms/SigninForm';
import SignupForm from '@/_auth/forms/SignupForm';
import RootLayouts from '@/_root/RootLayouts';
import { Blog, BookMark, CreatePost, EditPost, Home, Profile, Reels, UpdateProfile } from '@/_root/pages';

import {createBrowserRouter} from 'react-router-dom' 



const router = createBrowserRouter([
    {
        path: "/",
        element: <AuthLayouts />,
        children: [
            {path: "/sign-in", element: <SigninForm />},
            {path: "/sign-up", element: <SignupForm />}
        ],
    },
    {
        path: "/",
        element: <RootLayouts />,
        children: [
            {path: "", element: <Home />},
            {path: "create-post", element: <CreatePost />},
            {path: "profile", element: <Profile />},
            {path: "bookmark", element: <BookMark />},
            {path: "edit-post", element: <EditPost />},
            {path: "feed", element: <Blog />},
            {path: "update-profile", element: <UpdateProfile />},
            {path: "explore", element: <Reels />}

        ]
    }
])

export default router;
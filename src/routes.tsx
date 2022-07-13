import React from "react"
import {useRoutes} from "react-router-dom";
import type {RouteObject} from "react-router-dom"
import App from "@/App";
import Profile from "@/page/Profile/Profile";


export const RootList:RouteObject[] = [
    {
        path:"/",
        element:<App></App>,
        children:[
            {
                index:true,
                element:<div>Index</div>
            },
            {
                path:"profile",
                element:<Profile></Profile>
            },
            {
                path:"*",
                element:<div>404</div>
            }
        ]

    }
]


function RootRoutes() {
    return useRoutes(RootList)
}

export default RootRoutes

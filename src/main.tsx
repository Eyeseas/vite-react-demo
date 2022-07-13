import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import {BrowserRouter} from "react-router-dom";
import RootRoutes from "./routes"


ReactDOM.render(
    <BrowserRouter>
        <RootRoutes/>
    </BrowserRouter>,
    document.getElementById("root")
)
;

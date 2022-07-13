import React from "react";
// import ReactDOM from "react-dom";
import {createRoot} from 'react-dom/client';
import "./index.css";
import {BrowserRouter} from "react-router-dom";
import RootRoutes from "./routes"

const Root = createRoot(document.getElementById('root')!);

Root.render(<BrowserRouter><RootRoutes/></BrowserRouter>)

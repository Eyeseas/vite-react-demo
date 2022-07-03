import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
// import "antd/dist/antd.css"
import App from "./App";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Foo from "./pages/Foo";
import Bar from "./pages/Bar";
import BarItem from "./pages/BarItem";


ReactDOM.render(
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<App></App>}>
                <Route path="foo" element={<Foo></Foo>}></Route>
                <Route path="bar" element={<Bar></Bar>}>
                    <Route
                        index
                        element={
                            <main style={{ padding: "1rem" }}>
                                <p>Select an invoice</p>
                            </main>
                        }
                    />
                    <Route path=":itemId" element={<BarItem></BarItem>}></Route>
                </Route>
                <Route
                    path="*"
                    element={
                        <main style={{ padding: "1rem" }}>
                            <p>There's nothing here!</p>
                        </main>
                    }
                />
            </Route>

        </Routes>
    </BrowserRouter>,
    document.getElementById("root")
);

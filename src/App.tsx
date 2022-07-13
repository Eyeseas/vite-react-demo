import {useState} from 'react'
import logo from './logo.svg'
import React from "react"
import './App.css'
import {Link, Outlet, Route, Routes} from 'react-router-dom'

function App() {

    return (
        <div className="App absolute inset-0">
            <nav>
                <Link to="">To App</Link>
                <Link to="profile">To profile</Link>
            </nav>
            <Outlet></Outlet>
        </div>
    )
}

export default App

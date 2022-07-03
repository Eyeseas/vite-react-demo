import { useState } from 'react'
import logo from './logo.svg'
import React from "react"
import './App.css'
import {  Link, Outlet, Route, Routes } from 'react-router-dom'
function App() {

  return (
    <div className="App">
      App
      <nav>
        <Link to="">To App</Link>
        <Link to="bar">To bar</Link>
        <Link to="foo">To foo</Link>
      </nav>
      <Outlet></Outlet>
    </div>
  )
}

export default App

import React from "react";
import { Routes, Route, Link } from 'react-router-dom'
import Book from '@pages/Book/Book'
import Counter from '@pages/Counter'
function RootRoutes() {
    return (
        <>
            <nav>
                <Link to="/">route to book</Link> |{" "}
                <Link to="counter">router ro counter</Link>
            </nav>
            <Routes>
                <Route path='/' element={<Book />} />
                <Route path="/counter" element={<Counter/>}/>
            </Routes>
        </>
        
    )
}

export default RootRoutes
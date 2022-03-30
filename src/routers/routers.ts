import { Switch, Route } from 'react-router-dom'
import Book from '@pages/Book'

function RootRoutes() {
    return (
        <Switch>
            <Route path= '/' >
                <Book />
            < /Route>
        < /Switch>
    )
}
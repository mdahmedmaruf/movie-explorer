import { createBrowserRouter } from 'react-router'
import App from '../App'
import Root from '../layout/Root'
import ShowView from '../pages/ShowView'

export const router = createBrowserRouter([
    {
        path: '/',
        Component: Root,
        children: [
            { path: '/', index: true, Component: App },
            { path: 'shows', Component: ShowView },
        ],
    },
])

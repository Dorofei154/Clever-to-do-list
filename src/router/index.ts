import {Register} from "../components/Register/Register"
import {Todo} from "../components/CalendarTodo/CalendarTodo"
import {Login} from '../components/Login/Login'
import {ROUTES} from "../constants/constants"
import {Newtodo} from "../components/Newtodo/Newtodo";

const { LOGIN_ROUTE, REGISTER_ROUTE, TODO_ROUTE, NEWTODO_ROUTE } = ROUTES

const routes = [
    {
        path: REGISTER_ROUTE,
        Component: Register
    },
    {
        path: TODO_ROUTE,
        Component: Todo
    },
    {
        path: LOGIN_ROUTE,
        Component: Login
    },
    {
        path: NEWTODO_ROUTE,
        Component: Newtodo
    }
]

export {routes}

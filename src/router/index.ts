import Register from "../components/Register/Register"
import {Todo} from "../components/Inputtodo/Inputtodo";
import {Login} from '../components/Login/Login'
import { LOGIN_ROUTE, REGISTER_ROUTE, TODO_ROUTE } from "../constants/constants"

export const routes = [
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
    }
]

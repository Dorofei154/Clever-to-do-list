import { RegisterContainer } from '../components/Register/Register';
import { CalendarTodoContainer } from '../components/CalendarTodo/CalendarTodo';
import { LoginContainer } from '../components/Login/Login';
import { ROUTES } from '../constants/constants';
import { NewtodoContainer } from '../components/Newtodo/Newtodo';

const { LOGIN_ROUTE, REGISTER_ROUTE, TODO_ROUTE, NEWTODO_ROUTE } = ROUTES;

const routes = [
  {
    path: REGISTER_ROUTE,
    Component: RegisterContainer
  },
  {
    path: TODO_ROUTE,
    Component: CalendarTodoContainer
  },
  {
    path: LOGIN_ROUTE,
    Component: LoginContainer
  },
  {
    path: NEWTODO_ROUTE,
    Component: NewtodoContainer
  }
];

export { routes };

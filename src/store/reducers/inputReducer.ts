import moment from 'moment';
import { combineReducers } from 'redux';
import { ACTIONS } from '../../constants/actions';

const reducerEmail = (state = '', action: any) => {
  switch (action.type) {
    case ACTIONS.SET_EMAIL:
      return action.value;
    default:
      return state;
  }
};

const reducerPassword = (state = '', action: any) => {
  switch (action.type) {
    case ACTIONS.SET_PASSWORD:
      return action.value;
    default:
      return state;
  }
};

const reducerMonth = (state: moment.Moment | number = 0, action: any) => {
  switch (action.type) {
    case ACTIONS.SET_MONTH:
      return action.value;
    default:
      return state;
  }
};
const reducerDate = (state: moment.Moment | number = 0, action: any) => {
  switch (action.type) {
    case ACTIONS.SET_DATE:
      return action.value;
    default:
      return state;
  }
};

const reducerValue = (state = moment(new Date()), action: any) => {
  switch (action.type) {
    case ACTIONS.SET_VALUE:
      return action.value;
    default:
      return state;
  }
};

const reducerTodo = (state = [], action: any) => {
  switch (action.type) {
    case ACTIONS.SET_VALUE:
      return action.value;
    default:
      return state;
  }
};

export const rootReducer = combineReducers({
  password: reducerPassword,
  email: reducerEmail,
  month: reducerMonth,
  date: reducerDate,
  value: reducerValue,
  arrtodo: reducerTodo
});

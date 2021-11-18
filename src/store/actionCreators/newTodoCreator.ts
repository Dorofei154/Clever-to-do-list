import { ACTIONS } from '../../constants/actions';

export const newTodoCreator = (e: any) => {
  return {
    type: ACTIONS.SET_NEW_TODO,
    value: e
  };
};

import { ACTIONS } from '../../constants/actions';

export const сurrentUserCreator = (e: any) => {
  return {
    type: ACTIONS.SET_CURRENT_USER,
    value: e
  };
};

import { ACTIONS } from '../../constants/actions';

export const emailCreator = (e: any) => {
  return {
    type: ACTIONS.SET_EMAIL,
    value: e
  };
};

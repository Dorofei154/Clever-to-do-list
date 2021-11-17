import { ACTIONS } from '../../constants/actions';

export const dateCreator = (e: any) => {
  return {
    type: ACTIONS.SET_DATE,
    value: e
  };
};

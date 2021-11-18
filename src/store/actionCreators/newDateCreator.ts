import { ACTIONS } from '../../constants/actions';

export const newDateCreator = (e: any) => {
  return {
    type: ACTIONS.SET_NEW_DATE,
    value: e
  };
};

import { ACTIONS } from '../../constants/actions';

export const passwordCreator = (e: any) => {
  return {
    type: ACTIONS.SET_PASSWORD,
    value: e
  };
};

import { ACTIONS } from '../../constants/actions';

export const valueCreator = (e: any) => {
  return {
    type: ACTIONS.SET_VALUE,
    value: e
  };
};

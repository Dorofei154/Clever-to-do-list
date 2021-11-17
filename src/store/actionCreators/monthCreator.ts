import { ACTIONS } from '../../constants/actions';

export const monthCreator = (e: any) => {
  return {
    type: ACTIONS.SET_MONTH,
    value: e
  };
};

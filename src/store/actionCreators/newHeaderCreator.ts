import { ACTIONS } from '../../constants/actions';

export const newHeaderCreator = (e: any) => {
  return {
    type: ACTIONS.SET_NEW_HEADER,
    value: e
  };
};

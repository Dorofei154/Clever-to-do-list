import { ACTIONS } from '../../constants/actions';

export const arrtodoCreator = (e: any) => {
  return {
    type: ACTIONS.SET_ARRTODO,
    value: e
  };
};

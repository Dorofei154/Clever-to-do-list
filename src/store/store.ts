import { createStore } from 'redux';
import { rootReducer } from './reducers/inputReducer';

export const store = createStore(rootReducer);

export default store;

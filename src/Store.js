// Store
import { createStore } from 'redux';
import counterReducer from './Services/reducers/counterReducer';

const store = createStore(counterReducer);

export default store;
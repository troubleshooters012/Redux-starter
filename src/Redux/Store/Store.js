import {createStore} from 'redux';
 
import Reducer from '../Reducers/Reducers';

const Store = createStore(Reducer);

export default Store;

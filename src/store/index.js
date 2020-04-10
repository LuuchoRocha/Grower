import {createStore, combineReducers} from 'redux';
import {persistStore, persistReducer} from 'redux-persist';
import AsyncStorage from '@react-native-community/async-storage';
import environmentsReducer from './environments/reducers';

const persistSettings = {key: 'root', storage: AsyncStorage};
const rootReducer = combineReducers({environmentsReducer});
const persistedReducer = persistReducer(persistSettings, rootReducer);
const store = createStore(persistedReducer);
const persistor = persistStore(store);

export {store, persistor};

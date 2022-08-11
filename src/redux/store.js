import { createStore, combineReducers, applyMiddleware } from 'redux';
import loginreducer from './loginreducer/loginreducer';
import Signupreducer from './signupreducer/signupreducer';
import Publicblogreducer from './publicblogreducer/publicblogreducer';
import ownblogreducer from './ownblogs/ownblogreducer';
import thunk from 'redux-thunk';
import adminreducer from './adminreducer/adminreducer';
import toastreducer from './toast/toastreducer';

const rootreducer = combineReducers({ loginreducer, Signupreducer, Publicblogreducer, ownblogreducer, adminreducer, toastreducer })

// const customthunk = (store) => (next) => (action) => {

//     console.log(store, action)

//     if (typeof action == "function") {
//         return action(store.dispatch)
//     }

//     return next(action)



// }


const store = createStore(rootreducer, applyMiddleware(thunk));
export default store



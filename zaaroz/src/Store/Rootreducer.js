import {combineReducers} from 'redux';

import Cat_Reducer from './Catroutdata';

import ProfileEdit_Reducer from './Profileeditdata';

const Rootreducer=combineReducers({

    Catpage_routing:Cat_Reducer,
    
    Profile_routing:ProfileEdit_Reducer

});

export default Rootreducer;
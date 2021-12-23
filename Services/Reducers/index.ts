import changeNumber from './reduxData'
// import changeString from './stringCheck'
import GlobalData from './globalData';

import { combineReducers } from 'redux'

const rootReducer = combineReducers ({
    changeNumber,
    // changeString
    GlobalData
});

export default rootReducer
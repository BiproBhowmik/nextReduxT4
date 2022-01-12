import changeNumber from './reduxData'
// import changeString from './stringCheck'
import GlobalData from './globalData';

import { combineReducers } from 'redux'
import TestData from './testReducer';

const rootReducer = combineReducers ({
    changeNumber,
    // changeString
    GlobalData,

    testD: TestData
});

export default rootReducer
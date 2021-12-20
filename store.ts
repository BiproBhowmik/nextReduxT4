import { createStore } from "redux";

import rootReducer from "./Services/Reducers/index";

const store = createStore(rootReducer);

export default store
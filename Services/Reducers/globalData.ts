
// const initialState: any = [];

const initialState: any = {
    fetchedSpendings: []
}

const GlobalData = (state = initialState, action: { type: string; param: any })=>{
    if (action.type === "userData") {
        return state = action.param;
    }
    else if (action.type === "userDataAdd") {
        // console.log(action.param);
        
        // return state.shift(action.param);
        return {...state, fetchedSpendings: state.fetchedSpendings.shift(action.param)}

    }
    else{
        return initialState.fetchedSpendings
    }
}

export default GlobalData
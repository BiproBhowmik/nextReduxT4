const initialState:any = {
    array: [],
 }

const changeNumber = (state = initialState, action: { type: string; param: any; })=>{
    
    if (action.type === "reduxDatahange") {
        return { 
            ...state,
            array: [...action.param, ...state.array],
        };
    }
    if (action.type === "reduxDatDelete") {
        state.array.splice(action.param, 1)
        return { 
            ...state,
            array: state.array
        };
        
    }
    if (action.type === "reduxDatUpdate") {
        console.log(action.param.index);

        state.array.splice(action.param.index, true, action.param.data) //splice(index, replece true(1)/false(0), data)

        return { 
            ...state,
            array: state.array
        }
    }
    else{
        return state
    }
}

export default changeNumber
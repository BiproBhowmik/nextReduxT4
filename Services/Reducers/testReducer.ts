
// const initialState: any = [];

const initialState: any = {
    data: 500
}

const TestData = (state = initialState, action: { type: string; param: any })=>{
    if (action.type === "test") {
        return state.data+1
    }
    else{
        return initialState.data
    }
}

export default TestData
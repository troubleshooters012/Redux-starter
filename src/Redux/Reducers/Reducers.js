const initialState = {
    data: [{item: 'bought veggie'}]
};
const Reducer = (state = initialState, action) => {
    switch(action.type) {
        case 'ADD':
            state.data.push(action.payload)
            return state;

        default:
            return state;
    }
}

export default Reducer;
const initialState = {
    data: []
}
// fetch('url')
// initialState.data = localStorage.getItem('pokeData') || [];

const initialReducer = (state=initialState, action) => {
    switch(action.type) {
        case 'ADD':
            console.log(state);
            state.data.push(action.item)
            return state
        break;
        case 'Delete':
            state.data.pop(action.item)
        break;
        default:
            state.data.push({item: 'I bought veggie'})
            return state;
    }
}

export default initialReducer;


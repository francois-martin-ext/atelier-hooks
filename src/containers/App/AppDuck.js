import Duck from "extensible-duck";

const initialState = {
    searchText: ''
};

export const appDuck = new Duck({
    namespace: 'app',
    store: 'app',
    types: Object.values({
        CHANGE_SEARCH_TEXT: 'CHANGE_SEARCH_TEXT',
    }),
    initialState,
    reducer: (state, action, { types }) => {
        switch (action.type) {
            case types.CHANGE_SEARCH_TEXT: return changeSearchText(state, action);
            default: return state
        }
    },
    creators: ({ types }) => ({
        changeSearchText: (payload) => ({ type: types.CHANGE_SEARCH_TEXT, payload }),
    })
});


const changeSearchText = (state, action) => {
    return Object.assign({}, state, {
        ...state,
        searchText: action.payload
    });
};

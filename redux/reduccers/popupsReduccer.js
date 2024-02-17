// reducers/postReducer.js
const initialState = {
    popupdata: {},
    isOpen: false,
    popUpName:"",
    loading: false,
};

const popupsReduccer = (state = initialState, action) => {
    switch (action.type) {
        case 'Add_Review':
            return { ...state, isOpen: action.isOpen ,popUpName:action.type };
        default:
            return state;
    }
};

export default popupsReduccer;

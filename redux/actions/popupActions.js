
export const showPopup = (popupdata,popName , isOpen) => ({
    type: popName,
    payload: popupdata,
    isOpen:isOpen
});

export const handlePopup = (data ,popName , isOpen) => {
    console.log(data);
    return (dispatch) => {
        dispatch(showPopup(data,popName , isOpen));
    };
};



// actions/postActions.js
import axios from 'axios';
import { Failed, Pending, Success } from './action.types';
import { toast } from "react-toastify"
import { baseUrl } from '../../utils/urls';

export const fetchRequest = () => ({
    type: Pending,
});

export const fetchSuccess = (posts) => ({
    type: "CategoryBySectionSuccess",
    payload: posts,
});

export const fetchFailure = (error) => ({
    type: Failed,
    payload: error,
});


export const getCategoryBySection = (endpoint) => {
    return (dispatch) => {
        dispatch(fetchRequest());
        axios
            .get(`${baseUrl}${endpoint}`)
            .then((response) => {

                console.log(response , "<<<<<<<<<<response");
                if(response?.data.responseCode == 200){

                    dispatch(fetchSuccess(response?.data.result));
                }
            })
            .catch((error) => {
                dispatch(fetchFailure(error));
            });
    };
};

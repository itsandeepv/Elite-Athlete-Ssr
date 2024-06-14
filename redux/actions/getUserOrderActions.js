// actions/postActions.js
import axios from 'axios';
import { Failed, Pending, Success } from './action.types';
import { toast } from "react-toastify"
import { baseUrl } from '../../utils/urls';

export const fetchRequest = () => ({
    type: Pending,
});

export const fetchSuccess = (posts) => ({
    type: "UserOrderSuccess",
    payload: posts,
});

export const fetchFailure = (error) => ({
    type: Failed,
    payload: error,
});


export const getUserOrder = (endpoint,token) => {
    return (dispatch) => {
        const config = {
            method: 'get',
            url: `${baseUrl}${endpoint}`,
            headers: {
                'Authorization': `Bearer ${token}`,
            },
        }
        dispatch(fetchRequest());
        axios.request(config)
            .then((response) => {
                if(response?.data.responseCode == 200){
                    dispatch(fetchSuccess(response?.data.result));
                }
                // console.log(response?.data.result , "<<<<<<<<<<userOrderData");
            })
            .catch((error) => {
                dispatch(fetchFailure(error));
            });
    };
};

import axios from 'axios';
import {
    GET_ALL_PROFILES,
    ADD_PROFILE
} from '../Constants';


/**
 *    Here are some sample asynchronous action creators that you'll likely want to use
 *    to handle basic CRUD routes from your REST API / DB
 *    
 *    Not all are necessary and they are not fully implemented as well. 
 *    Treat this as guidance.
 */

// ####################### teachers #######################

export const getAllProfiles = () => async dispatch => {
    let response = await axios.get(`http://localhost:5000/api/profiles`)
    dispatch({ type: GET_ALL_PROFILES, profiles: response.data})
}

export const addProfile = (profile) => async dispatch => {
    let response = await axios.post(`http://localhost:5000/api/profiles`, profile)
}


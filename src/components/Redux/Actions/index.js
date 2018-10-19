import axios from 'axios';
import {
    GET_ALL_PROFILES,
    ADD_PROFILE,
    CONFIRM_LOGIN,
    CHANGE_ALUMNI_ID,
    GET_SPECIFIC_ALUMNI,
    GET_GRAD_DATES,
    GET_PROFILE_DATA,
    GET_ALL_POSTS
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
    dispatch({ type: ADD_PROFILE, profiles: response.data})
}

export const confirmLogin = (confirmation) => async dispatch => {
    //Will get us the ID of the user that is trying to log in while also checking to make sure it is a valid login
    let response = await axios.get(`http://localhost:5000/api/profiles`, confirmation)
    //Getting us all the data for the current user that is loggin in
    let response2 = await axios.get(`http://localhost:5000/api/profiles/` + response.data.profile_id)
    dispatch({ type: CONFIRM_LOGIN, userProfile: response2.data})
}

export const conditionalAlumniProfile = (id) => async dispatch => {
    dispatch({ type: CHANGE_ALUMNI_ID, alumniId: id})
}

export const getSpecificAlumni = (id) => async dispatch => {
    let response = await axios.get(`http://localhost:5000/api/profiles/` + id)
    dispatch({ type: GET_SPECIFIC_ALUMNI, alumniData: response.data})
}

export const getGradDates = () => async dispatch => {
    let response = await axios.get(`http://localhost:5000/api/graddate`)
    console.log(response.data);
    dispatch({ type: GET_GRAD_DATES, gradDate: response.data})
}
export const getProfileData = (id) => async dispatch => {
    let response = await axios.get(`http://localhost:5000/api/profiles/` + id)
    dispatch({ type: GET_PROFILE_DATA, profileData: response.data})
}

export const getAllPosts = () => async dispatch => {
    let response = await axios.get(`http://localhost:5000/api/posts`)
    dispatch({ type: GET_ALL_POSTS, posts: response.data})
}


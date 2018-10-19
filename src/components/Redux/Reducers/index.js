// These are merely suggested actions & initial state structure
import {
  GET_ALL_PROFILES,
  CHANGE_ALUMNI_ID,
  GET_SPECIFIC_ALUMNI,
  GET_GRAD_DATES,
  GET_PROFILE_DATA,
  GET_ALL_POSTS
  } from '../Constants';
  
    
    const initialState = {
      profiles: [],
      profileId: 3,
      profileData: '',
      alumniId: 1,
      alumniData: '',
      gradDates: '',
      posts: ''
    }
    // you may also choose to use 'localStorage' (better/standard industry practice) 
    // to manage token info instead of in your Redux store 
    // ref: https://developer.mozilla.org/en-US/docs/Web/API/Storage/LocalStorage
    
    const rootReducer = (state = initialState, action) => {
      switch (action.type) {
        case GET_ALL_PROFILES:
        return ({...state, profiles: action.profiles})
        case CHANGE_ALUMNI_ID: 
        return ({...state, alumniId: action.alumniId})
        case GET_SPECIFIC_ALUMNI: 
        return ({...state, alumniData: action.alumniData})
        case GET_GRAD_DATES:
        return ({...state, gradDates: action.gradDate})
        case GET_PROFILE_DATA:
        return ({...state, profileData: action.profileData})
        case GET_ALL_POSTS: 
        return ({...state, posts: action.posts})
        default:
        return state;
      }
    }
  
  export default rootReducer;
// These are merely suggested actions & initial state structure
import {
  GET_ALL_PROFILES,
  CHANGE_ALUMNI_ID
  } from '../Constants';
  
    
    const initialState = {
      profiles: [],
      alumniId: 1
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
        default:
        return state;
      }
    }
  
  export default rootReducer;
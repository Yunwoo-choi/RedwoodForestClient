// These are merely suggested actions & initial state structure
import {
  GET_ALL_PROFILES
  } from '../Constants';
  
    
    const initialState = {
      profiles: []
    }
    // you may also choose to use 'localStorage' (better/standard industry practice) 
    // to manage token info instead of in your Redux store 
    // ref: https://developer.mozilla.org/en-US/docs/Web/API/Storage/LocalStorage
    
    const rootReducer = (state = initialState, action) => {
      switch (action.type) {
        case GET_ALL_PROFILES:
        return ({...state, profiles: action.profiles})
        default:
        return state;
      }
    }
  
  export default rootReducer;
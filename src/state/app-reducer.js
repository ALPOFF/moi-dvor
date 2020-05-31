const SET_USER_PROFILE_INT = 'app/SET_USER_PROFILE_INT';
const SET_USER_PROFILE_BY_ID = 'app/SET_USER_PROFILE_BY_ID';

let initialState = {
    userProfileInt: [],
    userProfile: [],
    xxx: 5
};

const appReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER_PROFILE_INT:
            return {
                ...state,
                userProfileInt: action.userProfileInt
            };
        case SET_USER_PROFILE_BY_ID:
            return {
                ...state,
                userProfile: action.userProfile
            };
        default:
            return state;
    }
};

export const setUserProfileInt = (userProfileInt) => {
    return {
        type: SET_USER_PROFILE_INT,
        userProfileInt
    }
};

export const setUserProfileById = (userProfile) => {
    return {
        type: SET_USER_PROFILE_BY_ID,
        userProfile
    }
};

export default appReducer;

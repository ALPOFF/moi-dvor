const SET_USER_PROFILE_INT = 'app/SET_USER_PROFILE_INT';
const SET_USER_PROFILE_BY_ID = 'app/SET_USER_PROFILE_BY_ID';
const SET_ALL_INTERESTS = 'app/SET_ALL_INTERESTS';
const INT_OUT = 'app/INT_OUT'

let initialState = {
    userProfileInt: [],
    userProfile: [],
    interests: [],
    interestsOut: []
};

function arrayDiffByKey(key, ...arrays) {
    return [].concat(...arrays.map( (arr, i) => {
        const others = arrays.slice(0);
        others.splice(i, 1);
        const unique = [...new Set([].concat(...others))];
        return arr.filter( x =>
            !unique.some(y => x[key] === y[key])
        );
    }));
}

const appReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER_PROFILE_INT:
            return {
                ...state,
                userProfileInt: action.userProfileInt,
                interestsOut:  arrayDiffByKey('value', action.userProfileInt, state.interests)
            };
        case SET_USER_PROFILE_BY_ID:
            return {
                ...state,
                userProfile: action.userProfile
            };
        case SET_ALL_INTERESTS:
            return {
                ...state,
                interests: action.interests
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

export const setAllInterests = (interests) => {
    return {
        type: SET_ALL_INTERESTS,
        interests
    }
};

export const intOut = (interestsOut) => {
    return {
        type: INT_OUT,
        interestsOut
    }
};

export default appReducer;

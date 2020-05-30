const SET_CHOOSED_TARIFF = 'app/SET_CHOOSED_TARIFF';

let initialState = {
    interesArr: [
        {interesTitle: 'ыаыв', interesId: 0},
        {interesTitle: 'dsfsfsd', interesId: 1}
    ]
};

const appReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_CHOOSED_TARIFF:
            return {
                ...state,
                interesArr: action.interesArr
            };
        default:
            return state;
    }
};

// export const ChoosedTariffClick = (tariff) => {
//     return {
//         type: SET_CHOOSED_TARIFF,
//         tariff
//     }
// };

export default appReducer;

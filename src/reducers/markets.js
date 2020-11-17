import { FETCH_MARKETS_SUCCESS, FETCH_MARKETS_FAILD } from '../actions/types';


const initialState = [];

export default function (state = initialState, action) {
    const { type, payload } = action;

    switch (type) {
        case FETCH_MARKETS_SUCCESS:
            return {
                ...state,
                ...payload
            }
        case FETCH_MARKETS_FAILD:
            return []

        default:
            return state;
    }

}
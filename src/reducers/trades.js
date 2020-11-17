import { FETCH_TRADES_SUCCESS, FETCH_TRADES_FAILD } from '../actions/types';


const initialState = [];

export default function (state = initialState, action) {
    const { type, payload } = action;

    switch (type) {
        case FETCH_TRADES_SUCCESS:
            return {
                ...state,
                ...payload
            }
        case FETCH_TRADES_FAILD:
            return []

        default:
            return state;
    }

}
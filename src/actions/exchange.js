import axios from 'axios';
import { FETCH_MARKETS_SUCCESS, FETCH_MARKETS_FAILD, FETCH_TRADES_SUCCESS, FETCH_TRADES_FAILD,  API_URL as api_url,} from './types';
const config = {
    headers: {
      'Content-Type': 'application/json'
    }
  };


export const fetchMarkets =  () => async (dispatch) =>{

    try {
        const res = await axios.get(api_url+'/api/market', null, config);
    
        dispatch({
          type: FETCH_MARKETS_SUCCESS,
          payload: res.data
        });
      } catch (err) {
    
    
        dispatch({
          type: FETCH_MARKETS_FAILD
        });
      }

  }

  export const fetchTrades =  (market) => async (dispatch) =>{

    try {
        const res = await axios.get(api_url+'/api/trade/trades/'+market, null, config);
    
        dispatch({
          type: FETCH_TRADES_SUCCESS,
          payload: res.data
        });
      } catch (err) {
    
    
        dispatch({
          type: FETCH_TRADES_FAILD
        });
      }

  }

import { LOAD_COUNTRY, SELECT_COUNTRY, CANCEL_COUNTRY } from './actionTypes';

const initialState = [];

const baseURL = 'http://api.openweathermap.org/data/2.5/air_pollution/history?lat=508&lon=50&start=1606223802&end=1606482999&appid={API key}';

// action creator
export const selectCountry = (id) => async (dispatch) => {
  try {
    return dispatch({ type: SELECT_COUNTRY, payload: id });
  } catch (err) {
    return err;
  }
};

export const cancelCountry = (id) => async (dispatch) => {
    try {
      return dispatch({ type: CANCEL_COUNTRY, payload: id });
    } catch (err) {
      return err;
    }
  };

// reducer function
const countryReducer = (state = initialState, action) => {
    switch (action.type) {
        case LOAD_COUNTRY:
            return payload.action
        case SELECT_COUNTRY:
            return payload.action
        case CANCEL_COUNTRY:
            return payload.action  
        default:
            return state;
    }
}

export const getCountryFromAPI = () => (dispatch) => fetch(baseURL)
  .then((res) => res.json()).then((data) => {
    const countries = data.map((country) => ({
      id: country.id,
      description: country.description,
    }));
    dispatch({ type: LOAD_COUNTRY, payLoad: countries });
  }).catch(() => { });

export default countryReducer;
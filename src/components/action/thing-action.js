import superagent from 'superagent';
const API_url = 'https://internets-of-thing-api.herokuapp.com/api/v1/things';

// Actions
const CREATE_THING = 'CREATE_THING';
const FETCH_THING = 'FETCH_THING';
const UPDATE_THING = 'UPDATE_THING';
const DELETE_THING = 'DELETE_THING';


// API actions
export function createThing(thing) {
  return dispatch => {
    superagent.post(API_url, thing)
      .then(response => {
        dispatch ({
          type: CREATE_THING,
          payload: response.body,
        });
      });
  };
}

export function fetchThings() {
  return dispatch => {
    superagent.get(API_url)
      .then(response => {
        dispatch({
          type: FETCH_THING,
          payload: response.body,
        });
      });
  };
}


export function updateThing(thing) {
  return dispatch => {
    superagent.put(`${API_url}/${thing.id}`)
      .then(response => {
        return dispatch({
          type: UPDATE_THING,
          payload: response.body,
        });
      });
  };
}

export function deleteThing(thing) {
  return dispatch => {
    superagent.delete(`${API_url}/${thing.id}`)
      .then(response => {
        return dispatch({
          type: DELETE_THING,
          payload: response.body,
        });
      });
  };
}
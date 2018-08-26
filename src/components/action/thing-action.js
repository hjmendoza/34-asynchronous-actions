import superagent from 'superagent';

// Actions
const CREATE_THING = 'CREATE_THING';
const FETCH_THING = 'FETCH_THING';
const UPDATE_THING = 'UPDATE_THING';
const DELETE_THING = 'DELETE_THING';

// Action Creators
export function createThing(thing) {
  return dispatch => {
    const API_url = 'https://internets-of-thing-api.herokuapp.com/api/v1/things';
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
    superagent.get('https://internets-of-thing-api.herokuapp.com/api/v1/things')
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
    superagent.put(`https://internets-of-thing-api.herokuapp.com/api/v1/things/${thing.id}`)
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
    superagent.delete(`https://internets-of-thing-api.herokuapp.com/api/v1/things/${thing.id}`)
      .then(response => {
        return dispatch({
          type: DELETE_THING,
          payload: response.body,
        });
      });
  };
}
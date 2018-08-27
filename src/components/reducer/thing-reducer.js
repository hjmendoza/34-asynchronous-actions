const defaultState = [];

export default function reducer(state = defaultState, action) {

  const { type, payload } = action;
  
  switch (type) {
    
  case 'CREATE_THING': return [...state, payload];

  case 'FETCH_THING': return [...state, payload];

  case 'UPDATE_THING': return state.map(thing => thing.id === payload.id ? payload : thing);

  case 'DESTROY_THING': return state.filter(thing => thing.id !== payload.id);
  
  default: return state;
  }
}

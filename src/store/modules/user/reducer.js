import produce from 'immer';

const INITIAL_STATE = {
  name: null,
};

export default function user(state = INITIAL_STATE, action) {
  switch (action.type) {
    case '@auth/LOGIN_SUCCESS':
      return produce(state, draft => {
        draft.name = action.payload.name;
      });
    default:
      return state;
  }
}

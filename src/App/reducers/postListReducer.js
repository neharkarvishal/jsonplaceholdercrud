import { ActionType } from 'redux-promise-middleware';
import ACTION_TYPE from '../action/actionType';

const { Pending, Fulfilled, Rejected } = ActionType;
const defaultState = {
  isLoading: true,
  postList: [],
};

export default function postListReducer(state = defaultState, action) {
  switch (action.type) {
    case `${ACTION_TYPE.POST_LIST}_${Pending}`:
      return {
        ...state,
        isLoading: true,
      };

    case `${ACTION_TYPE.POST_LIST}_${Fulfilled}`:
      return {
        ...state,
        isLoading: false,
        postList: action.payload.data,
      };

    case `${ACTION_TYPE.POST_LIST}_${Rejected}`:
    default:
      return state;
  }
}

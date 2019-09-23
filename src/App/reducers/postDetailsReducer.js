import { ActionType } from 'redux-promise-middleware';
import ACTION_TYPE from '../action/actionType';

const { Pending, Fulfilled, Rejected } = ActionType;
const defaultPostDetailsState = {
  isLoading: true,
  postDetails: {},
};

export default function postDetailsReducer(state = defaultPostDetailsState, action) {
  switch (action.type) {
    case `${ACTION_TYPE.POST_DETAIL}_${Pending}`:
      return {
        ...state,
        isLoading: true,
      };

    case `${ACTION_TYPE.POST_DETAIL}_${Fulfilled}`:
      return {
        ...state,
        isLoading: false,
        postDetails: action.payload.data,
      };

    case `${ACTION_TYPE.POST_DETAIL}_${Rejected}`:
    default:
      return state;
  }
}

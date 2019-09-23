import { RequestHandler } from '../services/RequestHandler';
import ActionType from './actionType';

/* fetching all post */
export function fetchPosts() {
  return dispatch => {
    dispatch({
      type: ActionType.POST_LIST,
      payload: RequestHandler.fetchPosts(),
    });
  };
}

import { RequestHandler } from '../services/RequestHandler';
import ActionType from './actionType';

/* fetching single post by id */
export function fetchPost(id) {
  return dispatch => {
    dispatch({
      type: ActionType.POST_DETAIL,
      payload: RequestHandler.fetchPost(id),
    });
  };
}

import * as fetchPostAction from './fetchPostAction';
import * as fetchPostsAction from './fetchPostsAction';

const actions = {
  ...fetchPostAction,
  ...fetchPostsAction,
};

export default actions;

import { combineReducers } from 'redux';
import postListReducer from './postListReducer';
import postDetailsReducer from './postDetailsReducer';

const AppReducer = combineReducers({
  postListStoreState: postListReducer,
  postDetailsStoreState: postDetailsReducer,
});

export default AppReducer;

import { combinedReducers } from "redux";
import commentReducers from "reducers/comments";

export default combinedReducers({
  comments: commentReducer
});

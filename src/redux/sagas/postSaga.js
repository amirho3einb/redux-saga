import axios from "axios";
import { call, put, takeEvery } from "redux-saga/effects";
import { fetchPostsFailure, fetchPostsSuccess } from "../posts/postAction";
import { FETCH_POSTS_REQUEST } from "../posts/postTypes";

function* fetchPost(action) {
  try {
    const apiEndPoint = `https://jsonplaceholder.typicode.com/posts/${action.payload}`;
    const response = yield call(() => axios.get(apiEndPoint));
    yield put(fetchPostsSuccess(response.data));
  } catch (error) {
    yield put(fetchPostsFailure(error.message));
  }
}

export function* watchFetchPost() {
  yield takeEvery(FETCH_POSTS_REQUEST, fetchPost);
}

import { call, put, takeLatest } from "redux-saga/effects";
import { TOKEN } from "../../../util/settings/config";
import { usersService } from "../../../services/UsersService";
import { history } from "../../../util/history";

function* LoginSaga(action) {
  try {
    const { data, status } = yield call(() => usersService.login(action.data));

    if (status === 200) {
      localStorage.setItem(TOKEN, data.accessToken);
      history.push("/chat-box");
    }
  } catch (error) {
    console.log(error);
  }
}

export function* LoginTracker() {
  yield takeLatest("LOGIN_API", LoginSaga);
}

function* RegisterSaga(action) {
  try {
    const { data } = yield call(() => usersService.register(action.data));

    localStorage.setItem(TOKEN, data.accessToken);
    history.push("/chat-box");
  } catch (error) {
    console.log(error);
  }
}

export function* RegisterTracker() {
  yield takeLatest("REGISTER_API", RegisterSaga);
}

export function* GetUsersSaga() {
  try {
    const { data } = yield call(() => usersService.getUser());
    yield put({
      type: "GET_USERS",
      data,
    });
  } catch (error) {
    console.log(error);
  }
}

export function* GetUsersTracker() {
  yield takeLatest("GET_USERS_API", GetUsersSaga);
}

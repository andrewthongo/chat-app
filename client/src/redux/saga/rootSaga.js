import { all } from "redux-saga/effects";
import * as Project from "./Project/UserSaga";

export function* rootSaga() {
  yield all([Project.LoginTracker(), Project.RegisterTracker()]);
}

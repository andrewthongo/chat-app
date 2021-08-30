import { call, put, takeLatest } from "redux-saga/effects";
import { messagesService } from "../../../services/MessagesService";
import {
  GET_MESSAGES,
  GET_MESSAGES_API,
  SEND_MESSAGES_API,
} from "../../constant/ProjectConstant";

function* GetMessagesSaga(action) {
  try {
    const { data } = yield call(() =>
      messagesService.getMessages(action.data._id)
    );
    yield put({
      type: GET_MESSAGES,
      data,
    });
  } catch (error) {
    console.log(error);
  }
}

export function* GetMessagesTracker() {
  yield takeLatest(GET_MESSAGES_API, GetMessagesSaga);
}

function* SendMessagesSaga(action) {
  try {
    yield call(() => messagesService.sendMessages(action.data));
  } catch (error) {
    console.log(error);
  }
}

export function* SendMessagesTracker() {
  yield takeLatest(SEND_MESSAGES_API, SendMessagesSaga);
}

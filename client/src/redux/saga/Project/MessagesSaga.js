import { call, put, takeLatest } from "redux-saga/effects";
import { messagesService } from "../../../services/MessagesService";

function* GetMessagesSaga(action) {
  console.log(
    "🚀 ~ file: MessagesSaga.js ~ line 5 ~ function*GetMessagesSaga ~ action",
    action.data._id
  );
  try {
    const { data } = yield call(() =>
      messagesService.getMessages(action.data._id)
    );
    yield put({
      type: "GET_MESSAGES",
      data,
    });
  } catch (error) {
    console.log(error);
  }
}

export function* GetMessagesTracker() {
  yield takeLatest("GET_MESSAGES_API", GetMessagesSaga);
}

function* SendMessagesSaga(action) {
  try {
    const { data } = yield call(() =>
      messagesService.sendMessages(action.data)
    );

    console.log(
      "🚀 ~ file: MessagesSaga.js ~ line 29 ~ function*SendMessagesSaga ~ data",
      data
    );
  } catch (error) {
    console.log(error);
  }
}

export function* SendMessagesTracker() {
  yield takeLatest("SEND_MESSAGES_API", SendMessagesSaga);
}

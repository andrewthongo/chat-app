import { call, put, takeLatest } from "redux-saga/effects";
import { conversationService } from "../../../services/ConversationService";

function* GetConversationSaga(action) {
  try {
    const { data } = yield call(() =>
      conversationService.getConversation(action.data._id)
    );
    yield put({
      type: "GET_CONVERSATION",
      data,
    });
  } catch (error) {
    console.log(error);
  }
}

export function* GetConversationTracker() {
  yield takeLatest("GET_CONVERSATION_API", GetConversationSaga);
}

function* AddConversationSaga(action) {
  try {
    yield call(() => conversationService.addConversation(action.data));
  } catch (error) {
    console.log(error);
  }
}

export function* AddConversationTracker() {
  yield takeLatest("ADD_CONVERSATION_API", AddConversationSaga);
}

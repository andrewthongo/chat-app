import { all } from "redux-saga/effects";
import * as Users from "./Project/UserSaga";
import * as Conversation from "./Project/ConversationSaga";
import * as Messages from "./Project/MessagesSaga";

export function* rootSaga() {
  yield all([
    Users.LoginTracker(),
    Users.RegisterTracker(),
    Users.GetUsersSaga(),
    Conversation.GetConversationTracker(),
    Conversation.AddConversationTracker(),
    Messages.GetMessagesTracker(),
    Messages.SendMessagesTracker(),
  ]);
}

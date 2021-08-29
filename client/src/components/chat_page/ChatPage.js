import React, { useEffect, useRef, useState } from "react";
import ChatBox from "./chat-box/ChatBox";
import PeopleList from "./people_list/PeopleList";
import Conversation from "./conversations/Conversations";
import { useDispatch, useSelector } from "react-redux";
import { io } from "socket.io-client";

function ChatPage() {
  const dispatch = useDispatch();
  const { peopleList } = useSelector((state) => state.UsersReducer);
  const { ownerInfo } = useSelector((state) => state.UsersReducer);
  const { conversation } = useSelector((state) => state.ConversationReducer);
  const { messages } = useSelector((state) => state.MessagesReducer);
  const { conversationId } = useSelector((state) => state.ConversationReducer);
  const [currentFriend, setCurrentFriend] = useState();
  const socket = useRef();

  console.log(
    "🚀 ~ file: ChatPage.js ~ line 23 ~ ChatPage ~ conversation",
    conversation
  );
  console.log(
    "🚀 ~ file: ChatPage.js ~ line 19 ~ ChatPage ~ ownerInfo",
    ownerInfo
  );

  useEffect(() => {
    socket.current = io("http://localhost:7000");
  }, []);
  useEffect(() => {
    dispatch({
      type: "GET_USERS_API",
    });
    dispatch({
      type: "GET_CONVERSATION_API",
      data: ownerInfo,
    });
  }, [dispatch, ownerInfo]);

  useEffect(() => {
    socket.current.emit("addUser", ownerInfo._id);
    socket.current.on("getUsers", (users) => {
      console.log(
        "🚀 ~ file: ChatPage.js ~ line 38 ~ socket.current.on ~ users",
        users
      );
    });
  }, [ownerInfo]);

  return (
    <div className="container-full w-screen min-h-screen bg-gradient-to-br from-red-500 to-purple-500">
      <div className="relative w-screen">
        <div className="absolute top-20 left-80 w-80 h-80 bg-purple-300 rounded-full mix-blend-multiply animate-blob filter blur-xl"></div>
        <div className="absolute top-20 left-40 w-80 h-80 bg-yellow-300 rounded-full mix-blend-multiply animate-blob filter blur-xl animation-delay-2000"></div>
        <div className="absolute top-40 left-20 w-80 h-80 bg-pink-300 rounded-full mix-blend-multiply animate-blob filter blur-xl animation-delay-4000"></div>
        <div className="absolute bottom-20 right-80 w-80 h-80 bg-red-300 rounded-full mix-blend-multiply animate-blob filter blur-xl"></div>
        <div className="absolute bottom-20 right-40 w-80 h-80 bg-green-300 rounded-full mix-blend-multiply animate-blob filter blur-xl animation-delay-2000"></div>
        <div className="absolute bottom-40 right-20 w-80 h-80 bg-blue-300 rounded-full mix-blend-multiply animate-blob filter blur-xl animation-delay-4000"></div>
        <div className="relative grid grid-cols-12 min-h-screen p-5 gap-4">
          <div className="col-span-3 bg-white backdrop-filter backdrop-blur-lg w-full bg-opacity-20 h-auto rounded-md shadow-2xl">
            <h1 className="pt-4 pl-4 text-4xl text-white">People</h1>

            <PeopleList
              ownerInfo={ownerInfo}
              peopleList={peopleList}
              conversation={conversation}
            />
          </div>
          <div className="col-span-3 bg-white backdrop-filter backdrop-blur-lg w-full bg-opacity-20 h-auto rounded-md shadow-2xl">
            <h1 className="pt-4 pl-4 text-4xl text-white">Conversation</h1>
            <div className="overflow-y-auto" style={{ maxHeight: "77.5vh" }}>
              {conversation.map((c, index) => (
                <div
                  key={index}
                  onClick={() => {
                    dispatch({
                      type: "SET_CONVERSATION_ID",
                      data: c,
                    });
                    dispatch({
                      type: "GET_MESSAGES_API",
                      data: c,
                    });
                    setCurrentFriend(c);
                  }}
                >
                  <Conversation
                    conversation={c}
                    owner={ownerInfo}
                    peopleList={peopleList}
                  />
                </div>
              ))}
            </div>
          </div>
          <div className="col-span-6 bg-white backdrop-filter backdrop-blur-lg w-full bg-opacity-20 h-auto rounded-md shadow-2xl">
            {conversationId === null ? (
              <div className="flex justify-center pl-10 w-2/3 h-full text-4xl text-white">
                <div className="flex items-center justify-center">
                  <p>Open a conversation to start chatting</p>
                </div>
              </div>
            ) : (
              <ChatBox
                socket={socket}
                messages={messages}
                ownerInfo={ownerInfo}
                conversation={conversationId}
                currentFriend={currentFriend}
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ChatPage;

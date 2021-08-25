import React, { useEffect } from "react";
import ChatBox from "./chat-box/ChatBox";
import PeopleList from "./people_list/PeopleList";
import RecentMessages from "./recent_messages/RecentMessages";
import { useDispatch, useSelector } from "react-redux";

function ChatPage() {
  const dispatch = useDispatch();
  const { peopleList } = useSelector((state) => state.UsersReducer);
  useEffect(() => {
    dispatch({
      type: "GET_USERS_API",
    });
  }, [dispatch]);
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
            <PeopleList />
          </div>
          <div className="col-span-3 bg-white backdrop-filter backdrop-blur-lg w-full bg-opacity-20 h-auto rounded-md shadow-2xl">
            <RecentMessages />
          </div>
          <div className="col-span-6 bg-white backdrop-filter backdrop-blur-lg w-full bg-opacity-20 h-auto rounded-md shadow-2xl">
            <ChatBox />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ChatPage;

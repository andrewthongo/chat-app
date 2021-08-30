import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useFormik } from "formik";
import * as Yup from "yup";
import {
  getMessagesAction,
  sendMessagesAction,
} from "../../../redux/actions/MessagesAction";

function ChatBox({ messages, ownerInfo, conversation, currentFriend, socket }) {
  const dispatch = useDispatch();
  const [messagesState, setMessagesState] = useState();
  const [newMessages, setNewMessages] = useState();

  const { conversationInfo } = useSelector(
    (state) => state.ConversationReducer
  );
  const scrollRef = useRef();
  const receiverId = conversation.members.find(
    (member) => member !== ownerInfo._id
  );
  const formik = useFormik({
    initialValues: {
      conversationId: conversation?._id,
      sender: ownerInfo._id,
      text: "",
    },
    validationSchema: Yup.object({
      text: Yup.string().required(),
    }),
    onSubmit: (values) => {
      dispatch(sendMessagesAction(values));
      socket.current.emit("sendMessage", {
        sender: values.sender,
        receiverId,
        text: values.text,
      });
      setTimeout(() => {
        dispatch(getMessagesAction(currentFriend));
        values.text = "";
      }, 0);
    },
  });

  useEffect(() => {
    socket.current.on("getMessage", ({ sender, text }) => {
      setNewMessages({
        sender,
        text,
      });
    });
  }, [socket]);

  useEffect(() => {
    setMessagesState(messages);
  }, [messages]);

  useEffect(() => {
    scrollRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messagesState]);

  useEffect(() => {
    newMessages &&
      conversation?.members.includes(newMessages.sender) &&
      setMessagesState((prev) => [...prev, newMessages]);
  }, [newMessages, conversation]);

  const renderMessage = () => {
    return messagesState?.map((message, index) => {
      return (
        <div key={index} ref={scrollRef}>
          {message.sender === ownerInfo._id ? (
            <div className="flex justify-end gap-x-2 items-center py-2 pr-6">
              <div className="text-xs">
                <div className="flex items-center gap-x-1 bg-white rounded-xl backdrop-filter backdrop-blur-xl shadow-md bg-opacity-50">
                  <p className="max-w-xs break-words p-2">{message.text}</p>
                </div>
              </div>
            </div>
          ) : (
            <div className="flex gap-x-2 items-center p-2">
              <img
                className="avatar h-10 w-10 rounded-full border-4 border-opacity-40"
                src="https://source.unsplash.com/user/erondu"
                alt="1"
              ></img>
              <div className="text-xs">
                <h3 className="font-semibold">{conversationInfo?.name}</h3>
                <div className="flex items-center gap-x-1 bg-indigo-500 rounded-xl backdrop-filter backdrop-blur-xl shadow-md bg-opacity-50">
                  <p className="max-w-xs break-words p-2">{message.text}</p>
                </div>
              </div>
            </div>
          )}
        </div>
      );
    });
  };
  return (
    <div className="grid grid-cols-1 place-content-end h-full p-2">
      <div className="overflow-y-scroll" style={{ maxHeight: "77.5vh" }}>
        {renderMessage()}
      </div>
      <form onSubmit={formik.handleSubmit}>
        <div className="flex items-center pl-2 py-4">
          <div className="w-10/12">
            <input
              name="text"
              onChange={formik.handleChange}
              className="w-full px-3 py-2 border bg-white rounded-xl backdrop-filter backdrop-blur-xl shadow-md bg-opacity-20 outline-none"
              type="text"
              placeholder="Aa"
              value={formik.values.text}
            />
          </div>
          <div className="w-2/12 flex justify-center">
            <button
              type="submit"
              className="transform motion-safe:hover:scale-110 w-1/2 py-2 bg-white rounded-xl shadow-md outline-none"
            >
              <i className="fas fa-paper-plane"></i>
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default ChatBox;

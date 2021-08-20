import React from "react";

function ChatBox() {
  return (
    <div className="grid grid-cols-1 place-content-end h-full p-2">
      <div>
        <div className="overflow-y-scroll" style={{ maxHeight: "77.5vh" }}>
          <div className="flex gap-x-2 items-center p-2">
            <img
              className="avatar h-10 w-10 rounded-full border-4 border-opacity-40"
              src="https://source.unsplash.com/user/erondu"
              alt="1"
            ></img>
            <div className="card-name-user text-xs">
              <h3 className="font-semibold">Jose Leos</h3>
              <div className="flex items-center gap-x-1 bg-indigo-500 rounded-xl backdrop-filter backdrop-blur-xl shadow-md bg-opacity-20">
                <p className="max-w-xs break-words p-2">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Blanditiisitaquequodpraesentiumexplicaboincidunt? Dolores
                  beatae nam at sed dolorum ratione dolorem nisi velit cum.
                </p>
              </div>
            </div>
          </div>

          <div className="flex justify-end gap-x-2 items-center py-2 pr-6">
            <div className="card-name-user text-xs">
              <div className="flex items-center gap-x-1 bg-white rounded-xl backdrop-filter backdrop-blur-xl shadow-md bg-opacity-20">
                <p className="max-w-xs break-words p-2">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Blanditiisitaquequodpraesentiumexplicaboincidunt? Dolores
                  beatae nam at sed dolorum ratione dolorem nisi velit cum.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="flex items-center pl-2 py-4">
          <div className="w-10/12">
            <input
              className="w-full px-3 py-2 border bg-white rounded-xl backdrop-filter backdrop-blur-xl shadow-md bg-opacity-20 outline-none"
              type="text"
              placeholder="Aa"
            />
          </div>
          <div className="w-2/12 flex justify-center">
            <button className="w-1/2 py-2 bg-white rounded-xl shadow-md outline-none">
              <i className="fas fa-paper-plane"></i>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ChatBox;

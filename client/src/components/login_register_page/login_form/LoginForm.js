import React from "react";

function LoginForm() {
  return (
    <>
      <h1 className="text-4xl text-white">Register</h1>
      <div className="grid grid-rows-4 gap-10 pt-10">
        <div>
          <input
            className="w-full px-3 py-2 border  bg-white rounded-xl backdrop-filter backdrop-blur-xl shadow-md bg-opacity-20 outline-none"
            type="text"
            placeholder="Email"
          />
        </div>
        <div>
          <input
            className="w-full px-3 py-2 border  bg-white rounded-xl backdrop-filter backdrop-blur-xl shadow-md bg-opacity-20 outline-none"
            type="password"
          />
        </div>
        <div>
          <button className="w-full px-3 py-2 bg-white rounded-xl shadow-md outline-none">
            Submit
          </button>
        </div>
        <div>
          <p className="text-white">
            Don't have an account yet?{" "}
            <button className="font-semibold">Register</button>
          </p>
        </div>
      </div>
    </>
  );
}

export default LoginForm;

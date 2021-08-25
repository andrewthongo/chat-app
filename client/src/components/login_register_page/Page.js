import React from "react";
import LoginForm from "./login_form/LoginForm";
import RegisterForm from "./register_form/RegisterForm";

function Page() {
  const renderPage = () => {
    if (window.location.pathname === "/") {
      return <LoginForm />;
    } else if (window.location.pathname === "/register") {
      return <RegisterForm />;
    }
  };
  return (
    <div className="container-full w-screen h-screen bg-gradient-to-br from-red-500 to-purple-500 flex items-center">
      <div className="container flex items-center justify-center">
        <div className="px-10 py-5 relative z-10 bg-white backdrop-filter backdrop-blur-xl w-2/5 bg-opacity-20 h-auto rounded-md shadow-2xl">
          {renderPage()}
        </div>
        <div className="rounded-full h-40 w-40 absolute top-1/4 right-1/3 bg-gradient-to-br from-white to-transparent z-0 animate-blob"></div>
        <div className="rounded-full h-20 w-20 absolute bottom-1/3 left-1/4 bg-gradient-to-tl from-white to-transparent z-0 animate-blob animation-delay-2000"></div>
        <div className="bg-circles rounded-full h-10 w-10 absolute bottom-40 bg-gradient-to-b from-white to-transparent z-0 animate-blob animation-delay-4000"></div>
      </div>
    </div>
  );
}

export default Page;

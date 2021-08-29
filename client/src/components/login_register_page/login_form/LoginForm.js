import React from "react";
import { NavLink } from "react-router-dom";
import { useFormik } from "formik";
import { useDispatch } from "react-redux";
import * as Yup from "yup";
import { loginAction } from "../../../redux/actions/ProjectAction";


function LoginForm() {
  const dispatch = useDispatch();
  
  const formik = useFormik({
    initialValues: {
      username: "",
      password: "",
    },
    validationSchema: Yup.object({
      password: Yup.string().required("Required"),
      username: Yup.string().required("Required"),
    }),
    onSubmit: (values) => {
      dispatch(loginAction(values));
    },
  });
  return (
    <form onSubmit={formik.handleSubmit}>
      <h1 className="text-4xl text-white">Log in</h1>
      <div className="grid grid-rows-4 gap-10 pt-10">
        <div>
          <input
            className="w-full px-3 py-2 border  bg-white rounded-xl backdrop-filter backdrop-blur-xl shadow-md bg-opacity-20 outline-none"
            type="text"
            name="username"
            placeholder="Username"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.touched.username && formik.errors.username ? (
            <div>{formik.errors.username}</div>
          ) : null}
        </div>
        <div>
          <input
            className="w-full px-3 py-2 border  bg-white rounded-xl backdrop-filter backdrop-blur-xl shadow-md bg-opacity-20 outline-none"
            type="password"
            name="password"
            placeholder="Password"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.touched.password && formik.errors.password ? (
            <div>{formik.errors.password}</div>
          ) : null}
        </div>
        <div>
          <button
            type="submit"
            className="w-full px-3 py-2 bg-white rounded-xl shadow-md outline-none"
          >
            Submit
          </button>
        </div>
        <div>
          <p className="text-white">
            Don't have an account yet?{" "}
            <NavLink to="/register" className="font-semibold">
              Register
            </NavLink>
          </p>
        </div>
      </div>
    </form>
  );
}

export default LoginForm;

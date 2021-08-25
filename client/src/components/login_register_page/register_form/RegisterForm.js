import React from "react";
import { NavLink } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useDispatch } from "react-redux";
import { registerAction } from "../../../redux/actions/ProjectAction";

function RegisterForm() {
  const dispatch = useDispatch();
  const formik = useFormik({
    initialValues: {
      username: "",
      name: "",
      password: "",
    },
    validationSchema: Yup.object({
      password: Yup.string()
        .min(6, "At least 6 characters")
        .required("Required"),
      name: Yup.string().required("Required"),
      username: Yup.string().required("Required"),
    }),
    onSubmit: (values) => {
      dispatch(registerAction(values));
    },
  });
  return (
    <form onSubmit={formik.handleSubmit}>
      <h1 className="text-4xl text-white">Register</h1>
      <div className="grid grid-rows-4 gap-10 pt-10">
        <div>
          <input
            className="w-full px-3 py-2 border bg-white rounded-xl backdrop-filter backdrop-blur-xl shadow-md bg-opacity-20 outline-none"
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
            type="text"
            name="name"
            placeholder="Your name"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.touched.name && formik.errors.name ? (
            <div>{formik.errors.name}</div>
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
          <button className="w-full px-3 py-2 bg-white rounded-xl shadow-md outline-none">
            Submit
          </button>
        </div>
        <div>
          <p className="text-white">
            Already have an account?{" "}
            <NavLink to="/" className="font-semibold">
              Log in
            </NavLink>
          </p>
        </div>
      </div>
    </form>
  );
}

export default RegisterForm;

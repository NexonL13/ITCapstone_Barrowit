import React from "react";
import { Formik, Form} from "formik";
import * as Yup from "yup";
import FormikControl from "../components/Formik/FormikControl";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import sideWallpaper from "../assets/admin_wp.svg"

const Register = () => {
  const navigate = useNavigate()
  const initialValues = {
    email: "",
    password: "",
    passwordConfirmation: ""
  };
  const validationSchema = Yup.object({
    email: Yup.string().email().required(),
    password: Yup.string().min(6).max(20).required(),
    passwordConfirmation: Yup.mixed().oneOf([Yup.ref('password'), null], "Password must match"),
  });
  const onSubmit = async (values) => {
    const filteredValues = {
        email: values.email,
        password: values.password
    } 
    await axios.post("http://localhost:3000/auth", filteredValues)
    navigate('/')
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
      validateOnBlur={false}
      validateOnChange={false}
    >
      {(formik) => (
        <Form className="flex h-screen bg-slate-100">
          <div className="content-end container p-20 w-2/4 me-auto bg-gradient-to-r from-teal-200 to-white">
            <img src={sideWallpaper} alt="side wallpaper" />
          </div>
          <div className="content-end container p-20 w-2/4 ms-auto bg-white">
            <div className="flex flex-col">
                <h1 className="text-6xl font-semibold text-teal-500 py-5">Register</h1>
                <p className="pb-4 text-sm text-gray-500">BarrowIT Admin</p>
            </div>
            <div>
              <FormikControl
                control="input"
                type="text"
                label="Email"
                name="email"
                placeholder="Enter an email"
                className="block w-full px-4 py-2 border-gray-400 rounded input input-bordered focus:outline-none focus:border-teal-500"
              />
            </div>
            <div>
              <FormikControl
                control="input"
                type="password"
                label="Password"
                name="password"
                placeholder="Enter a password"
                className="block w-full px-4 py-2 border-gray-400 rounded input input-bordered focus:outline-none focus:border-teal-500"
              />
            </div>
            <div>
              <FormikControl
                control="input"
                type="password"
                label="Password Confirmation"
                name="passwordConfirmation"
                placeholder="Comfirm password"
                className="block w-full px-4 py-2 border-gray-400 rounded input input-bordered focus:outline-none focus:border-teal-500"
              />
            </div>
            <button type="submit" className="flex items-center w-full py-4 mx-auto mt-4 btn">Submit</button>
            <p className='mt-4'>Already have an account? <span className="text-teal-500"><Link to="/">Login here</Link></span></p>
          </div>
        </Form>
      )}
    </Formik>
  );
};

export default Register;

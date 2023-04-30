import React, { useState } from 'react'
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import FormikControl from "../components/Formik/FormikControl";
import axios from "axios";
import { useNavigate } from 'react-router-dom'

const Login = () => {
  const navigate = useNavigate()
  const [incorrect, setIncorrect] = useState(false)
  const initialValues = {
    email: "",
    password: "",
  };
  const validationSchema = Yup.object({
    email: Yup.string().email().required(),
    password: Yup.string().min(6).max(20).required(),
  });
  const onSubmit = async (values) => {
    await axios.post("http://localhost:3000/auth/login", values).then((res) => {
      if(res.data.error){
        setIncorrect(true)
      }else {
        navigate('/dashboard')
      }
    })
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
        <Form className="flex items-center justify-center h-screen">
          <div className="p-20 bg-gray-100">
            <div className="flex flex-col">
                <h1 className="text-3xl font-semibold text-teal-500">Login</h1>
                <p className="pb-4 text-sm text-gray-500">BarrowIT Admin</p>
                {incorrect && <p className='text-sm text-red-600 text-semibold'>Incorrect account credentials</p>}
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
            <button type="submit" className="flex items-center w-full py-4 mx-auto mt-4 btn">Submit</button>
            <p className='mt-4'>Don't have account? </p>
            <button type="button" className="flex items-center w-full py-4 mx-auto btn bg-gray-500" onClick={() => navigate('/register')}>Create account</button>
          </div>
        </Form>
      )}
    </Formik>
  );
}

export default Login
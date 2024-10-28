'use client'

import { MyButton } from "@/components/common/myButton";
import { MyInput } from "@/components/common/myInput";
import { ChadLogo } from "@/components/icons/chadLogo";
import { NavLane } from "@/components/navLane";
import { useAppDispatch, useAppSelector } from "@/store/store";
import { signUp } from "@/store/user/actions";
import { ErrorMessage, Form, Formik } from "formik";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { object, string } from "yup";

interface Values {
  username: string;
  password: string;
  email: string;
}

const RegistrationSchema = object().shape({
  username: string()
    .min(4, 'Username is too short')
    .max(50, 'Username is too short')
    .required(),
  password: string()
    .min(4, 'Password is too short')
    .max(50, 'Password is too long')
    .required(),
  email: string()
    .min(4, 'Email is too short')
    .max(50, 'Email is too long')
    .email('Invalid Email')
    .required(),
});

export default function SignUp() {
  const dispatch = useAppDispatch()
  const user = useAppSelector(state => state.user.data)
  const router = useRouter()

  return (
    <div className="h-full md:h-auto">
      <div className="flex text-3xl font-bold  text-main_text mb-4 md:mb-8">
        <ChadLogo width="40" height="40"/> 
        <span>Chad</span>
      </div>
      <div className="lg:hidden flex">
        <NavLane steps={[
                  {route: '/', isCompleted: user.username ? true: false},
                  {route: '/connect-shopify', isCompleted: user.store ? true: false},
                  {route: '/connect-gmail', isCompleted: user.gmailConnected ? true: false},
                  {route: '/done', isCompleted: user.done ? true: false}]}/>
      </div>
      <span className="flex flex-col mt-6">
        <h1 className=" text-2xl font-bold text-main_text mb-2 md:mb-4">Welcome to Chad</h1>
        <p className="text-secondary_text md:text-base text-sm mb-2">Go live in 10 minutes! Our self-service widget empowers your customers to manage orders and track shipments 24/7 without driving you crazy.</p>
      </span>
      <Formik
      initialValues={{
        email: '',
        password: '',
        username: '' 
      }}
      validationSchema={RegistrationSchema}
      onSubmit={(values: Values) => {
        console.log(values);
        dispatch(
          signUp({
            email: values.email,
            password: values.password,
            username: values.username})
        )
        router.push('/connect-shopify')
      }}
      >
        {({ errors, touched }) => (
        <Form>
          <MyInput name='email'  label="Email" placeholder="megachad@trychad.com" type="email"/>
          <div className="h-2">
            {errors.email && touched.email && (
                  <ErrorMessage name="email">
                    {(msg) => <div className="text-red-600">{msg}</div>}
                  </ErrorMessage>
              )}
          </div>
          <MyInput name="username" className={`${errors.username && touched.username && 'border border-red-600'}`}  label="Your name" placeholder="Mega Chad" type="text"/>
          <div className="h-2">
            {errors.username && touched.username && (
                  <ErrorMessage name="username">
                    {(msg) => <div className="text-red-600">{msg}</div>}
                  </ErrorMessage>
              )}
          </div>
          <MyInput name="password" className={`${errors.password && touched.password && 'border border-red-600'}`} label="Password" type="password" placeholder="Enter password"/>
          <div className="h-2">
            {errors.password && touched.password && (
                  <ErrorMessage name="password">
                    {(msg) => <div className="text-red-600">{msg}</div>}
                  </ErrorMessage>
              )}
          </div>
          <MyButton content="Create account" type="submit" className="mt-12" />
          <div className="flex justify-center items-center text-sm mt-2">
            <span className="text-secondary_text mr-1">Already have an account?</span>
            <a className="no-underline text-element ">Login</a>
          </div>
        </Form>
        )}
      </Formik>
    </div>
  );
}

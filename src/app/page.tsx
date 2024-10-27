'use client'

import { MyButton } from "@/components/common/myButton";
import { MyInput } from "@/components/common/myInput";
import { ChadLogo } from "@/components/icons/chadLogo";
import { NavLane } from "@/components/navLane";
import { useAppDispatch, useAppSelector } from "@/store/store";
import { signUp } from "@/store/user/actions";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function SignUp() {
  const dispatch = useAppDispatch()
  const router = useRouter()
  const user = useAppSelector(state => state.user.data)

  const [email, setEmail] = useState('')
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  const handleRegistration = () => {

    if(email && username && password){
      dispatch(signUp({email: email, username: username, password: password}))
      router.push('/connect-shopify')
    }else{
      alert('Incorrect data')
    }
  }

  return (
    <div className="">
      <div className="flex text-3xl font-bold text-main_text mb-4 md:mb-8">
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
      <form>
        <MyInput value={email} onChange={(e) => setEmail(e.target.value)} label="Email" placeholder="megachad@trychad.com" type="email"/>
        <MyInput value={username} onChange={(e) => setUsername(e.target.value)} label="Your name" placeholder="Mega Chad" type="text"/>
        <MyInput value={password} onChange={(e) => setPassword(e.target.value)} label="Password" type="password" placeholder="Enter password"/>
        <MyButton content="Create account" className="mt-12" onClick={handleRegistration}/>
          <div className="flex justify-center items-center text-sm mt-2">
            <span className="text-secondary_text mr-1">Already have an account?</span>
            <a className="no-underline text-element ">Login</a>
          </div>
      </form>
    </div>
  );
}

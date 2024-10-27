'use client'

import { ChadLogo } from "@/components/icons/chadLogo"
import { Check } from "@/components/icons/check"
import Google from "../../../../public/images/google.png"
import Image from "next/image"
import Link from "next/link"
import { useAppDispatch, useAppSelector } from "@/store/store"
import { connectGmail } from "@/store/user"
import { NavLane } from "@/components/navLane"

const features = [
    {
        title: 'Contextual responses',
        description: 'Custom responses to any support situation from “where’s my stuff?” to “I want a refund”'
    },
    {
        title: 'Reply from anywhere',
        description: 'Respond to your customers via email or Chad chat—it’s all saved in the same thread'
    },
    {
        title: 'Categorical inbox tags',
        description: 'Tags your emails by category so you know what to expect before even opening an email'
    }
]

const ConnectGmail = () => {
    const dispatch = useAppDispatch()
    const user = useAppSelector(state => state.user.data)

    const handleGmailConnect = () => {
        dispatch(connectGmail())
    }
    return(
        <div>
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
                <h1 className=" text-2xl font-bold text-main_text mb-4">Connect your customer support email</h1>
                <p className="text-secondary_text">Allows Chad to send automated responses on your behalf from your usual support mailbox</p>
                </span>
                <div className="space-y-4 mb-4 mt-6 md:mb-6 md:mt-8 md:bg-white bg-slate-100 p-2">
                    {features.map((feature, index) => (
                    <div key={index} className="flex items-start space-x-3">
                        <Check className="min-w-5" fill="green" />
                        <div>
                        <p className="font-semibold text-main_text">{feature.title}</p>
                        <p className="text-secondary_text text-sm">{feature.description}</p>
                        </div>
                    </div>
                    ))}
                </div>
                <Link href="/done" onClick={handleGmailConnect} className="relative flex justify-center items-center bg-[#5383EC] py-3.5 cursor-pointer text-white">
                    <Image src={Google} alt="google image" width={400} height={400} className="absolute left-0.5 w-12 h-12"/>
                    <span>Connect Gmail account</span>
                </Link>
                
                <div className="flex w-full justify-center items-center mt-2">
                    <Link href="not-use-gmail" className=" no-underlin text-secondary_text text-sm cursor-pointer">I don`t use gmail</Link>
                </div>
        </div>
    )
}

export default ConnectGmail
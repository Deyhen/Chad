'use client'

import { MyButton } from "@/components/common/myButton"
import { ChadLogo } from "@/components/icons/chadLogo"
import { Check } from "@/components/icons/check"
import { useAppSelector } from "@/store/store"
import raccoon from "../../../../public/images/raccoon.png"
import { useRouter } from "next/navigation"
import Image from "next/image"
import Link from "next/link"
import { NavLane } from "@/components/navLane"

const features = [
    {
        title: 'Track orders and shipping',
        description: 'Global coverage with 600+ couriers supported'
    },
    {
        title: 'Manage orders',
        description: 'Allow customers to track, return, exchange, or report problems with their orders'
    },
    {
        title: 'Process returns and exchanges',
        description: 'Automatically checks your store policy and existing inventory before resolving or escalating each request'
    }
]

const ConnectShopify = () => {
    const user = useAppSelector(state => state.user.data)

    return(
        <div>
            {user.store ? 
            <div className="flex flex-col justify-center items-center h-full md:h-auto text-main_text py-4 px-6 md:py-20 md:px-12 w-full md:w-[400px]">
                <div className="lg:hidden flex w-full">
                    <NavLane steps={[
                            {route: '/', isCompleted: user.username ? true: false},
                            {route: '/connect-shopify', isCompleted: user.store ? true: false},
                            {route: '/connect-gmail', isCompleted: user.gmailConnected ? true: false},
                            {route: '/done', isCompleted: user.done ? true: false}]}/>
                </div>
                <Image alt="raccoon image" src={raccoon} width={400} height={400} className="w-20 h-20 mb-8 mt-12"/>
                <h1 className="text-2xl font-semibold">{user.store}</h1>
                <h2 className="text-xl font-semibold mb-4">Already connected</h2>
                <Link href="/connect-gmail" className="w-full"><MyButton content="Continue" /></Link>
                <div className="text-sm text-secondary_text mt-2">
                    <span className="mr-1">Not your store?</span>
                    <Link href="/store-connected" className="text-element">Connect another one</Link>
                </div>
            </div>
            :
            <div>
                <div className="flex text-3xl font-bold text-main_text mb-4 md:mb-8">
                    <ChadLogo width="40" height="40"/> 
                    <span>Chad</span>
                </div>
                <div className="lg::hidden flex">
                    <NavLane steps={[
                            {route: '/', isCompleted: user.username ? true: false},
                            {route: '/connect-shopify', isCompleted: user.store ? true: false},
                            {route: '/connect-gmail', isCompleted: user.gmailConnected ? true: false},
                            {route: '/done', isCompleted: user.done ? true: false}]}/>
                </div>
                <span className="flex flex-col mt-6">
                <h1 className=" text-2xl font-bold text-main_text mb-4">Welcome to Chad</h1>
                <p className="text-secondary_text">Installs the Chad widget in your Shopify store and sets it up to display your customers’ order information and self-serve options.</p>
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
                <Link href="/store-connected"><MyButton content="Connect store" /></Link>
                
                <div className="flex w-full justify-center items-center mt-2">
                    <Link href="not-use-shopify" className=" text-secondary_text text-sm ">I don`t use shopify</Link>
                </div>
            </div>
            }
        </div>
    )
}

export default ConnectShopify 
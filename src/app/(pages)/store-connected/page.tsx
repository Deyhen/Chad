'use client'

import { useAppDispatch, useAppSelector } from "@/store/store"
import { connectStore } from "@/store/user/actions"
import Image from "next/image"
import raccoon from "../../../../public/images/raccoon.png"
import { useEffect } from "react"
import { MyButton } from "@/components/common/myButton"
import { useRouter } from "next/navigation"
import Link from "next/link"

const StoreConnected = () => {
    const dispatch = useAppDispatch()
    const store = useAppSelector(state => state.user.data.store)

    useEffect(() => {
        dispatch(connectStore({store: '123'}))
    }, [])


    return(
        <div className="flex flex-col justify-center items-center text-main_text py-20 px-12 w-full h-full md:h-auto md:w-[400px] text-center">
            <Image alt="raccoon image" src={raccoon} width={400} height={400} className="w-20 h-20 mb-8"/>
            <h1 className="text-2xl font-semibold">Store connected</h1>
            <h2 className="text-sm text-secondary_text mb-4">Chad is now able to manage customer support requests for {store}.</h2>
            <Link href="/connect-gmail"><MyButton content="Continue"/></Link>
            <div className="text-sm text-secondary_text mt-2">
                <span className="mr-1">Wrong store?</span>
                <a className="no-underline text-element cursor-pointer" onClick={() => {}}>Connect another one</a>
            </div>
        </div>
    )
}

export default StoreConnected
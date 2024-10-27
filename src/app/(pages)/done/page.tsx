'use client'

import { MyButton } from "@/components/common/myButton"
import { NavLane } from "@/components/navLane"
import { useAppDispatch, useAppSelector } from "@/store/store"
import { done } from "@/store/user"

const Done = () => {
    const user = useAppSelector(state => state.user.data)
    const dispatch = useAppDispatch()

    const handleDone = () =>{
        dispatch(done())
    }
    return (
        <div className="flex flex-col w-full md:w-auto justify-center items-center text-2xl text-main_text font-semibold">
                  <div className="lg:hidden flex w-full">
                        <NavLane steps={[
                                {route: '/', isCompleted: user.username ? true: false},
                                {route: '/connect-shopify', isCompleted: user.store ? true: false},
                                {route: '/connect-gmail', isCompleted: user.gmailConnected ? true: false},
                                {route: '/done', isCompleted: user.done ? true: false}]}/>
                    </div>
            <span className="mb-8 mt-8 md:mt-0">Hello Luna Edge, My name is {user.username}.</span>
            <MyButton content='done' onClick={handleDone}/>
        </div>
    )
}

export default Done
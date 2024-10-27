import { MyButton } from "@/components/common/myButton"
import { Check } from "@/components/icons/check"
import Link from "next/link"

const ResponseReceived = () => {
    return (
        <div className="flex flex-col justify-center items-center h-full md:h-auto text-main_text w-full md:w-[400px] text-start">
            <div className="rounded-full bg-green-500 w-20 h-20 flex justify-center items-center mb-4">
                <Check width="40" height="40" fill="white"/>
            </div>
            <h1 className="text-2xl text-main_text font-semibold mb-2 text-center">Response received</h1>
            <h2 className=" text-secondary_text mb-4 text-center">Thank you for your interest in Chad! We’ll be hard at work building integrations to support your platform.</h2>
            <Link href="/" className="w-full"><MyButton content="Done"/></Link>
        </div>
    )
}

export default ResponseReceived
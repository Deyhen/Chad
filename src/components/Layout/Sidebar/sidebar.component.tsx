'use client'

import { NavMap } from "@/components/navMap"
import { useAppSelector } from "@/store/store"

export const Sidebar = () => {
    const user = useAppSelector(state => state.user.data)
    return  (
        <div className="hidden lg:flex flex-col w-2/5 h-screen bg-element bg-gradient-to-b from-[#19476C] to-[#0D3251] justify-between items-center">
            <div className="mt-60">
              
              <NavMap steps={[
                {label: 'Welcome',route: '/', isCompleted: user.username ? true: false},
                {label: 'Connect your shopify store', route: '/connect-shopify', isCompleted: user.store ? true: false},
                {label: 'Connect your customer support email', route: '/connect-gmail', isCompleted: user.gmailConnected ? true: false},
                {label: 'Done', route: '/done', isCompleted: user.done ? true: false}]}/>
            </div>
            <div className="flex flex-col items-center justify-center mb-16">
                <div className="flex justify-center items-center max-w-96 h-24 bg-navmap_focused text-navmap_element p-4 rounded-lg">
                  <span className="text-4xl font-bold mr-4">5X</span>
                  <span className="">Acquiring a new customer is 5x more costly than making an unhappy customer happy</span>
                </div>
                <div className="flex mt-6 gap-3">
                    <div className="w-2 h-2 bg-navmap_element rounded-full"></div>
                    <div className="w-2 h-2 bg-navmap_focused rounded-full"></div>
                    <div className="w-2 h-2 bg-navmap_focused rounded-full"></div>
                    <div className="w-2 h-2 bg-navmap_focused rounded-full"></div>
                    <div className="w-2 h-2 bg-navmap_focused rounded-full"></div>
                </div>
            </div>
          </div>
    )
}
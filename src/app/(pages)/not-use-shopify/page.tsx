'use client'

import { MyButton } from "@/components/common/myButton";
import { ChadLogo } from "@/components/icons/chadLogo"
import { Dropdown, DropdownItem, DropdownMenu, DropdownTrigger } from "@nextui-org/dropdown"
import Link from "next/link";
import { useMemo, useState } from "react"

const NotUseShopify = () => {
    const [platform, setPlatform] = useState(new Set(["Select platform"]))

    const selectedValue = useMemo(
        () => Array.from(platform).join(", ").replaceAll("_", " "),
        [platform]
    );

    const handleSelectionChange = (keys: any) => {
        setPlatform(new Set(keys as Set<string>));
    };

    return (
        <div className="flex flex-col justify-center items-start text-main_text w-full md:w-[400px] text-start">
            <div className="flex text-3xl font-bold text-main_text mb-8 md:mt-0 mt-8">
                <ChadLogo width="40" height="40"/> 
                <span>Chad</span>
            </div>
            <span className="flex flex-col">
                <h1 className="text-2xl font-bold text-main_text mb-4">Don’t use Shopify?</h1>
                <p className="text-secondary_text">Chad Beta is currently only available on Shopify. We’ll send you an email when Chad becomes available on your platform.</p>
            </span>
            <span className="text-sm text-secondary_text mt-4">Platform</span>
            <Dropdown>
                <DropdownTrigger>
                    <button className="w-full p-2 pr-10 transition-colors text duration-300 mb-4 outline-none rounded-lg bg-[#F8F9FC] border-white border hover:bg-white hover:border-secondary_text">
                        {selectedValue}
                    </button>
                </DropdownTrigger>
                <DropdownMenu
                    aria-label="Single selection example"
                    variant="flat"
                    disallowEmptySelection
                    selectionMode="single"
                    selectedKeys={platform}
                    onSelectionChange={handleSelectionChange}
                >
                    <DropdownItem key="Wordpress">Wordpress</DropdownItem>
                    <DropdownItem key="Wix">Wix</DropdownItem>
                </DropdownMenu>
            </Dropdown>
            <Link className="w-full mt-20" href="/response-received"><MyButton content="Submit"/></Link>
            <div className="w-full flex justify-center items-center text-sm mt-2 text-secondary_text">
                <span className="mr-1">Actually use Shopify?</span> 
                <Link href="connect-shopify" className="text-element"> Connect</Link>
            </div>
        </div>
    );
};

export default NotUseShopify;

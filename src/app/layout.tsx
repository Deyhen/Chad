
import backgroundImage from "../../public/images/background.png"
import "./globals.css";
import Image from "next/image";

import { Sidebar } from "@/components/Layout/Sidebar/sidebar.component";
import StoreProvider from "@/components/StoreProvider/storeProvider.component";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <StoreProvider>
    <html lang="en" suppressHydrationWarning={true}>
        <body className="flex">
          <Sidebar/>
          <div className="relative w-full h-screen flex justify-center items-center">
            <Image src={backgroundImage} className="hidden md:flex absolute -z-10 w-full h-screen" width={1200} height={1200} alt='background'/>
            <div className="flex flex-col shadow-lg px-6 py-2 md:px-10 md:py-16 h-full w-full md:h-auto md:max-w-[480px] rounded-lg bg-white">
              {children}
            </div>
          </div>  
        </body>
    </html>
    </StoreProvider>
  );
}

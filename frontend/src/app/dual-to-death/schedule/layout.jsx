import QuestionIcon from "@/components/QuestionIcon";
import Link from "next/link";

export default function Layout({ children }) {
    return (
        <>  
            {/* This div only for design */}
            <div className="relative w-full">
                <div className="absolute -top-11 left-0 w-full h-11 bg-[#025256]"></div>
            </div>
            
            <div className="bg-[#025256] pb-2 pt-1">
                <div className="w-full h-7 md:h-8 text-base md:text-lg font-semibold flex justify-center items-center">
                    <div className="h-6 w-40 bg-[#b64748] text-white shadow-sm shadow-white rounded-full text-center">Dual to Death</div>
                </div>
                <div className="w-full h-28  sm:h-32 md:h-36  flex justify-center items-center relative">
                    <div className="w-full h-4 absolute top-0 px-1 flex justify-between">
                        <div className="h-full w-24 bg-red-500 text-white text-xs text-center font-medium rounded-full">
                            <p className="w-full h-full">Combat Mode</p>
                            <p>OFF</p>
                        </div>
                        <div className="bg-white border border-gray-600 text-gray-600  h-4 px-1 rounded-full flex pr-1.5 text-xs">
                            <div className="h-full mr-0.5 flex items-center">
                                <span className="w-2.5 md:w-3 aspect-square rounded-full bg-red-500 inline-block"></span>
                            </div>
                            LIVE
                        </div>
                    </div>
                    <img src="/imgs/icons/dtd-bg-image.png" alt="" className="h-full object-cover" />
                    <Link href='./schedule/rules' className="absolute bottom-0 right-0 h-4 w-20 flex justify-center items-center">
                        <div className="h-2/3"><QuestionIcon /></div>
                        <span className="text-[10px] ml-0.5 font-medium text-white">Check Rules</span>
                    </Link>
                </div>
            </div>
            {children}
        </>
    )
}
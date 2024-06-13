"use client"
import Link from "next/link";
import { useState } from "react";

const liveE = [
    { name: "রুইমাছ Chapter Final", id: "4329797308023", expireTime: 1718059510320 },
    { name: "লবণ পরিশোষণ Split Exam", id: "4329797308023", expireTime: 1718059510320 },
    { name: "শ্বসন ও শ্বাসক্রিয়া Chapter Final", id: "4329797308023", expireTime: 1718059510320 },
    { name: "রুইমাছ Chapter Final", id: "4329797308023", expireTime: 1718059510320 },
    { name: "লবণ পরিশোষণ Split Exam", id: "4329797308023", expireTime: 1718059510320 },
    { name: "শ্বসন ও শ্বাসক্রিয়া Chapter Final", id: "4329797308023", expireTime: 1718059510320 },
]

export default function Page() {
    const [allLiveExams, setAllLiveExams] = useState(liveE)
    const [allPremiumLiveExams, setAllPremiumLiveExams] = useState(liveE)
    return (
        <>
            <div className="flex items-center justify-center w-full mt-4 md:mt-6 h-9">
                <div className="relative flex items-center justify-center w-64 h-full text-base text-white bg-red-500 rounded-md shadow-md md:text-lg shadow-gray-500">
                    আজকের Live Exams
                    <div className="absolute h-3 bg-white rounded-full shadow-sm shadow-black aspect-square right-3"></div>
                </div>
            </div>

            <div className="w-full h-auto px-1 mt-3 md:px-2">
                <div className="h-auto w-full bg-[#44b3b7] p-2 pb-3 md:p-4 rounded-md shadow-md shadow-gray-600 flex flex-col justify-center items-center">
                    <div className="flex items-center justify-center w-48 h-6 mb-2 bg-white rounded-full shadow-md shadow-gray-500">সবার জন্য উন্মুক্ত</div>

                    <div className="w-full space-y-2">
                        {allLiveExams.map((exam, index) => (
                            <Link href={`./live-exams/${exam.id}`} key={index} className="w-full h-7 bg-[#d9d9d9] shadow-sm shadow-gray-500 rounded-md flex justify-between items-center px-2 md:px-3">
                            <p className="text-stone-600">{exam.name}</p>
                            <div className="bg-white border border-gray-600 text-gray-600  h-4 px-1 rounded-full flex pr-1.5 text-xs">
                                <div className="h-full mr-0.5 flex items-center">
                                    <span className="w-2.5 md:w-3 aspect-square rounded-full bg-red-500 inline-block"></span>
                                </div>
                                LIVE
                            </div>
                        </Link>
                        ))}
                    </div>
                </div>
            </div>


            <div className="w-full h-auto px-1 mt-4 md:px-2">
                <div className="h-auto w-full bg-[#44b3b7] p-2 pb-3 md:p-4 rounded-md shadow-md shadow-gray-600 flex flex-col justify-center items-center">
                    <div className="flex items-center justify-center w-48 h-6 mb-2 bg-white rounded-full shadow-md shadow-gray-500">প্রিমিয়াম শো</div>

                    <div className="w-full space-y-2">
                        {allPremiumLiveExams.map((exam, index) => (
                            <Link href={`./live-exams/${exam.id}`} key={index} className="w-full h-7 bg-[#d9d9d9] shadow-sm shadow-gray-500 rounded-md flex justify-between items-center px-2 md:px-3">
                                <p className="text-stone-600">{exam.name}</p>
                                <div className="bg-white border border-gray-600 text-gray-600  h-4 px-1 rounded-full flex pr-1.5 text-xs">
                                    <div className="h-full mr-0.5 flex items-center">
                                        <span className="w-2.5 md:w-3 aspect-square rounded-full bg-red-500 inline-block"></span>
                                    </div>
                                    LIVE
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </div>

            
        </>
    );
}
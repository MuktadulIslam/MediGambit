"use client"
import FireIcon from "@/components/FireIcon";
import Link from "next/link";
import { Inter } from "next/font/google";
const inter = Inter({ subsets: ["latin"] });

import leaderboardJsonData from "../../data/leaderboardData.json"
import monthlyStarJsonData from "../../data/monthlyStarData.json"
import { useState } from "react";

export default function Home() {
  const [leaderboardData, setLeaderboardData] = useState(leaderboardJsonData.exam1)
  const [monthlyStarData, setMonthlyStarData] = useState(monthlyStarJsonData.data)

  return (
    <>
      <div className="w-full h-auto">

        {/* start:::JoinLive & Rapid Fire */}
        <div className="flex items-center justify-between w-full h-24 text-base md:h-28 md:text-lg">
          <Link href="/live-exams" className="w-40 md:w-44 h-10 md:h-12 bg-[#f44336] text-white flex pl-2 md:pl-3 items-center rounded-r-xl shadow-md shadow-gray-600">
            Join LIVE exam
            <span className="inline-block w-3 h-3 ml-1 bg-white rounded-full shadow-sm shadow-gray-400"></span>
          </Link>
          <Link href="/rapid-fire" className="w-44 md:w-48 h-10 md:h-12 bg-[#d9d9d9] flex justify-end items-center pr-2 rounded-l-xl shadow-md shadow-gray-600">
            <span className="translate-y-0.5">আজকের Rapid Fire</span> <span className="w-auto ml-1 h-1/2"><FireIcon /></span>
          </Link>
        </div>
        {/* end:::JoinLive & Rapid Fire */}

        {/* start:::Leaderboard */}
        <div className="w-full px-1.5 md:px-3">
          <div className="w-full rounded-md shadow-md shadow-gray-700 bg-[#44b3b7] p-2.5 md:p-3">
            <div className="min-w-60 w-5/6 h-7 py-0.5 mx-auto rounded-full bg-[#d8d7d7] text-[#5c5c5c] text-center px-1.5 font-medium whitespace-nowrap overflow-hidden">
              Leaderboard : {leaderboardData.exam_name}
            </div>
            <div className="w-full h-auto grid grid-cols-4 gap-1 mt-1 pr-1.5 md:pr-3">
              {leaderboardData.results.map((rstudent_result, index) => (
                <div key={index} className="w-full h-auto">
                  <div className="relative flex items-center justify-center w-full h-16 md:h-20">
                    <div className={`${inter.className} absolute h-2/3 aspect-square rounded-full translate-x-[70%] -translate-y-[25%] bg-[#9b9b9b] flex justify-end items-center pr-3 md:pr-4 text-xs font-semibold text-white`}>
                      {rstudent_result.result}
                    </div>
                    <div className="absolute overflow-hidden rounded-full h-5/6 aspect-square">
                      <img src={rstudent_result.img_url} alt="" className="object-cover w-full h-full" />
                    </div>
                  </div>
                  <div className="w-full h-8 text-center leading-[16px] px-0.5">
                    <p className="text-[12px] md:text-[13px] whitespace-nowrap overflow-hidden">{rstudent_result.name}</p>
                    <p className="text-[9px] md:text-[10px] whitespace-nowrap  overflow-hidden">{rstudent_result.college_name}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="w-32 h-6 bg-[#007c81] text-sm text-white mx-auto flex justify-center items-center mt-0.5 rounded-md">Next Exam</div>
        {/* end:::Leaderboard */}


        {/* start:::Most Solved Questions */}
        <div className="mt-8 w-full px-1.5 md:px-3">
          <div className="w-full rounded-md shadow-md shadow-gray-700 bg-[#44b3b7] p-1.5 md:p-2">
            <div className="w-72 h-7 py-0.5 mx-auto rounded-full bg-[#7e7e7e] text-white text-center px-1.5 font-medium whitespace-nowrap overflow-hidden">
              Most Solved Questions
            </div>
            <div className="w-full h-auto grid grid-cols-2 gap-1.5 md:gap-2 mt-1 pr-1.5 md:pr-3 text-sm md:text-base text-center font-medium *:w-full *:h-12 *:md:h-16 *:bg-[#d9d9d9] *:rounded-md *:flex *:justify-center *:items-center *:p-1.5 text-gray-600">
              <div className="">
                মেডিকেল ভর্তি পরীক্ষা ২০২৪
              </div>
              <div className="">
                ডেন্টাল ভর্তি পরীক্ষা ২০২৪
              </div>
              <div className="">প্রাণির বিভিন্নতা ও শ্রেণিবিন্যাস Chapter Final</div>
              <div className="">রসায়ন ১ম পত্র Subject Final</div>
            </div>
          </div>
        </div>
        {/* end:::Most Solved Questions */}


        <div className="mt-8 w-full px-1.5 md:px-3">
          <div className="w-full rounded-md shadow-md shadow-gray-700 bg-[#e0f2f3] p-2.5 md:p-3">
            <div className="w-60 h-6 pt-0.5 mx-auto text-base text-center font-semibold whitespace-nowrap overflow-hidden">
              Monthly Star
            </div>
            <div className="grid w-full h-auto grid-cols-4 gap-1 mt-1">
              {monthlyStarData.map((star, index) => (
                <div key={index} className="w-full h-auto text-center">
                  <div className="flex items-center justify-center w-full h-20 md:h-24">
                    <img src={star.img_url} alt="" className="h-[90%] aspect-square rounded-full object-cover" />
                  </div>
                  <div className="w-full h-16 overflow-hidden md:h-12">
                    <p className="text-[12px] font-medium md:text-[13px]">{star.name}</p>
                    <p className="text-[9px] md:text-[10px]">{star.college_name}, {star.district}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

"use client"
import { useContext } from "react"
import { RapidQuestionContext } from "../../../../../AllContexts.jsx"
import Link from "next/link.js";
import PerformanceComponent from "@/components/PerformanceComponent.jsx";


export default function Page() {
    const { allAnswers, totalMark, maxMark, totalTime, allquestions } = useContext(RapidQuestionContext)

    return (<>
        
        <PerformanceComponent allquestions={allquestions} allAnswers={allAnswers} totalMark={totalMark} maxMark={maxMark} totalTime={totalTime}/>

        <div className="fixed w-full bottom-2 h-7 md:h-8">
            <div className="w-full max-w-[700px] h-full flex justify-evenly *:flex *:justify-center *:items-center *:rounded-full text-white">
                <Link
                    href={{
                        pathname: "./exam-result/pdf",
                        state: {
                            questions: 'yourQuestionsData',
                        }
                    }}
                    className="w-40 h-full bg-gradient-to-r from-[#e03e22] to-[#997417] text-base">Download PDF</Link>
                <Link href="./position" className="w-40 h-full bg-gradient-to-r from-[#f7bc25] to-[#947119] text-lg">See Your Position</Link>
            </div>
        </div>
    </>)
}
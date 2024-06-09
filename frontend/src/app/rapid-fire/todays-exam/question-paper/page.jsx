"use client"
import { useContext } from "react"
import { RapidQuestionContext } from "../../../../AllContexts.jsx"
import { Roboto_Slab } from "next/font/google";
import Link from "next/link.js";

import BookMarkIcon from "@/components/BookmarkIcon.jsx";
import ReportIcon from "@/components/ReportIcon.jsx";
import ExplanationIcon from "@/components/ExplanationIcon.jsx";
import LoveIcon from "@/components/LoveIcon.jsx";
import FireIcon from "@/components/FireIcon.jsx";
import ThumbsUpIcon from "@/components/ThumbsUpIcon.jsx";

const robotoSlab = Roboto_Slab({
    weight: ["600"],
    style: ["normal"],
    subsets: ["latin"]
});

export default function Page() {
    const { allAnswers, totalMarks, maxMarks, totalTime, allquestions } = useContext(RapidQuestionContext)
    const optionIndex = ["A", "B", "C", "D"];

    return (<>
        <div className="h-[3.5rem] w-full px-1 sm:px-1.5 md:px-3 my-3">
            <div className="h-full w-full bg-[#b6e1e3] rounded-md shadow-md shadow-gray-600 text-red-500">
                <div className="h-7 w-full text-center text-lg">Performance Data</div>
                <div className="h-5 w-full flex justify-between items-center px-4 text-sm">
                    <div>
                        <span className="text-gray-700">Marks: </span>
                        {totalMarks}/{maxMarks}
                    </div>
                    <div>
                        <span className="text-gray-700">Time: </span>
                        {totalTime} sec
                    </div>
                </div>
            </div>
        </div>

        {allquestions && allquestions.map((question, q_index) => (
            <div key={q_index} className="w-full mt-1.5 md:mt-2 h-auto px-1 sm:px-1.5 md:px-3">
                <div className="w-full h-auto bg-white rounded-md overflow-hidden flex">
                    <div className="pb-2 px-1.5 md:px-2 flex-1 h-auto overflow-hidden">
                        {question.questionImg && (
                            <div className="w-full max-w-96 pt-2">
                                <img
                                    src={question.questionImg}
                                    alt=""
                                    className="w-full"
                                />
                            </div>
                        )}
                        <div className="flex items-start gap-2 mb-2">
                            <span className={`${robotoSlab.className} text-base font-semibold`}>{q_index + 1}.</span>
                            <div className="pt-0.5"
                                dangerouslySetInnerHTML={{
                                    __html: question.question,
                                }}
                            ></div>
                        </div>
                        <div className="px-3 flex flex-col space-y-2 *:h-5">
                            {question.options.map((option, index) => (
                                <div key={index} className="flex gap-3">
                                    <div className={`h-full aspect-square rounded-full border shadow-sm shadow-gray-500 flex justify-center items-center pt-0.5 
                                    ${question.correctAnswer == option ? " bg-green-400 border-green-400 " :
                                            ((allAnswers != null) && (allAnswers[q_index] != null) && (allAnswers[q_index].answer != null) && (allAnswers[q_index].answer == option)) ? "bg-red-400 border-red-400" : ""
                                        }`}
                                    >
                                        {optionIndex[index]}
                                    </div>

                                    <div
                                        dangerouslySetInnerHTML={{
                                            __html: option,
                                        }}
                                    ></div>
                                </div>
                            ))}
                        </div>

                        <div className="h-5 w-full mt-3 pl-4">
                            <div className="h-full w-full flex justify-start items-center gap-2 overflow-x-auto hidden-scrollbar text-sm *:flex *:items-center">
                                {question.tags.map((tag, index) => (
                                    <p key={index} className="h-full py-0.5 px-1.5 flex-none rounded-full bg-gray-100">{tag}</p>
                                ))}
                            </div>
                        </div>
                    </div>
                    <div className="w-6 sm:w-7 h-44 sm:h-48 bg-white py-1 px-1 space-y-2">
                        <div className="w-full h-auto"><BookMarkIcon /></div>
                        <div className="w-full h-auto"><ReportIcon /></div>
                        <div className="w-full h-auto"><ExplanationIcon /></div>
                        <div className="w-full h-auto"><LoveIcon /></div>
                        <div className="w-full h-auto"><FireIcon /></div>
                        <div className="w-full h-auto"><ThumbsUpIcon /></div>
                    </div>
                </div>
            </div>
        ))}

        <div className="fixed bottom-2 w-full h-7 md:h-8">
            <div className="w-full max-w-[700px] h-full flex justify-evenly *:flex *:justify-center *:items-center *:rounded-full text-white">
                <Link
                href={{
                  pathname: "./question-paper/pdf",
                  state: {
                    questions: 'yourQuestionsData',
                  }
                }}
                  className="w-40 h-full bg-gradient-to-r from-[#e03e22] to-[#997417] text-sm">Download PDF</Link>
                <Link href="./position" className="w-40 h-full bg-gradient-to-r from-[#f7bc25] to-[#947119] text-lg">See Your Position</Link>
            </div>
        </div>
    </>)
}
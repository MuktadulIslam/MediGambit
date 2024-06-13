import { Roboto_Slab } from "next/font/google";

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

export default function PerformanceComponent({allquestions, allAnswers, totalMark, maxMark, totalTime}) {
    const optionIndex = ["A", "B", "C", "D"];
    return (<>
        <div className="h-[3.5rem] w-full px-1 sm:px-1.5 md:px-3 my-3">
            <div className="h-full w-full bg-[#b6e1e3] rounded-md shadow-md shadow-gray-600 text-red-500">
                <div className="w-full text-lg text-center h-7">Performance Data</div>
                <div className="flex items-center justify-between w-full h-5 px-4 text-sm">
                    <div>
                        <span className="text-gray-700">Marks: </span>
                        {totalMark}/{maxMark}
                    </div>
                    <div>
                        <span className="text-gray-700">Time: </span>
                        {Math.floor(totalTime / 60)}:{String(totalTime % 60).padStart(2, "0")}
                    </div>
                </div>
            </div>
        </div>

        {allquestions && allquestions.map((question, q_index) => (
            <div key={q_index} className="w-full mt-1.5 md:mt-2 h-auto px-1 md:px-1.5">
                <div className="flex w-full h-auto overflow-hidden bg-white rounded-md">
                    <div className="pb-2 px-1.5 md:px-2 flex-1 h-auto overflow-hidden">
                        {question.questionImg && (
                            <div className="w-full pt-2 max-w-96">
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
                                            ((allAnswers[q_index] != null) && (allAnswers[q_index] == option)) ? "bg-red-400 border-red-400" : ""
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

                        <div className="w-full h-5 pl-4 mt-3">
                            <div className="h-full w-full flex justify-start items-center gap-2 overflow-x-auto hidden-scrollbar text-xs *:flex *:items-center">
                                {question.tags.map((tag, index) => (
                                    <p key={index} className="h-full py-0.5 px-1.5 flex-none rounded-full bg-gray-100">{tag}</p>
                                ))}
                            </div>
                        </div>
                    </div>
                    <div className="w-6 px-1 py-1 space-y-2 bg-white sm:w-7 h-44 sm:h-48">
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
    </>)
}
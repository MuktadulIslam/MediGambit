"use client"
import { useContext } from "react";
import { LiveQuestionContext } from "../../../AllContexts.jsx"
import { Roboto_Slab } from "next/font/google";
import LoveIcon from "@/components/LoveIcon";
import FireIcon from "@/components/FireIcon";
import ThumbsUpIcon from "@/components/ThumbsUpIcon";
import ViewIcon from "@/components/ViewIcon";

const robotoSlab = Roboto_Slab({
    weight: ["600"],
    style: ["normal"],
    subsets: ["latin"]
});

export default function Page({ params }) {
    // console.log(params.gallery)
    const { allquestions } = useContext(LiveQuestionContext);
    const optionIndex = ["A", "B", "C", "D"];

    return (
        <>
            {allquestions && allquestions.map((question, q_index) => (
                <div key={q_index} className="w-full mt-1.5 md:mt-2 h-auto px-1 md:px-1.5">
                    <div className="pb-2 px-1.5 md:px-2 w-full h-auto bg-white rounded-md">
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
                                    <div className={`h-full aspect-square rounded-full border shadow-sm shadow-gray-500 flex justify-center items-center pt-0.5`}>
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
                            <div className="h-full w-full flex justify-between">
                                <div className="h-full flex-1 flex justify-start items-center gap-6 sm:gap-10 md:gap-12 overflow-x-auto hidden-scrollbar text-xs *:flex *:items-center *:justify-center *:h-full *:min-w-[3.5rem] *:flex-none *:rounded-full *:bg-gray-100">
                                    <div className="text-center">
                                        <div className="h-2/3 aspect-square mr-1.5"><LoveIcon/></div> 72
                                    </div>
                                    <div className="text-center">
                                    <div className="h-2/3 aspect-square mr-1.5"><FireIcon/></div> 51
                                    </div>
                                    <div className="text-center">
                                    <div className="h-2/3 aspect-square mr-1.5"><ThumbsUpIcon/></div> 42
                                    </div>
                                </div>

                                <div className="h-full min-w-[3.5rem] flex items-center justify-center rounded-full bg-gray-100 text-xs text-center">
                                <div className="h-2/3 aspect-square mr-1.5"><ViewIcon/></div> 523
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            ))}

        </>
    );
}
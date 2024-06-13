"use client"
import { useContext, useEffect, useRef } from "react";
import { LiveQuestionContext } from "../../../../AllContexts.jsx"
import { Roboto_Slab } from "next/font/google";
import { useRouter } from "next/navigation";
const robotoSlab = Roboto_Slab({
    weight: ["600"],
    style: ["normal"],
    subsets: ["latin"]
});

export default function Page() {
    const { allquestions, startExam, endExam } = useContext(LiveQuestionContext);
    const optionIndex = ["A", "B", "C", "D"];
    const allAnswers = useRef([]);
    const router = useRouter();

    const submitAnswer = ()=>{
        endExam(allAnswers.current)
        router.push('./exam-result')
    }


    useEffect(() => {
        allAnswers.current = Array.from({ length: allquestions.length }, () => null);
        startExam()
        
    }, [])
    return (
        <>
            {allquestions && allquestions.map((question, q_index) => (
                <div key={q_index} className="w-full mt-1.5 md:mt-2 h-auto px-1 md:px-1.5">
                    <div className="pb-2 px-1.5 md:px-2 w-full h-auto bg-white rounded-md">
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
                                    <input type="radio"
                                        id={`${question.question}-${index}`}
                                        name={question.question}
                                        className="hidden peer"
                                        onChange={() => allAnswers.current[q_index] = option}
                                    />
                                    <label htmlFor={`${question.question}-${index}`} className="h-full aspect-square rounded-full border shadow-sm shadow-gray-500 flex justify-center items-center pt-0.5 peer-checked:border-black peer-checked:bg-black peer-checked:text-white">{optionIndex[index]}</label>
                                    <label htmlFor={`${question.question}-${index}`}
                                        dangerouslySetInnerHTML={{
                                            __html: option,
                                        }}
                                    ></label>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            ))}

            <div className="fixed right-0 flex items-center justify-center w-full h-0 bottom-5">
                <button onClick={submitAnswer} className="w-36 text-xl font-medium text-white bg-gradient-to-r from-[#fbc026] to-[#9a7617] rounded-full h-7 flex justify-center items-center">
                    Submit
                </button>
            </div>
        </>
    );
}
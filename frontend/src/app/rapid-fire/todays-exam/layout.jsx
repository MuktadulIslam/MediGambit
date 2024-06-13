"use client"
import { useEffect, useRef, useState } from "react";
import questions from "../../../../data/questions.json";
import { RapidQuestionContext } from "../../../AllContexts.jsx"


export default function Layout({ children }) {
    const [allquestions, setAllquestions] = useState(questions);
    const [examdetails, setExamdetails] = useState({
        examId: "66573d5eec59e7894a5dd21c",
        examname: {
            name: "Test Exam 2024",
            bnName: "নির্বাচনী পরীক্ষা ২০২৪"
        },
        examtopic: {
            name: "Gazipur Cantonment College",
            bnName: "গাজীপুর ক্যান্টনমেন্ট কলেজ"
        },
        examsubject: {
            name: "Biology 1st Paper",
            bnName: "জীববিজ্ঞান ১ম পত্র"
        }
    })
    const [allAnswers, setAllAnswers] = useState(Array.from({ length: allquestions.length }, () => null));
    const [totalMark, setTotalMark] = useState(0);
    const [maxMark, setMaxMark] = useState(allquestions.length * 7);
    const [totalTime, setTotalTime] = useState(0);


    return (
        <>
            <div className="mt-3 md:mt-4 w-full h-[3.5rem] bg-[#75c6ca] py-1 shadow-md shadow-gray-600">
                <div className="flex items-center justify-center w-full h-6">
                    <div className="h-full px-6 md:px-10 max-w-[95%] bg-white rounded-full text-gray-500 text-base md:text-lg font-semibold">Rapid Fire : রুই মাছ (আঁইশ)</div>
                </div>
                <div className="flex items-baseline justify-between w-full px-2 mt-1 h-7 md:px-3">
                    <div className="text-sm text-white md:text-base">সবার জন্য উন্মুক্ত</div>
                    <div className="bg-white border border-gray-600 text-gray-600  h-4 md:h-5 px-1 rounded-full flex pr-1.5 text-xs md:text-sm">
                        <div className="h-full mr-0.5 flex items-center">
                            <span className="w-2.5 md:w-3 aspect-square rounded-full bg-red-500 inline-block"></span>
                        </div>
                        Rapid Fire
                    </div>
                </div>
            </div>

            <RapidQuestionContext.Provider value={{ allAnswers, setAllAnswers, maxMark, totalMark, setTotalMark, totalTime, setTotalTime, allquestions, examdetails}}>
                {children}
            </RapidQuestionContext.Provider>
        </>
    );
}

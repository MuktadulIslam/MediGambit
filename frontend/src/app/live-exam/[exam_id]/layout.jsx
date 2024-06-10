"use client"
import { useEffect, useRef, useState } from "react";
import questions from "../../../../data/questions.json";
import { LiveQuestionContext } from "../../../AllContexts.jsx"


export default function Layout({ children }) {
    const [allquestions, setAllquestions] = useState(questions);
    const [examdetails, setExamdetails] = useState({
        examId: "66573d5eec59e7894a5dd21c",
        examname: {
            name: "Test Exam 2024",
            bnName: "নির্বাচনী পরীক্ষা ২০২৪"
        },
        examtopic: {
            name: "রুইমাছ Chapter Final",
            bnName: "রুইমাছ Chapter Final"
        },
        examsubject: {
            name: "Biology 1st Paper",
            bnName: "জীববিজ্ঞান ১ম পত্র"
        },
        negativeMark: 0,
        positiveMark: 1
    })
    const [allAnswers, setAllAnswers] = useState(null);
    const [totalMarks, setTotalMarks] = useState(0);
    const [maxMarks, setMaxMarks] = useState(allquestions.length * examdetails.positiveMark);
    const [totalTime, setTotalTime] = useState(0);


    return (
        <>
            <div className="mt-3 md:mt-4 w-full h-16 bg-[#75c6ca] py-1 shadow-md shadow-gray-600">
                <div className="w-full h-6 flex justify-center items-center">
                <div className="h-full px-6 md:px-10 max-w-[95%] bg-white rounded-full text-gray-500 text-base md:text-lg font-semibold">{examdetails.examtopic.name}</div>
                </div>
                <div className="w-full h-7 mt-2 flex justify-between items-baseline px-2 md:px-3">
                    <div className="text-white text-sm md:text-base">সবার জন্য উন্মুক্ত</div>
                    <div className="w-24 h-3/4 bg-red-500 text-xs md:text-sm text-white font-semibold flex justify-center items-center"> Timer: 19:51</div>
                    <div className="bg-white border border-gray-600 text-gray-600  h-4 md:h-5 px-1 rounded-full flex pr-1.5 text-xs md:text-sm">
                        <div className="h-full mr-0.5 flex items-center">
                            <span className="w-2.5 md:w-3 aspect-square rounded-full bg-red-500 inline-block"></span>
                        </div>
                        Rapid Fire
                    </div>
                </div>
            </div>

            <LiveQuestionContext.Provider value={{ allAnswers, setAllAnswers, maxMarks, totalMarks, setTotalMarks, totalTime, setTotalTime, allquestions, examdetails}}>
                {children}
            </LiveQuestionContext.Provider>
        </>
    );
}

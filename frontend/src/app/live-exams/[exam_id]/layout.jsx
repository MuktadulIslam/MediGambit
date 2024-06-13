"use client"
import { useEffect, useRef, useState } from "react";
import questions from "../../../../data/questions.json";
import { LiveQuestionContext } from "../../../AllContexts.jsx"

function Timer({ playTimer, examtimer }) {
    const [timer, setTimer] = useState(examtimer.current);

    useEffect(() => {
        let intervalId;

        if (playTimer) {
            intervalId = setInterval(() => {
                setTimer((prevTimer) => {
                    if (prevTimer > 0) {
                        examtimer.current = prevTimer - 1;
                        return prevTimer - 1;
                    }
                    return prevTimer;
                });

            }, 1000);
        } else {
            clearInterval(intervalId);
        }

        return () => clearInterval(intervalId);
    }, [playTimer]);

    return (
        <>
            Timer: {Math.floor(timer / 60)}:{String(timer % 60).padStart(2, "0")}
        </>
    );
}


export default function Layout({ children }) {
    const [allquestions, setAllquestions] = useState(questions);
    const [examdetails, setExamdetails] = useState({
        examId: "4329797308023",
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
        negativeMark: 10,
        positiveMark: 1,
        duration: 1200,
    })

    const [allAnswers, setAllAnswers] = useState( Array.from({ length: allquestions.length }, () => null));
    const [totalTimeTaken, setTotalTimeTaken] = useState(null);

    // For Timer
    const [counterViewState, setCounterViewState] = useState(false)
    const examtimer = useRef(examdetails.duration);
    const [playTimer, setPlayTimer] = useState(true);

    const startExam = () => {
        setCounterViewState(true);
    }
    const endExam = (result) => {
        setAllAnswers(result)
        setPlayTimer(false);
        setTotalTimeTaken(examdetails.duration - examtimer.current)
    }


    return (
        <>
            <div className="mt-3 md:mt-4 w-full h-16 bg-[#75c6ca] py-1 shadow-md shadow-gray-600">
                <div className="flex items-center justify-center w-full h-6">
                    <div className="h-full px-6 md:px-10 max-w-[95%] bg-white rounded-full text-gray-500 text-base md:text-lg font-semibold">{examdetails.examtopic.name}</div>
                </div>
                <div className="flex items-baseline justify-between w-full px-2 mt-2 h-7 md:px-3">
                    <div className="text-sm text-white md:text-base">সবার জন্য উন্মুক্ত</div>
                    {counterViewState ? (
                        <div className="flex items-center justify-center w-24 text-xs font-semibold text-white bg-red-500 h-3/4 md:text-sm">
                            <Timer playTimer={playTimer} examtimer={examtimer} />
                        </div>
                    ) : ''}
                    <div className="bg-white border border-gray-600 text-gray-600  h-4 md:h-5 px-1 rounded-full flex pr-1.5 text-xs md:text-sm">
                        <div className="h-full mr-0.5 flex items-center">
                            <span className="w-2.5 md:w-3 aspect-square rounded-full bg-red-500 inline-block"></span>
                        </div>
                        LIVE
                    </div>
                </div>
            </div>

            <LiveQuestionContext.Provider value={{ examdetails, allquestions, allAnswers, startExam, endExam, totalTimeTaken}}>
                {children}
            </LiveQuestionContext.Provider>
        </>
    );
}

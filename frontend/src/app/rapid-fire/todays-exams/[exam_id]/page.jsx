"use client"
import { useContext, useEffect, useRef, useState } from "react";
import { RapidQuestionContext } from "@/AllContexts.jsx"
import { Roboto_Slab } from "next/font/google";
import { useRouter } from "next/navigation";
import Link from "next/link";

const robotoSlab = Roboto_Slab({
    weight: ["600"],
    style: ["normal"],
    subsets: ["latin"]
});

function Timer({ timerReseter, examtimer }) {
    const [timer, setTimer] = useState();
    const router = useRouter();

    useEffect(() => {
        setTimer(0)
        const intervalId = setInterval(() => {
            setTimer((prevTimer) => {
                examtimer.current = prevTimer + 1;
                return prevTimer + 1;
            });
        }, 1000);
        return () => clearInterval(intervalId);
    }, [timerReseter]);

    return (
        <>
            {String(timer).padStart(2, "0")} sec
        </>
    );
}


export default function Page() {
    const { setAllAnswers, maxMark, totalMark, setTotalMark, totalTime, setTotalTime, allquestions } = useContext(RapidQuestionContext)
    const allAnswers = useRef([])

    const optionIndex = ["A", "B", "C", "D"];
    const examtimer = useRef(0);
    const timerReseter = useRef(true);


    const [viewResult, setViewResult] = useState(false);
    const currentQuestionIndex = useRef(1)
    const [currentQuestion, setCurrentQuestion] = useState(allquestions[currentQuestionIndex.current - 1]);


    const setAnwer = () => {
        const i = currentQuestionIndex.current - 1;

        allAnswers.current[i].submitTime = examtimer.current;
        const submitTime = examtimer.current;
        examtimer.current = 0;      // Reset the timer
        timerReseter.current = !timerReseter.current;      // For changing Timer component

        if (allAnswers.current[i].answer != null && allAnswers.current[i].answer == allquestions[i].correctAnswer) {
            if (submitTime < 8) allAnswers.current[i].mark = 7;
            else if (submitTime < 13) allAnswers.current[i].mark = 6;
            else if (submitTime < 17) allAnswers.current[i].mark = 5;
            else if (submitTime < 22) allAnswers.current[i].mark = 4;
            else if (submitTime < 27) allAnswers.current[ii].mark = 3;
            else if (submitTime < 32) allAnswers.current[i].mark = 2;
            else allAnswers.current[i].mark = 1;
        }
        else allAnswers.current[i].mark = 0;
    }

    const nextQuextion = () => {
        setAnwer()
        if (currentQuestionIndex.current >= allquestions.length) {
            // Here Set the "allAnswers.current" to the backend
            const temp = [];
            allAnswers.current.forEach((answer)=>{
                temp.push(answer.answer)
            })
            setAllAnswers(temp)
            setTotalMark(getTotalMarks());
            setTotalTime(getTotalTime());

            setViewResult(true)
        }
        else {
            currentQuestionIndex.current += 1;
            setCurrentQuestion(allquestions[currentQuestionIndex.current - 1]);
            document.querySelectorAll('input[type="radio"]').forEach(function (input) {
                input.checked = false;
            });
        }
    }

    const getTotalMarks = () => {
        let totalMarks = 0;
        allAnswers.current.forEach((answer) => {
            totalMarks += answer.mark;
        });
        return totalMarks;
    };

    const getTotalTime = () => {
        let totalTime = 0;
        allAnswers.current.forEach((answer) => {
            totalTime += answer.submitTime;
        });
        return totalTime;
    }

    useEffect(() => {
        const len = allquestions.length;
        const temp = [];
        for (let i = 0; i < len; i++) {
            temp.push({
                submitTime: null,
                answer: null,
                mark: 0
            })
        }
        allAnswers.current = temp;

    }, [])



    return (<>
        <div className="absolute top-0 flex flex-col justify-between w-full gap-5 pt-44 md:pt-48 min-h-dvh">
            <div>
                {viewResult ? <>
                    <div className="mt-2 mb-4 text-sm sm:mt-3 md:mt-5 sm:mb-6 md:text-base">
                        <div className="w-full h-12 text-xl text-center text-white">
                            Well done!<br /> You made it!
                        </div>

                        <div className="my-4 md:my-6 h-6 md:h-7 w-40 mx-auto text-base md:text-lg text-center bg-[#f44336] text-white shadow-sm shadow-gray-600">
                            Rapid Fire Results
                        </div>

                        <div className="mt-1.5 w-full h-auto px-1 grid grid-cols-2 gap-0.5 md:gap-2 *:w-full *:min-h-7 *:flex *:justify-center *:items-center">
                            {allAnswers.current.map((answer, index) => (
                                <div key={index} className="">
                                    <p className="w-48 md:w-64 text-center text-sm md:text-base py-0.5 rounded-full bg-white">
                                        Question {index + 1}: <span className="text-red-500">{answer.submitTime} s</span> : {answer.mark} marks
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="flex items-center justify-center w-full h-auto px-5 sm:px-10 md:px-16">
                        <div className="w-full py-2 text-lg font-medium text-center text-black bg-white md:text-xl">
                            Hlw <span className="text-red-500">Himel</span>, <br />
                            You earn fantastic marks. <br />
                            Total marks: <span className="text-red-500">{totalMark}/{maxMark}</span> <br />
                            Time consumed: <span className="text-red-500">{totalTime} s</span>
                        </div>
                    </div>
                </> :
                    <>
                        <div className="mt-2 mb-4 sm:mt-3 md:mt-5 sm:mb-6">
                            <div className="w-full h-6 text-xs text-center text-white">
                                Timer: <Timer timerReseter={timerReseter.current} examtimer={examtimer} />
                            </div>

                            <div className="h-6 w-40 mx-auto text-center bg-[#f44336] text-white shadow-sm shadow-gray-600">Question {currentQuestionIndex.current}</div>
                        </div>

                        <div className="w-full h-auto px-2 md:px-3">
                            <div className="mt-2 pb-2 px-1.5 md:px-2 w-full h-auto bg-white rounded-md">
                                {currentQuestion.questionImg && (
                                    <div className="w-full mt-2 max-w-96">
                                        <img
                                            src={currentQuestion.questionImg}
                                            alt=""
                                            className="w-full"
                                        />
                                    </div>
                                )}
                                <div className="flex items-start gap-2 mb-2">
                                    <span className={`${robotoSlab.className} text-base font-semibold`}>{currentQuestionIndex.current}.</span>
                                    <div className="pt-0.5"
                                        dangerouslySetInnerHTML={{
                                            __html: currentQuestion.question,
                                        }}
                                    ></div>
                                </div>
                                <div className="px-3 flex flex-col space-y-2 *:h-5">
                                    {currentQuestion.options.map((option, index) => (
                                        <div key={index} className="flex gap-3">
                                            <input type="radio"
                                                id={`${currentQuestion.question}-${index}`}
                                                name={currentQuestion.question}
                                                className="hidden peer"
                                                onChange={() => allAnswers.current[currentQuestionIndex.current - 1].answer = option}
                                            />
                                            <label htmlFor={`${currentQuestion.question}-${index}`} className="h-full aspect-square rounded-full border shadow-sm shadow-gray-500 flex justify-center items-center pt-0.5 peer-checked:border-black peer-checked:bg-black peer-checked:text-white">{optionIndex[index]}</label>
                                            <label htmlFor={`${currentQuestion.question}-${index}`}
                                                dangerouslySetInnerHTML={{
                                                    __html: option,
                                                }}
                                            ></label>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <div className="w-full h-6 mt-2 text-xs text-center text-white">Remaining Question: {allquestions.length - currentQuestionIndex.current}</div>
                        </div>
                    </>
                }
            </div>

            {viewResult ? <>
                <div className="h-7 md:h-8 mb-2 md:mb-3 w-full flex justify-evenly *:flex *:justify-center *:items-center *:rounded-full text-white">
                    <Link href="./exam-result" className="w-40 h-full bg-gradient-to-r from-[#e03e22] to-[#997417] text-base">View Result</Link>
                    <Link href='./position' className="w-40 h-full bg-gradient-to-r from-[#f7bc25] to-[#947119] text-lg">Your Position</Link>
                </div>
            </> :
                <div className="h-7 md:h-8 mb-2 md:mb-3 w-full flex justify-evenly *:flex *:justify-center *:items-center *:rounded-full text-white">
                    <Link href="/" className="w-40 h-full bg-gradient-to-r from-[#e03e22] to-[#997417] text-sm">Leaving in Middle</Link>
                    <button onClick={nextQuextion} className="w-40 h-full bg-gradient-to-r from-[#f7bc25] to-[#947119] text-lg">
                        {currentQuestionIndex.current >= allquestions.length ? "Finished" : "Next"}
                    </button>
                </div>
            }
        </div>
    </>)
}
"use client"
import { useEffect, useRef, useState } from "react";
import questions from "../../../../data/questions.json";
import { Roboto_Slab } from "next/font/google";
import Link from "next/link";
const robotoSlab = Roboto_Slab({
    weight: ["600"],
    style:["normal"],
    subsets: ["latin"]
});

export function Timer({ timerReseter, examtimer }) {
    const [timer, setTimer] = useState();

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
    const optionIndex = ["A", "B", "C", "D"];
    const examtimer = useRef(0);
    const timerReseter = useRef(true);

    const allAnswers = useRef([])
    const [viewResult, setViewResult] = useState(false);
    const [allquestions, setAllquestions] = useState(questions);
    const currentQuestionIndex = useRef(1)
    const [currentQuestion, setCurrentQuestion] = useState(questions[currentQuestionIndex.current - 1]);


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


    const getTotalMarks = () => {
        let totalMarks = 0;
        allAnswers.current.forEach((answer) => {
            totalMarks += answer.mark;
        });
        return totalMarks;
    };
    const getMaxMark = () => {
        return allquestions.length * 7;
    }
    const getTotalTime = () => {
        let totalTime = 0;
        allAnswers.current.forEach((answer) => {
            totalTime += answer.submitTime;
        });
        return totalTime;
    }


    return (<>
        <div className="pt-28 md:pt-32 absolute top-0 min-h-screen w-full flex flex-col justify-between gap-5">
            <div>
                <div className="mt-3 md:mt-4 w-full h-[3.5rem] bg-[#75c6ca] py-1">
                    <div className="w-full h-6 flex justify-center items-center">
                        <div className="h-full px-4 max-w-[95%] bg-white rounded-full text-gray-700 text-base md:text-lg font-semibold">Rapid Fire : রুই মাছ (আঁইশ)</div>
                    </div>
                    <div className="w-full h-7 mt-1 flex justify-between items-baseline px-2 md:px-3">
                        <div className="text-white text-sm md:text-base">সবার জন্য উন্মুক্ত</div>
                        <div className="bg-white border border-gray-600 text-gray-600  h-4 md:h-5 px-1 rounded-full flex pr-1.5 text-xs md:text-sm">
                            <div className="h-full mr-0.5 flex items-center">
                                <span className="w-2.5 md:w-3 aspect-square rounded-full bg-red-500 inline-block"></span>
                            </div>
                            Rapid Fire
                        </div>
                    </div>
                </div>


                {viewResult ? <>
                    <div className="mt-2 sm:mt-3 md:mt-5 mb-4 sm:mb-6 text-sm md:text-base">
                        <div className="h-12 w-full text-center text-xl text-white">
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

                    <div className="h-auto w-full px-5 sm:px-10 md:px-16 flex justify-center items-center">
                        <div className="w-full py-2 bg-white text-black text-lg md:text-xl text-center font-medium">
                            Hlw <span className="text-red-500">Himel</span>, <br />
                            You earn fantastic marks. <br />
                            Total marks: <span className="text-red-500">{getTotalMarks()}/{getMaxMark()}</span> <br />
                            Time consumed: <span className="text-red-500">{getTotalTime()} s</span>
                        </div>
                    </div>
                </> :
                    <>
                        <div className="mt-2 sm:mt-3 md:mt-5 mb-4 sm:mb-6">
                            <div className="h-6 w-full text-center text-xs text-white">
                                Timer: <Timer timerReseter={timerReseter.current} examtimer={examtimer} />
                            </div>

                            <div className="h-6 w-40 mx-auto text-center bg-[#f44336] text-white shadow-sm shadow-gray-600">Question {currentQuestionIndex.current}</div>
                        </div>

                        <div>
                            <div className="mt-2 pb-2 px-2 md:px-4 pc:px-6 w-full h-auto bg-white">
                                {currentQuestion.questionImg && (
                                    <div className="w-full max-w-96 mt-2">
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
                                                className="peer hidden"
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

                            <div className="mt-2 h-6 w-full text-center text-xs text-white">Remaining Question: {allquestions.length - currentQuestionIndex.current}</div>
                        </div>
                    </>
                }
            </div>

            {viewResult ? <>
                <div className="h-7 md:h-8 mb-2 md:mb-3 w-full flex justify-evenly *:flex *:justify-center *:items-center *:rounded-full text-white">
                    <Link href="./todays-exam/question-paper" className="w-40 h-full bg-gradient-to-r from-[#e03e22] to-[#997417] text-sm">Question Paper</Link>
                    <Link href="./todays-exam/position" className="w-40 h-full bg-gradient-to-r from-[#f7bc25] to-[#947119] text-lg">Your Position</Link>
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
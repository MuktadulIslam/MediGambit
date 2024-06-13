"use client"
import { useEffect, useRef } from 'react';
import { useRouter } from 'next/navigation'

export default function PDFDownload({ questions, examdetails }) {
    const router = useRouter();
    const optionIndex = ["A", "B", "C", "D"];
    const examtopic = (examdetails != null && examdetails.examtopic != null && examdetails.examtopic.bnName != null) ? examdetails.examtopic.bnName : "গাজীপুর ক্যান্টনমেন্ট কলেজ";
    const examname = (examdetails != null && examdetails.examname != null && examdetails.examname.bnName != null) ? examdetails.examname.bnName : "নির্বাচনী পরীক্ষা ২০২৪";
    const examsubject = (examdetails != null && examdetails.examsubject != null && examdetails.examsubject.bnName != null) ? examdetails.examsubject.bnName : "জীববিজ্ঞান ১ম পত্র";

    const firstTimeMount = useRef(true)
    useEffect(() => {
        if (firstTimeMount.current) {
            window.print();
            firstTimeMount.current = false;
        }
    }, []);

    return (<>
        <div className="bg-white">
            <div className='absolute top-0 z-50 w-full h-auto bg-white border-b-2 border-black'>
                <div className="flex items-center justify-center py-5 h-36 md:h-40">
                    <img src="/imgs/icons/medigambit.png" alt="" className="object-cover h-full" />
                </div>
                <div className="flex justify-center w-full h-6">
                    <h3 className="flex items-center h-full px-6 text-lg font-bold rounded-full">{examtopic}</h3>
                </div>
                <div className="flex justify-between w-full h-5 px-1 md:px-2">
                    <p className="text-sm">{examsubject}</p>
                    <p className="text-sm">{examname}</p>
                </div>
            </div>

            <div className="w-full px-1 pt-6 sm:px-2 md:px-4">
                <div className="gap-3 space-y-2 columns-2 pb-14">
                    {
                        questions.map((question, index) =>
                            <div key={index} className="relative text-sm card-white">
                                <div className="flex items-start gap-2 mb-2">
                                    <span>{index + 1}.</span>
                                    <div dangerouslySetInnerHTML={{ __html: question.question }}></div>
                                </div>

                                <div className="grid gap-1 mb-2">
                                    {
                                        question.options.map((o, oIndex) =>
                                            <div key={oIndex} className="flex items-start gap-2">
                                                <div className="flex items-center justify-center w-5 h-5 bg-white border rounded-full shadow-md">{optionIndex[oIndex]}</div>
                                                <div dangerouslySetInnerHTML={{ __html: o }}></div>
                                            </div>)
                                    }
                                </div>
                                <img src="/imgs/icons/medigambit.png" className="absolute w-12 auto right-2 bottom-1" />
                            </div>)
                    }
                </div>
            </div>

            <div className="w-full h-auto">
                <div className='w-full text-lg font-semibold text-center text-gray-600 h-7'>উত্তরপত্র</div>
                <div className="px-1 columns-2 sm:px-2 md:px-4 ">
                    {questions.map((question, q_index) =>
                        <div key={q_index} className="relative flex items-center text-sm h-7 card-white">
                            <div className='w-6 text-base'>{q_index + 1}. </div>
                            <div className="flex gap-2">
                                {question.options.map((option, index) => (
                                    <div key={index} className={`w-5 h-5 flex justify-center items-center shadow-md rounded-full border ${option == question.correctAnswer ? 'text-white border-gray-900 border-[10px]' : "bg-white"}`}>{optionIndex[index]}</div>
                                ))}
                            </div>
                        </div>)
                    }
                </div>
            </div>
        </div>
    </>)
}
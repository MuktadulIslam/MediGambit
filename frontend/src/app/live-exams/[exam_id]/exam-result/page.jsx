"use client"
import { useContext, useEffect, useRef } from "react";
import { LiveQuestionContext } from "../../../../AllContexts.jsx"
import PerformanceComponent from "@/components/PerformanceComponent.jsx";
import { useRouter } from "next/navigation";


const getTotalMark = (allquestions, allAnswers, positiveMark, negativeMark) => {
    let totalmark = 0;
    allAnswers.forEach((answer, index) => {
        if (answer != null) {
            if (answer == allquestions.correctAnswer) totalmark += positiveMark;
            else totalmark -= negativeMark;
        }
    });
    if (totalmark < 0) return 0;
    else return totalmark;
}

export default function Page() {
    const { allquestions, examdetails, allAnswers, totalTimeTaken } = useContext(LiveQuestionContext);
    const maxMark = allquestions.length * examdetails.positiveMark;
    const totalmark = getTotalMark(allquestions, allAnswers, examdetails.positiveMark, examdetails.negativeMark);
    const router = useRouter();

    const viewPosition = ()=>{
        router.push('./position')
    }

    return (
        <>
            <PerformanceComponent allquestions={allquestions} allAnswers={allAnswers} totalMark={totalmark} maxMark={maxMark} totalTime={totalTimeTaken} />
            <div className="fixed right-0 flex items-center justify-center w-full h-0 bottom-5">
                <button onClick={viewPosition} className="w-40 text-base font-medium text-white bg-gradient-to-r from-[#fbc026] to-[#9a7617] rounded-full h-7 flex justify-center items-center">
                See Your Position
                </button>
            </div>
        </>
    );
}
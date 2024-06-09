"use client"
import { useState } from "react"
import bestFightersData from "../../../../../data/bestFighters.json"

export default function Page() {
    const [bestFighters, setBestFighters] = useState(bestFightersData)
    return (<>
        <div className="mt-4">
            <div className="w-full h-7 flex justify-center">
                <div className="h-full px-5 md:px-7 rounded-sm bg-red-500 text-white text-base md:text-lg font-semibold flex items-center">
                    Rapid Fire : Todays Best Fighters
                </div>
            </div>

            <div className="w-full mt-3 grid grid-cols-4 gap-1 md:gap-2 *:mt-2">
                {bestFighters.map((student, index) => (
                    <div key={index} className="w-full h-auto font-medium overflow-hidden px-0.5 md:px-1">
                        <div className="w-full h-16 md:h-20 flex justify-center items-center">
                            <img src={student.img_url} alt="" className="h-full aspect-square rounded-full object-cover" />
                        </div>
                        <div className="mt-1 w-full h-4 text-xs md:text-sm text-center whitespace-nowrap font-semibold text-gray-700">
                            {student.name}
                        </div>
                        <div className="w-full h-3 text-[9px] md:text-[10px] text-center font-medium whitespace-nowrap text-stone-600">
                            {student.college_name}
                        </div>
                        <div className="mt-0.5 w-full h-7 md:h-9 text-xs md:text-sm text-center leading-3 md:leading-4 text-gray-700">
                            <span className="font-sans font-semibold">{student.result}</span> marks <br /> <span className="font-sans font-semibold">{student.duration}</span> sec
                        </div>
                    </div>
                ))}

            </div>
        </div>
        <div className="fixed w-screen h-7 left-0 bottom-2 flex justify-center">
            <div className="w-60 h-full bg-gradient-to-r from-[#fec227] to-[#9b7617] text-xl text-white flex justify-center items-center rounded-full">Prepare for next battle</div>
        </div>
    </>)
}
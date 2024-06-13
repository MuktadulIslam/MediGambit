'use client'
import { AuthContext } from "@/AllContexts"
import { useContext } from "react";

export default function BestFightersComponent({bestFighters}) {
    const {user} = useContext(AuthContext)
    return (<>
        <div className="mt-4">
            <div className="flex justify-center w-full h-7">
                <div className="flex items-center h-full px-5 text-base font-semibold text-white bg-red-500 rounded-sm md:px-7 md:text-lg">
                    Rapid Fire : Todays Best Fighters
                </div>
            </div>

            <div className="w-full mt-3 grid grid-cols-4 gap-1 md:gap-2 *:mt-2">
                {bestFighters.map((student, index) => (
                    <div key={index} className={`w-full h-auto font-medium overflow-hidden py-0.5 px-0.5 md:px-1
                    ${user.regi_number == student.regi_number ? ' ring-4 ring-[#fcc026]' : ''} `}>
                        <div className="flex items-center justify-center w-full h-16 md:h-20">
                            <img src={student.img_url} alt="" className="object-cover h-full rounded-full aspect-square" />
                        </div>
                        <div className="w-full h-4 mt-1 text-xs font-semibold text-center text-gray-700 md:text-sm whitespace-nowrap">
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
    </>)
} 
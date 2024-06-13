"use client"
import { useState } from "react"
import bestFightersData from '../../../../../data/bestFighters.json'
import BestFightersComponent from "@/components/BestFightersComponent";
import Link from "next/link";

export default function Page() {
    const [bestFighters, setBestFighters] = useState(bestFightersData)
    return (
        <>
            <BestFightersComponent bestFighters={bestFighters} />

            <div className="fixed left-0 flex justify-center w-screen h-0 bottom-9">
                <Link href='/live-exams' className="w-60 h-7 bg-gradient-to-r from-[#fec227] to-[#9b7617] text-xl text-white flex justify-center items-center rounded-full">
                    Prepare for next battle
                </Link>
            </div>
        </>
    );
}
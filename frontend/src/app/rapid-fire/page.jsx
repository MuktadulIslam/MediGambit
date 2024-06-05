import Link from "next/link";

export default function Page() {
    return (<>
        <div className="w-full h-auto">
            <div className="w-full h-12 flex justify-center items-center">
                <div className="h-2/3 px-8 rounded-full font-medium bg-[#d9d9d9] text-gray-600 text-lg flex justify-center items-center shadow-md shadow-gray-500">Rapid Fire : Rules & Regulations</div>
            </div>
            <div className="h-7 w-32 mx-auto bg-red-500 text-white flex justify-center items-center shadow-md shadow-gray-500">Time vs Marks</div>

            <div className="mt-1.5 w-full h-auto px-1 grid grid-cols-2 gap-0.5 md:gap-2 *:w-full *:min-h-7 *:flex *:justify-center *:items-center">
                <div className="">
                    <p className="w-44 md:w-60 text-center text-sm md:text-base py-0.5 rounded-full bg-white">0 to 7 seconds: 7 marks</p>
                </div>
                <div className="">
                    <p className="w-44 md:w-60 text-center text-sm md:text-base py-0.5 rounded-full bg-white">8 to 12 seconds: 6 marks</p>
                </div>
                <div className="">
                    <p className="w-44 md:w-60 text-center text-sm md:text-base py-0.5 rounded-full bg-white">13 to 16 seconds: 5 marks</p>
                </div>
                <div className="">
                    <p className="w-44 md:w-60 text-center text-sm md:text-base py-0.5 rounded-full bg-white">17 to 21 seconds: 4 marks</p>
                </div>
                <div className="">
                    <p className="w-44 md:w-60 text-center text-sm md:text-base py-0.5 rounded-full bg-white">22 to 26 seconds: 3 marks</p>
                </div>
                <div className="">
                    <p className="w-44 md:w-60 text-center text-sm md:text-base py-0.5 rounded-full bg-white">27 to 31 seconds: 2 marks</p>
                </div>
                <div className="">
                    <p className="w-44 md:w-60 text-center text-sm md:text-base py-0.5 rounded-full bg-white">Over 31 seconds: 1 marks</p>
                </div>
            </div>


            <div className="mt-5 mb-2 md:mt-7 h-7 w-32 mx-auto bg-red-500 text-white flex justify-center items-center shadow-md shadow-gray-500">Act vs Attitude</div>
            <div className="w-full text-sm md:text-base px-2 sm:px-3 md:px-10 flex flex-col space-y-1 sm:space-y-1.5 *:bg-white *:rounded-md *:w-full *:px-1.5 *:md:px-2.5 *:shadow-sm *:shadow-gray-600">
                <div className="">
                    Swift Response: Answer each question swiftly within the allotted time to earn maximum marks.
                </div>
                <div className="text-red-500">
                    Decisive Action: Delayed responses diminish your score; act with haste and precision.
                </div>
                <div className="">
                    Tactical Timing: Utilize every second wisely, for every moment counts in the heat of battle.
                </div>
                <div className="text-red-500">
                    Unyielding Resolve: Maintain focus and determination despite the ticking clock; falter not in the face of adversity.
                </div>
                <div className="">
                    Tactical Timing: Utilize every second wisely, for every moment counts in the heat of battle.
                </div>
                <div className="text-red-500">
                    Valor in Knowledge: Embrace the challenge with courage and knowledge, for each question is a battlefield to conquer.
                </div>
                <div className="">
                    Tactical Timing: Utilize every second wisely, for every moment counts in the heat of battle.
                </div>
            </div>

            <div className="mt-3 md:mt-4 w-full h-7 md:h-8 flex justify-evenly *:flex *:justify-center *:items-center *:rounded-full text-white">
                <Link href="/" className="h-full w-36 bg-gradient-to-r from-[#e03e22] to-[#997417]">Too scared now!</Link> 
                <Link href="./rapid-fire/todays-exam" className="h-full w-40 bg-gradient-to-r from-[#fdc127] to-[#9a7517]">I demand combat!</Link> 
            </div>
        </div>
    </>)
}
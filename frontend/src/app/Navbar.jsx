"use client"
import Link from "next/link";
import { Inter } from "next/font/google";
const inter = Inter({ subsets: ["latin"] });

export default function Navbar() {
    const showMenu = () => {
        const menu = document.getElementById("menu");
        const menu_button = document.getElementById("menu-button");

        if (menu.classList.contains('-translate-x-[110%]')) {
            menu.classList.remove("-translate-x-[110%]");
            menu_button.firstElementChild.classList.remove("opacity-0")
            menu_button.lastElementChild.classList.add("opacity-0")
        }
        else {
            menu.classList.add("-translate-x-[110%]");
            menu_button.firstElementChild.classList.add("opacity-0")
            menu_button.lastElementChild.classList.remove("opacity-0")
        }
    }

    return (<>
        <div className="z-40 w-full h-28 md:h-32 bg-white  rounded-b-[25px] md:rounded-b-[30px] relative flex justify-center items-center shadow-md shadow-gray-600">
            <button id="menu-button" onClick={showMenu} className="absolute w-12 h-12 top-4 left-2 flex justify-center items-center flex-col">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="absolute h-2/3 w-2/3 opacity-0 transition-all duration-300">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="absolute h-2/3 w-2/3  transition-all duration-300">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                </svg>

            </button>
            <div id="menu" className={`absolute transition-all duration-300 -translate-x-[110%] top-20 left-0 text-[15px] w-60 h-[500px] bg-white flex flex-col *:h-10 *:w-full *:flex *:items-center *:pl-2`}>
                <div className="justify-between pr-1 pl-0 mb-4">
                    <Link href="" className="h-full flex items-center">
                        <img src="/imgs/profiles/profile13.jpeg" alt="" className="h-5/6 aspect-square object-cover rounded-full -translate-x-1"/>
                        <span className={`${inter.className} font-semibold`}>ID: 496473976</span>
                    </Link>
                    <div className="h-2/3 px-1.5 bg-red-500 rounded-sm font-sans font-semibold text-sm flex justify-center items-center text-gray-100">Logout</div>
                </div>
                <Link href="" className="text-[19px] font-sans font-semibold active:text-red-500 pc:hover:text-red-500 pc:hover:pl-6 transition-all duration-300">Home Page</Link>
                <Link href="" className="active:text-red-500 pc:hover:text-red-500 pc:hover:pl-6 transition-all duration-300">
                    Join LIVE exam
                    <span className="inline-block w-3 h-3 rounded-full bg-green-400 ml-1 shadow-sm shadow-gray-400"></span>
                </Link>
                <Link href="" className="active:text-red-500 pc:hover:text-red-500 pc:hover:pl-6 transition-all duration-300">
                    Todays Rapid Fire
                    <span className="inline-block w-3 h-3 rounded-full bg-green-400 ml-1 shadow-sm shadow-gray-400"></span>
                </Link>
                <Link href="" className="active:text-red-500 pc:hover:text-red-500 pc:hover:pl-6 transition-all duration-300">
                    Dual to Death
                    <span className="w-3 h-3 rounded-full bg-red-500 text-white text-[10px] flex justify-center items-center ml-1 shadow-sm shadow-gray-400">
                        2
                    </span>
                </Link>
                <Link href="" className="active:text-red-500 pc:hover:text-red-500 pc:hover:pl-6 transition-all duration-300">Good Night SHOW</Link>
                <Link href="" className="active:text-red-500 pc:hover:text-red-500 pc:hover:pl-6 transition-all duration-300">Hidden Treasure</Link>
                <Link href="" className="active:text-red-500 pc:hover:text-red-500 pc:hover:pl-6 transition-all duration-300">Chapter Based Questions</Link>
                <Link href="" className="active:text-red-500 pc:hover:text-red-500 pc:hover:pl-6 transition-all duration-300">One-shot Revision</Link>
                <Link href="" className="active:text-red-500 pc:hover:text-red-500 pc:hover:pl-6 transition-all duration-300">Hot Questions</Link>
                <Link href="" className="active:text-red-500 pc:hover:text-red-500 pc:hover:pl-6 transition-all duration-300">Most Failed Questions</Link>
                <Link href="" className="active:text-red-500 pc:hover:text-red-500 pc:hover:pl-6 transition-all duration-300">Personal Achivements</Link>
                <Link href="" className="active:text-red-500 pc:hover:text-red-500 pc:hover:pl-6 transition-all duration-300">Score Board</Link>
                <Link href="" className="active:text-red-500 pc:hover:text-red-500 pc:hover:pl-6 transition-all duration-300">Troopers Cafe: Support</Link>
            </div>

            <Link href="/" className="h-2/3">
                <img src="/imgs/icons/medigambit.png" alt="medigambit" className="h-full w-auto object-cover" />
            </Link>
        </div>
    </>)
}
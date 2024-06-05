"use client"
import Link from "next/link";

export default function RegistrationPopup() {
    const removePopup = () => {
        const popupDiv = document.getElementById("reg-popup");
        popupDiv.classList.add("hidden", "invisible");
    }

    return (<>
        <div id="reg-popup" className="z-50 absolute top-0 w-full h-screen bg-white bg-opacity-30 backdrop-blur-sm">
            <div className="w-[90%] max-w-96 h-auto absolute top-4 flex gap-1">
                <div className="h-12 translate-y-3 bg-white aspect-[3/2] flex items-center justify-center">
                    <svg className="h-full w-full" viewBox="0 0 55 45" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M55 21.0938C55 19.0169 53.7635 17.223 51.9444 16.2492V2.81338C51.9444 2.04434 51.278 0 48.8889 0C48.209 0 47.5339 0.20918 46.9811 0.616992L38.8619 6.59619C34.7837 9.59678 29.6637 11.25 24.4444 11.25H6.11111C2.73568 11.25 0 13.7681 0 16.875V25.3125C0 28.4194 2.73568 30.9375 6.11111 30.9375H9.32899C9.19627 31.8586 9.12083 32.7955 9.12083 33.75C9.12083 37.2454 10.005 40.5483 11.5615 43.5006C12.057 44.4401 13.1389 45 14.2733 45H21.366C23.8534 45 25.3468 42.3773 23.8391 40.5563C22.2731 38.6648 21.3421 36.3059 21.3421 33.75C21.3421 32.7735 21.4968 31.8349 21.7632 30.9375H24.4444C29.6637 30.9375 34.7837 32.5907 38.8609 35.5913L46.9801 41.5705C47.5216 41.9694 48.1944 42.1869 48.8879 42.1875C51.2674 42.1875 51.9435 40.1854 51.9435 39.375V25.9392C53.7635 24.9645 55 23.1706 55 21.0938ZM45.8333 33.5232L42.6775 31.1994C37.5213 27.4025 31.0444 25.3125 24.4444 25.3125V16.875C31.0444 16.875 37.5213 14.785 42.6775 10.9881L45.8333 8.66426V33.5232Z" fill="#F06565" />
                    </svg>

                </div>
                <div className="h-auto flex-1 bg-white text-base p-3 rounded-md shadow-md shadow-gray-600 font-medium">
                হ্যালো Future Doctor, তোমাকে সার্ভ করতে আমরা প্রস্তুত! দ্রুত রেজিস্ট্রেশন করে ফেলো!
                <br/>
                <Link href="/auth/login" onClick={removePopup} className="text-blue-600">Click Here...</Link>
                </div>
            </div>
        </div>
    </>)
}
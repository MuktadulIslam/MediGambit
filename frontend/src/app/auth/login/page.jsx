"use client"
import { FaGoogle } from "react-icons/fa";
import { useRouter } from 'next/navigation'

export default function Page() {
    const router = useRouter()
    const googleLoginHandler = () => {
        router.push('/auth/registration')
    };

    return (<>
        <button onClick={googleLoginHandler} className="h-[400px] w-full flex justify-center items-center">
            <div className="flex flex-col items-center gap-2 p-4 border-2 border-gray-100 text-gray-100 rounded-lg">
                <FaGoogle className="w-10 h-10" />
                <p className="text-center">Login with Google</p>
            </div>
        </button>
    </>)
}
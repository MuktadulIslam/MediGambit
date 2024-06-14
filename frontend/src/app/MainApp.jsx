'use client'
import { AuthContext } from "@/AllContexts";
import Navbar from "./Navbar";
import RegistrationPopup from "./RegistrationPopup";
import { useState } from "react";

export default function MainApp({children}) {
    const [user, setUser] = useState({
        "name": "Mehedi Hasan",
        "regi_number": 1928627,
        "college": "নটর ডেম কলেজ",
        "district": "Gopalganj",
        "profileImg": "/imgs/profiles/profile9.jpeg",
    })
    const [hasLiveExam, setHasLiveExam] = useState(true);
    const [hasRapidFire, setHasRapidFire] = useState(true);
    const [numberOfDTD, setNumberOfDTD] = useState(5);
    return (<>
        <AuthContext.Provider value={{user, setUser, hasLiveExam, hasRapidFire, numberOfDTD}}>
            <Navbar />
            <RegistrationPopup/>
            { children }
        </AuthContext.Provider>
    </>)
}
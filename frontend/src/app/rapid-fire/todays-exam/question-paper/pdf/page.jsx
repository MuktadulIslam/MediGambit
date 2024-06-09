"use client"

import { useContext } from "react"
import { RapidQuestionContext } from "../../../../../AllContexts.jsx"
import PDFDownload from "@/components/PDFDownload.jsx"

export default function Page() {
    const { allquestions, examdetails} = useContext(RapidQuestionContext)

    return (<>
        <PDFDownload questions={allquestions} examdetails={examdetails}/>
    </>)
}
"use client";

import TextEditor from "@/components/editor";
import { PDFViewer } from "@react-pdf/renderer";
import PDFDocumentComponent from "@/components/pdf";
import { useState } from "react";

export default function Home() {
    const [reportMetaData, setReportMetaData] = useState({
        title: "",
        date: "",
        author: "",
        department: "",
    });

    const [reportBodyText, setReportBodyText] = useState("");

    const [isForm, setIsForm] = useState(true);

    console.log(reportMetaData);

    return (
        <main className="h-full">
            {isForm ? (
                <TextEditor
                    reportMetaData={reportMetaData}
                    setReportMetaData={setReportMetaData}
                    reportBodyText={reportBodyText}
                    setReportBodyText={setReportBodyText}
                    setIsForm={setIsForm}
                />
            ) : (
                <PDFViewer className="w-full h-full">
                    <PDFDocumentComponent 
                        reportMetaData={reportMetaData} 
                        reportBodyText={reportBodyText}
                    />
                </PDFViewer>
            )}
        </main>
    );
}

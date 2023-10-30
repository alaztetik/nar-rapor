"use client";

import TextEditor from "@/components/editor";
import { createContext, useState } from "react";

export const PageContext = createContext(null);

export default function Home() {
    const [reportMetaData, setReportMetaData] = useState({
        title: "",
        date: "",
        author: "",
        department: "",
    });

    const [reportBodyText, setReportBodyText] = useState("");

    return (
        <main className="">
            <PageContext.Provider
                value={{
                    reportMetaData,
                    setReportMetaData,
                    reportBodyText,
                    setReportBodyText,
                }}
            >
                <TextEditor />

                <div>
                    <p className="p-5">
                        <div>{reportBodyText}</div>
                        <br />
                        {reportMetaData.title}
                        <br />
                        {reportMetaData.date}
                        <br />
                        {reportMetaData.author}
                        <br />
                        {reportMetaData.department}
                    </p>
                </div>
            </PageContext.Provider>
        </main>
    );
}

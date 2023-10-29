import { Editor as PrimeEditor } from "primereact/editor";
import { TextInput } from "@mantine/core";

import { useState } from "react";

export default function TextEditor() {
    const [reportMetaData, setReportMetaData] = useState({
        title: "",
        date: "",
        author: "",
        department: "",
    });

    const [reportBodyText, setReportBodyText] = useState("");

    return (
        <main className="">
            <div className="flex flex-col p-5 gap-2">
                <div className="flex flex-row gap-2">
                    <TextInput
                        className="basis-1/2"
                        label="Rapor Başlığı"
                        description="örn. Granül Nem Kontrol Raporu"
                        value={reportMetaData.title}
                        onChange={(e) =>
                            setReportMetaData({
                                ...reportMetaData,
                                title: e.currentTarget.value,
                            })
                        }
                    />
                    <TextInput
                        className="basis-1/2"
                        label="Rapor Tarihi"
                        description="örn. 23 Ocak 2022"
                        value={reportMetaData.date}
                        onChange={(e) =>
                            setReportMetaData({
                                ...reportMetaData,
                                date: e.currentTarget.value,
                            })
                        }
                    />
                </div>
                <div className="flex flex-row gap-2">
                    <TextInput
                        className="basis-1/2"
                        label="Rapor Yazarı"
                        description="Ad Soyad"
                        value={reportMetaData.author}
                        onChange={(e) =>
                            setReportMetaData({
                                ...reportMetaData,
                                author: e.currentTarget.value,
                            })
                        }
                    />
                    <TextInput
                        className="basis-1/2"
                        label="Departmanı"
                        description="örn. Arge, Üretim, Kalite vb."
                        value={reportMetaData.department}
                        onChange={(e) =>
                            setReportMetaData({
                                ...reportMetaData,
                                department: e.currentTarget.value,
                            })
                        }
                    />
                </div>
            </div>
            <PrimeEditor
                className="p-5"
                value={reportBodyText}
                onTextChange={(e) => setReportBodyText(e.htmlValue)}
                style={{ height: "320px" }}
            />

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
        </main>
    );
}

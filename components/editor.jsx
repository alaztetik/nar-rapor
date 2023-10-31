import { Editor as PrimeEditor } from "primereact/editor";
import { TextInput, Button } from "@mantine/core";


export default function TextEditor({
    reportMetaData,
    setReportMetaData,
    reportBodyText,
    setReportBodyText,
    setIsForm
}) {

    return (
        //TODO remove control panel buttons and only allow for text and image input
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
                onTextChange={(e) => setReportBodyText(e.textValue)}
                style={{ height: "320px" }}
            />

            <div className="p-5">
                <Button onClick={() => setIsForm(false)} variant="filled" color="indigo" size="sm" radius="md">
                    PDF Oluştur
                </Button>
            </div>
        </main>
    );
}

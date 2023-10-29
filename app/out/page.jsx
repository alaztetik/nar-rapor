"use client";

import { PDFViewer } from "@react-pdf/renderer";
import PDFDocumentComponent from "../../components/pdf"

export default function PDFOutput() {
    return (
        <PDFViewer className="w-full h-full">
            <PDFDocumentComponent />
        </PDFViewer>
    );
}
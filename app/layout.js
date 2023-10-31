import "./globals.css";
import "@mantine/core/styles.css";
import { MantineProvider } from "@mantine/core";

export const metadata = {
  title: 'Nar Rapor',
  description: 'by Alaz Tetik',
};

export default function RootLayout({ children }) {
    return (
        <html lang="tr" className="text-lg">
            <MantineProvider>
                <body className="">{children}</body>
            </MantineProvider>
        </html>
    );
}

"use client";

import "./globals.css";
import "@mantine/core/styles.css";
import { MantineProvider } from "@mantine/core";

/* export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}; */

export default function RootLayout({ children }) {
    return (
        <html lang="tr">
            <MantineProvider>
                <body className="">{children}</body>
            </MantineProvider>
        </html>
    );
}

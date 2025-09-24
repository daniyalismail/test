'use client';
import "./globals.css";
import "primeflex/primeflex.css";
import "primeicons/primeicons.css";
import { PrimeReactProvider, PrimeReactContext } from 'primereact/api';
import "primereact/resources/themes/lara-light-blue/theme.css";
import 'primereact/resources/primereact.min.css';
import Header from "./Header";
import MainLayout from "./MainLayout";
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <PrimeReactProvider value={{ ripple: true }}>
          <MainLayout>
        {children}
          </MainLayout>
        </PrimeReactProvider>
      </body>
    </html>
  );
}

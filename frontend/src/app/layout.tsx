import "./globals.css"
import React from "react";

export const metadata = {
  title: "CodeVault",
  description: "Store and manage your code snippets",
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className = "bg-gray-100 text-gray-900 dark:bg-gray-900 dark:text-white">
        <div className = "min-h-screen flex flex-col">
          <header className = "bg-indigo-600 text-white p-4 font-bold text-lg">
            CodeVault Dashboard
          </header>
          <main className = "flex-1 container mx-auto px-4 py-6">{children}</main>
        </div>
      </body>
    </html>
  );
}
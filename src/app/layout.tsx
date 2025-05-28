import "./globals.css"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Portafolio | Camila Zambrano",
  description: "Portafolio profesional de Camila Zambrano",
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <body className="bg-[var(--background)] text-[var(--text)] font-sans">
        {children}
      </body>
    </html>
  )
}

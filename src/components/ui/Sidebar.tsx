"use client"

import { usePathname } from "next/navigation"

const menuItems = [
  { label: "Inicio", path: "/" },
  { label: "Sobre mí", path: "/sobre-mi" },
  { label: "Servicios", path: "/servicios" },
  { label: "Objetivos", path: "/objetivos" },
  { label: "Formación", path: "/formacion" },
  { label: "Proyecto", path: "/proyecto" },
  { label: "Testimonios", path: "/testimonios" },
  { label: "Contacto", path: "/contacto" },
  
]

export default function Sidebar() {
  const pathname = usePathname()

  return (
    <aside
      style={{
        width: "240px",
        minHeight: "100vh",
        background: "linear-gradient(to bottom, #fff, #fff5f7)",
        borderRight: "1px solid #f3f4f6",
        padding: "2rem 1rem",
        display: "flex",
        flexDirection: "column",
        gap: "1.2rem",
        boxShadow: "4px 0 12px rgba(255, 79, 112, 0.08)",
      }}
    >
      <h2
        style={{
          fontSize: "1.25rem",
          fontWeight: "700",
          color: "#FF4F70",
          marginBottom: "1.5rem",
          textAlign: "center",
        }}
      >
        🌸 Mi Portafolio
      </h2>

      {menuItems.map(({ label, path }) => {
        const isActive = pathname === path
        return (
          <a
            key={path}
            href={path}
            style={{
              padding: "0.75rem 1rem",
              borderRadius: "12px",
              color: isActive ? "#FF4F70" : "#374151",
              backgroundColor: isActive ? "#ffe1e7" : "transparent",
              fontWeight: 500,
              fontSize: "15px",
              textDecoration: "none",
              transition: "all 0.2s ease",
              boxShadow: isActive ? "0 0 10px rgba(255,79,112,0.3)" : "none",
            }}
          >
            {label}
          </a>
        )
      })}
    </aside>
  )
}

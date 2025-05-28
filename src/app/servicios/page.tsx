"use client"
import { useState } from "react"
import Sidebar from "@/components/ui/Sidebar"
import { Briefcase, Users, FileText, FolderOpen } from "lucide-react"

const servicios = [
  {
    titulo: "Asistencia administrativa",
    descripcion:
      "Apoyo en tareas operativas como gestión de correos, calendarios y documentos. (En formación, brindando soporte básico con supervisión)",
    icono: <Briefcase size={32} />,
  },
  {
    titulo: "Gestión de redes sociales",
    descripcion:
      "Aprendiendo a crear contenido, programar publicaciones y analizar métricas. Apoyo con tareas iniciales.",
    icono: <Users size={32} />,
  },
  {
    titulo: "Soporte a clientes",
    descripcion:
      "En proceso de formación en atención al cliente digital. Ofrezco apoyo en respuestas organizadas y amables.",
    icono: <FileText size={32} />,
  },
  {
    titulo: "Organización digital",
    descripcion:
      "Estructuración básica de archivos en la nube, aprendiendo a implementar orden y accesibilidad.",
    icono: <FolderOpen size={32} />,
  },
]

export default function Servicios() {
  const [index, setIndex] = useState(0)

  const siguiente = () => setIndex((prev) => (prev + 1) % servicios.length)
  const anterior = () =>
    setIndex((prev) => (prev - 1 + servicios.length) % servicios.length)

  return (
    <div
      style={{
        display: "flex",
        minHeight: "100vh",
        fontFamily: "Inter, sans-serif",
        background: "linear-gradient(to bottom right, #fff5f7, #ffe9ee)",
        flexDirection: "row",
      }}
    >
      <Sidebar />

      <main
        style={{
          flex: 1,
          padding: "4rem 2rem",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <h2
          style={{
            fontSize: "2rem",
            color: "#FF4F70",
            fontWeight: "700",
            marginBottom: "2.5rem",
            textAlign: "center",
          }}
        >
          Servicios que puedo ofrecer
        </h2>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "1.5rem",
            flexWrap: "wrap",
            justifyContent: "center",
            width: "100%",
          }}
        >
          <button
            onClick={anterior}
            style={{
              background: "#fff",
              border: "1px solid #fda4af",
              width: "40px",
              height: "40px",
              borderRadius: "9999px",
              fontSize: "1.25rem",
              color: "#f43f5e",
              cursor: "pointer",
              flexShrink: 0,
            }}
          >
            ‹
          </button>

          <div
            style={{
              backgroundColor: "#fff",
              borderRadius: "1rem",
              padding: "2rem",
              maxWidth: "600px",
              width: "100%",
              border: "1px solid #f3f4f6",
              boxShadow:
                "0 0 0 2px #fda4af40, 0 8px 24px rgba(244,63,94,0.1), 0 0 12px #fda4af66",
              textAlign: "center",
              transition: "all 0.3s ease",
            }}
          >
            <div
              style={{
                backgroundColor: "#FF4F70",
                color: "#fff",
                borderRadius: "9999px",
                width: "64px",
                height: "64px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                margin: "0 auto 1rem auto",
                boxShadow: "0 0 10px rgba(244,63,94,0.5)",
              }}
            >
              {servicios[index].icono}
            </div>
            <h3
              style={{
                fontSize: "1.25rem",
                fontWeight: "600",
                marginBottom: "0.75rem",
                color: "#1f1f1f",
              }}
            >
              {servicios[index].titulo}
            </h3>
            <p style={{ color: "#6b7280", lineHeight: "1.6" }}>
              {servicios[index].descripcion}
            </p>
          </div>

          <button
            onClick={siguiente}
            style={{
              background: "#fff",
              border: "1px solid #fda4af",
              width: "40px",
              height: "40px",
              borderRadius: "9999px",
              fontSize: "1.25rem",
              color: "#f43f5e",
              cursor: "pointer",
              flexShrink: 0,
            }}
          >
            ›
          </button>
        </div>
      </main>
    </div>
  )
}

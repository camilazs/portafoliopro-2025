"use client"
import { useState } from "react"
import Sidebar from "@/components/ui/Sidebar"

const objetivos = [
  {
    numero: "01",
    titulo: "Desarrollar habilidades",
    descripcion:
      "Perfeccionar mis conocimientos en herramientas digitales y metodologías de asistencia virtual para brindar un servicio cada vez más profesional.",
  },
  {
    numero: "02",
    titulo: "Ganar experiencia",
    descripcion:
      "Trabajar en proyectos reales que me permitan aplicar lo aprendido y construir un portafolio sólido de experiencias.",
  },
  {
    numero: "03",
    titulo: "Formarme con compromiso",
    descripcion:
      "Aprovechar al máximo mi etapa de formación para aprender con responsabilidad, actitud positiva y enfoque en la mejora continua.",
  },
]

export default function Objetivos() {
  const [index, setIndex] = useState(0)

  const siguiente = () => setIndex((prev) => (prev + 1) % objetivos.length)
  const anterior = () =>
    setIndex((prev) => (prev - 1 + objetivos.length) % objetivos.length)

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        minHeight: "100vh",
        fontFamily: "Inter, sans-serif",
        background: "linear-gradient(to bottom right, #fff5f7, #ffe9ee)",
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
          Mis objetivos
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
                width: "64px",
                height: "64px",
                backgroundColor: "#FF4F70",
                color: "#fff",
                fontWeight: "700",
                fontSize: "1.25rem",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                borderRadius: "9999px",
                margin: "0 auto 1rem auto",
                boxShadow: "0 0 10px rgba(244,63,94,0.5)",
              }}
            >
              {objetivos[index].numero}
            </div>
            <h3
              style={{
                fontSize: "1.25rem",
                fontWeight: "600",
                marginBottom: "0.75rem",
                color: "#1f1f1f",
              }}
            >
              {objetivos[index].titulo}
            </h3>
            <p style={{ color: "#6b7280", lineHeight: "1.6" }}>
              {objetivos[index].descripcion}
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

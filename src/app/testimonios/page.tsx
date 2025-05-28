"use client"
import Sidebar from "@/components/ui/Sidebar"

const testimonios = [
  {
    nombre: "Francisco Molina",
    texto:
      "Trabajar con ella ha sido una experiencia enriquecedora. Su responsabilidad y compromiso la hacen destacar.",
  },
  {
    nombre: "Sebastian Rojas",
    texto:
      "Tiene una actitud positiva y muchas ganas de aprender. Su progreso ha sido notable y constante.",
  },
]

export default function Testimonios() {
  return (
    <div
      style={{
        display: "flex",
        minHeight: "100vh",
        background: "linear-gradient(to bottom right, #fff5f7, #ffe9ee)",
        fontFamily: "Inter, sans-serif",
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
          Testimonios
        </h2>

        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            gap: "2rem",
            width: "100%",
            maxWidth: "1000px",
          }}
        >
          {testimonios.map((testi, index) => (
            <div
              key={index}
              style={{
                backgroundColor: "#fff",
                borderRadius: "1rem",
                padding: "2rem",
                width: "100%",
                maxWidth: "300px",
                boxShadow:
                  "0 0 0 2px #fda4af40, 0 8px 24px rgba(244,63,94,0.1), 0 0 12px #fda4af66",
                textAlign: "center",
              }}
            >
              <p style={{ color: "#6b7280", marginBottom: "1.25rem" }}>
                “{testi.texto}”
              </p>
              <h3
                style={{
                  fontWeight: 600,
                  color: "#FF4F70",
                  fontSize: "1rem",
                }}
              >
                {testi.nombre}
              </h3>
            </div>
          ))}
        </div>
      </main>
    </div>
  )
}

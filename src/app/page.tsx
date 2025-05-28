"use client"

import Sidebar from "@/components/ui/Sidebar"

export default function Inicio() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        minHeight: "100vh",
        fontFamily: "Inter, sans-serif",
        background: "linear-gradient(to bottom right, #fff5f7, #ffe9ee)",
      }}
    >
      <div style={{ display: "flex", flexDirection: "row" }}>
        <Sidebar />
        <main
          style={{
            flex: 1,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            padding: "2rem",
            textAlign: "center",
            width: "100%",
          }}
        >
          <div
            style={{
              width: "160px",
              height: "160px",
              borderRadius: "9999px",
              border: "2px solid #fda4af",
              overflow: "hidden",
              backgroundColor: "#eee",
              marginBottom: "1.5rem",
            }}
          >
            <img
              src="/foto.jpg"
              alt="Foto"
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
            />
          </div>

          <h1
            style={{
              fontSize: "2rem",
              fontWeight: 700,
              marginBottom: "0.5rem",
              color: "#1f1f1f",
            }}
          >
            Portafolio profesional <span style={{ color: "#FF4F70" }}>Camila Zambrano</span>
          </h1>

          <p
            style={{
              textTransform: "uppercase",
              fontSize: "0.9rem",
              color: "#6b7280",
              letterSpacing: "0.05em",
              marginTop: "0.5rem",
              maxWidth: "500px",
            }}
          >
            "No se trata solo de trabajar duro, sino de trabajar con propósito. La verdadera productividad nace de la pasión y la intención."
          </p>
        </main>
      </div>

      {/* Estilos responsivos */}
      <style jsx>{`
        @media (max-width: 768px) {
          div[style*='flex-direction: row'] {
            flex-direction: column;
          }

          main {
            padding: 2rem 1rem;
          }

          h1 {
            font-size: 1.5rem;
          }

          p {
            font-size: 0.8rem;
          }
        }
      `}</style>
    </div>
  )
}

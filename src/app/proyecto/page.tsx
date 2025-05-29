"use client"

import Sidebar from "@/components/ui/Sidebar"

export default function ProyectoPage() {
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
          padding: "2rem 1rem",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <h2
          style={{
            fontSize: "2rem",
            color: "#f43f5e",
            fontWeight: "700",
            marginBottom: "2rem",
            textAlign: "center",
          }}
        >
          Proyecto destacado
        </h2>

        <div
          style={{
            backgroundColor: "#fff",
            borderRadius: "1rem",
            padding: "2rem",
            width: "100%",
            maxWidth: "800px",
            border: "1px solid #f3f4f6",
            boxShadow:
              "0 0 0 2px #fda4af40, 0 8px 24px rgba(244,63,94,0.1), 0 0 12px #fda4af66",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "1.25rem",
            textAlign: "center",
          }}
        >
          <h3
            style={{
              fontSize: "1.25rem",
              fontWeight: "600",
              color: "#1f2937",
            }}
          >
            Taller Web con Next.js y Tailwind CSS
          </h3>

          <p
            style={{
              color: "#4b5563",
              lineHeight: "1.6",
              fontSize: "0.95rem",
              maxWidth: "90vw",
            }}
          >
            Este proyecto forma parte de mi proceso de formación. Desarrollé una
            página web moderna utilizando Next.js y Tailwind CSS, enfocándome en la
            estructura, diseño visual y buenas prácticas de maquetación. Aprendí a
            trabajar con componentes reutilizables, enrutamiento, estilizado
            responsivo y despliegue en la nube con Vercel.
          </p>

          <div
            style={{
              display: "flex",
              gap: "0.5rem",
              flexWrap: "wrap",
              justifyContent: "center",
            }}
          >
            <span style={pill}>Next.js</span>
            <span style={pill}>Tailwind CSS</span>
            <span style={pill}>Proyecto formativo</span>
            <span style={pill}>Despliegue en Vercel</span>
          </div>

          <a
            href="https://taller-next-js-y-tailwind-mu.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              marginTop: "1rem",
              backgroundColor: "#f43f5e",
              color: "#fff",
              padding: "0.75rem 1.5rem",
              borderRadius: "9999px",
              fontWeight: "600",
              textDecoration: "none",
              transition: "all 0.3s ease",
              boxShadow: "0 4px 12px rgba(244,63,94,0.3)",
              width: "100%",
              maxWidth: "280px",
              textAlign: "center",
            }}
          >
            Ver proyecto
          </a>
        </div>
      </main>
    </div>
  )
}

const pill = {
  backgroundColor: "#f43f5e",
  color: "#fff",
  fontSize: "0.875rem",
  padding: "0.5rem 1rem",
  borderRadius: "9999px",
  fontWeight: "500",
}

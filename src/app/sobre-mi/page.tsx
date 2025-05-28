"use client"
import Sidebar from "@/components/ui/Sidebar"

export default function SobreMi() {
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
          display: "flex",
          flexDirection: "column",
          padding: "2rem",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            gap: "2rem",
            flexWrap: "wrap",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <div style={{ maxWidth: "600px" }}>
            <h2
              style={{
                fontSize: "2rem",
                color: "#FF4F70",
                fontWeight: "700",
                marginBottom: "1.5rem",
              }}
            >
              Sobre mí
            </h2>
            <p
              style={{
                marginBottom: "1rem",
                color: "#374151",
                lineHeight: "1.8",
                fontSize: "1rem",
              }}
            >
              ¡Hola! Soy Camila Zambrano, tengo 20 años y soy asistente virtual.
              Me apasiona la tecnología y siempre he tenido un fuerte deseo por ayudar a los demás. Desde muy joven descubrí que tenía habilidades para organizar, planificar y resolver problemas de manera eficiente.
              Gracias a esto, decidí dedicarme profesionalmente a ser asistente virtual, brindando apoyo integral a emprendedores y profesionales.
            </p>
            <p
              style={{
                marginBottom: "2rem",
                color: "#374151",
                lineHeight: "1.8",
                fontSize: "1rem",
              }}
            >
              Me encanta compartir mis conocimientos y ser una aliada estratégica para quienes buscan optimizar su tiempo y procesos. Siempre estoy en constante aprendizaje para ofrecer lo mejor de mí.
            </p>

            <div style={{ display: "flex", gap: "0.5rem", flexWrap: "wrap" }}>
              {["En formación", "Aprendiendo gestión", "Enfocada en crecer"].map((label, idx) => (
                <span
                  key={idx}
                  style={{
                    display: "inline-block",
                    backgroundColor: "#ffe1e7",
                    color: "#FF4F70",
                    padding: "0.4rem 0.8rem",
                    borderRadius: "9999px",
                    fontSize: "0.8rem",
                    fontWeight: 500,
                  }}
                >
                  {label}
                </span>
              ))}
            </div>
          </div>

          <div
            style={{
              width: "220px",
              height: "220px",
              backgroundColor: "#e5e7eb",
              borderRadius: "1rem",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              boxShadow: "0 10px 20px rgba(0,0,0,0.05)",
              flexShrink: 0,
            }}
          >
            <img
              src="/foto.jpg"
              alt="Foto"
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                borderRadius: "1rem",
              }}
            />
          </div>
        </div>
      </main>
    </div>
  )
}

"use client"

import Sidebar from "@/components/ui/Sidebar"
import { Mail, Phone, Calendar } from "lucide-react"

export default function ContactoPage() {
  return (
    <div
      style={{
        display: "flex",
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
            color: "#f43f5e",
            fontWeight: "700",
            marginBottom: "1.25rem",
            textAlign: "center",
          }}
        >
          ¡Gracias por tu interés!
        </h2>

        <p
          style={{
            color: "#4b5563",
            marginBottom: "2.5rem",
            textAlign: "center",
            maxWidth: "500px",
          }}
        >
          Me encantaría colaborar contigo y seguir creciendo como asistente
          virtual.
        </p>

        <div
          style={{
            width: "100%",
            maxWidth: "500px",
            gap: "1.5rem",
            display: "flex",
            flexDirection: "column",
          }}
        >
          {/* Email */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "1rem",
              backgroundColor: "#fff",
              padding: "1rem 1.5rem",
              borderRadius: "1rem",
              boxShadow:
                "0 0 0 2px #fda4af40, 0 8px 24px rgba(244,63,94,0.1), 0 0 12px #fda4af66",
              transition: "all 0.3s ease",
            }}
          >
            <div
              style={{
                backgroundColor: "#f43f5e",
                padding: "0.5rem",
                borderRadius: "9999px",
              }}
            >
              <Mail
                style={{ color: "#fff", width: "1.25rem", height: "1.25rem" }}
              />
            </div>
            <span style={{ color: "#1f2937", fontWeight: "500" }}>
              camilazambrano.s2616@gmail.com
            </span>
          </div>

          {/* Teléfono */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "1rem",
              backgroundColor: "#fff",
              padding: "1rem 1.5rem",
              borderRadius: "1rem",
              boxShadow:
                "0 0 0 2px #fda4af40, 0 8px 24px rgba(244,63,94,0.1), 0 0 12px #fda4af66",
              transition: "all 0.3s ease",
            }}
          >
            <div
              style={{
                backgroundColor: "#f43f5e",
                padding: "0.5rem",
                borderRadius: "9999px",
              }}
            >
              <Phone
                style={{ color: "#fff", width: "1.25rem", height: "1.25rem" }}
              />
            </div>
            <span style={{ color: "#1f2937", fontWeight: "500" }}>
              +57 3105104688
            </span>
          </div>

          {/* Horario */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "1rem",
              backgroundColor: "#fff",
              padding: "1rem 1.5rem",
              borderRadius: "1rem",
              boxShadow:
                "0 0 0 2px #fda4af40, 0 8px 24px rgba(244,63,94,0.1), 0 0 12px #fda4af66",
              transition: "all 0.3s ease",
            }}
          >
            <div
              style={{
                backgroundColor: "#f43f5e",
                padding: "0.5rem",
                borderRadius: "9999px",
              }}
            >
              <Calendar
                style={{ color: "#fff", width: "1.25rem", height: "1.25rem" }}
              />
            </div>
            <span style={{ color: "#1f2937", fontWeight: "500" }}>
              Disponible de lunes a viernes, 9am - 5pm
            </span>
          </div>
        </div>
      </main>
    </div>
  )
}

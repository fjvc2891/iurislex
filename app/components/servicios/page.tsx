import React from "react";

export default function Servicios() {
  const servicios = [
    {
      title: "DERECHO LABORAL INDIVIDUAL Y COLECTIVO",
      description: [
        "Recobro de incapacidades de origen común y laboral ante ARL, EPS y fondos pensionales.",
        "Asesoría en reconocimiento de incapacidades para empleadores.",
        "Asesoría y proyección de procesos disciplinarios en relaciones laborales.",
        "Reglamento interno de trabajo.",
        "Asesorías y representación frente a intervenciones del Ministerio de Trabajo.",
        "Todo lo relacionado con accidentes de trabajo.",
        "Asesoría en las rutas de manejo y aplicación del S.S.S.T de trabajadores en situación de discapacidad o bajo fuero de estabilidad laboral reforzada.",
      ],
    },
    {
      title: "DERECHO AMBIENTAL Y CONSTITUCIONAL",
      description: [
        "Asesoría y representación ante autoridades ambientales y sanitarias en procesos administrativos sancionatorios.",
        "Acciones de tutela frente a sentencias judiciales ejecutoriadas.",
        "Defensa y representación en acciones constitucionales; acción de tutela, acción popular entre otras.",
        "Defensa y representación en acciones constitucionales derivado de relaciones laborales.",
      ],
    },
    {
      title: "DERECHO DISCIPLINARIO",
      description: [
        "Procesos disciplinarios que sustancien oficinas de Control Interno y Disciplinario.",
        "Procesos disciplinarios ante el Consejo Profesional Nacional de Ingeniería (COPNIA).",
        "Representación en procesos disciplinarios ante oficinas de control interno.",
        "Procesos disciplinarios de sujetos disciplinables: ingenieros, abogados, entre otros.",
      ],
    },
    {
      title: "OTRAS RAMAS DEL DERECHO",
      description: [
        "Civil",
        "Comercial",
        "Migratorio",
        "Contratación Estatal",
      ],
    },
  ];

  return (
    <section id="servicios" className="py-16 bg-transparent">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-extrabold text-white">Servicios Jurídicos Especializados</h2>
          <p className="mt-4 text-lg text-gray-300">
            Ofrecemos una amplia gama de servicios especializados en distintas ramas del derecho para proteger los intereses de su empresa.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {servicios.map((servicio, index) => (
            <div key={index} className="bg-zinc-800 p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-bold text-white mb-4">{servicio.title}</h3>
              <ul className="text-gray-300 space-y-2">
                {servicio.description.map((item, idx) => (
                  <li key={idx} className="flex items-start">
                    <span className="mr-2">•</span> {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Información de contacto */}
        <div className="mt-12 text-center">
          <p className="text-lg text-gray-300">
            iurislexsas@gmail.com | 3507339816 - 3242441287
          </p>
          <p className="text-lg text-gray-300">NIT: 901868816</p>
        </div>
      </div>
    </section>
  );
}

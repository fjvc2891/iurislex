import React from "react";

export default function Nosotros() {
  return (
    <section
      id="nosotros"
      className="h-screen flex flex-col items-center justify-center px-8"
    >
      <div className="max-w-3xl text-center">
        <h1 className="text-4xl font-bold text-white mb-6">
          Bienvenidos a IURIS LEX SAS
        </h1>
        <p className="text-lg text-gray-300 leading-relaxed mb-4">
          IURIS LEX SAS les da la bienvenida a su portafolio de servicios, un
          espacio ideado para facilitar la comunicación con nuestros clientes y
          con personas interesadas en los servicios de consultoría jurídica
          especializada.
        </p>
        <p className="text-lg text-gray-300 leading-relaxed mb-4">
          Somos una firma de Abogados Asociados especializados en distintas ramas
          del Derecho. Nuestros abogados especializados cuentan con amplia
          experiencia en representación judicial de empresas privadas y
          entidades; representación y asesoría en procesos administrativos
          sancionatorios, inspecciones y vigilancias del Ministerio del Trabajo.
        </p>
        <p className="text-lg text-gray-300 leading-relaxed mb-4">
          Ofrecemos asesoría en trámites de recobro de incapacidades, asesoría
          frente a trámites y gestiones ARL, EPS y COLPENSIONES respecto de la
          calificación de pérdida de capacidad laboral de trabajadores.
        </p>
        <p className="text-lg text-gray-300 leading-relaxed">
          También brindamos asesoría y representación de entidades y empresas
          ante autoridades derivado de investigaciones y procesos administrativos
          sancionatorios, como Corponariño, Procuraduría regional de Nariño y el
          Ministerio del Trabajo.
        </p>
      </div>
    </section>
  );
}

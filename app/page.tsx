import Link from "next/link";
import React from "react";
import dynamic from "next/dynamic";
import Particles from "./components/particles";

const Nosotros = dynamic(() => import("./components/nosotros/page"), { ssr: false });
const Servicios = dynamic(() => import("./components/servicios/page"), { ssr: false });

const navigation = [  
  { name: "Nosotros", href: "#nosotros" },
  { name: "Servicios", href: "#servicios" },
];

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center w-screen bg-gradient-to-tl from-black via-zinc-600/20 to-black">
      <nav className="my-16 animate-fade-in">
        <ul className="flex items-center justify-center gap-4">
          {navigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm duration-500 text-zinc-500 hover:text-zinc-300"
            >
              {item.name}
            </Link>
          ))}
        </ul>
      </nav>

      <Particles className="absolute inset-0 -z-10 animate-fade-in" quantity={100} />

      <section className="h-screen">
        <h1 className="py-3.5 px-0.5 z-10 text-4xl text-transparent duration-1000 bg-white cursor-default text-edge-outline animate-title font-display sm:text-6xl md:text-9xl whitespace-nowrap bg-clip-text ">
          V&C IURIS LEX SAS
        </h1>
        <h2 className="text-sm text-zinc-500 my-4">Abogados Asociados</h2>
      </section>

      {/* Cargar componentes dinámicamente cuando el usuario se desplace */}      
      <Nosotros />
      <Servicios />
    </div>
  );
}
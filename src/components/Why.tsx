import { forwardRef } from "react";
import {
  ShieldCheck,
  Truck,
  Award,
  Clock,
  PackageCheck,
  Users,
  CheckCircle2,
} from "lucide-react";

const differentiators = [
  {
    icon: Award,
    title: "Excelencia Garantizada",
    desc: "Cumplimos con lo que nos comprometemos, asegurando calidad en cada entrega.",
    bg: "bg-blue-50 text-primary",
  },
  {
    icon: Clock,
    title: "Eficiencia Operativa",
    desc: "Precios competitivos y procesos optimizados para el beneficio de su farmacia.",
    bg: "bg-green-50 text-secondary-dark",
  },
  {
    icon: ShieldCheck,
    title: "Habilitación ANMAT",
    desc: "Operamos bajo todas las normativas y regulaciones farmacéuticas vigentes.",
    bg: "bg-blue-50 text-primary",
  },
  {
    icon: CheckCircle2,
    title: "Certificación GLN",
    desc: "Trazabilidad completa y seguridad garantizada en toda la cadena de suministro.",
    bg: "bg-green-50 text-secondary-dark",
  },
];

const pillars = [
  {
    icon: PackageCheck,
    title: "Stock Permanente",
    desc: "Disponibilidad garantizada de medicamentos de alta demanda.",
  },
  {
    icon: ShieldCheck,
    title: "Responsabilidad",
    desc: "Gestión transparente y ética en cada proceso.",
  },
  {
    icon: Truck,
    title: "Entrega Inmediata",
    desc: "Logística propia optimizada para tiempos reducidos.",
  },
  {
    icon: Users,
    title: "Equipo Comprometido",
    desc: "Personal capacitado para brindar soporte integral.",
  },
];

const Why = forwardRef<HTMLDivElement>((_, ref) => {
  return (
    <section id="why" ref={ref} className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="section-tag">¿Por qué elegirnos?</span>
          <h2 className="section-title">
            Su socio estratégico en{" "}
            <span className="text-gradient">salud farmacéutica</span>
          </h2>
          <p className="section-subtitle mt-2">
            Nuestra trayectoria y compromiso nos posicionan como referentes del
            sector.
          </p>
        </div>

        {/* 4 differentiator cards */}
        <div className="grid md:grid-cols-2 gap-5 mb-12">
          {differentiators.map((d, i) => (
            <div
              key={i}
              className="flex items-start gap-5 p-7 bg-neutral-50 rounded-2xl border border-neutral-100 hover:border-primary/20 hover:bg-white hover:shadow-md transition-all duration-300 group"
            >
              <div
                className={`w-12 h-12 flex-shrink-0 rounded-xl flex items-center justify-center ${d.bg} group-hover:scale-110 transition-transform duration-300`}
              >
                <d.icon size={22} />
              </div>
              <div>
                <h3 className="font-display font-bold text-primary-dark mb-1">
                  {d.title}
                </h3>
                <p className="text-sm text-neutral-500 leading-relaxed">
                  {d.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Pillars — dark gradient block */}
        <div
          data-header-dark
          className="relative overflow-hidden bg-gradient-to-br from-primary-dark via-primary to-primary-light rounded-3xl p-10 md:p-14"
        >
          {/* Decorative blobs */}
          <div className="absolute -top-12 -right-12 w-52 h-52 bg-white/5 rounded-full" />
          <div className="absolute -bottom-16 -left-10 w-64 h-64 bg-white/5 rounded-full" />

          <h3 className="font-display text-2xl md:text-3xl font-bold text-white text-center mb-12 relative z-10">
            Pilares de nuestro servicio
          </h3>

          <div className="relative z-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {pillars.map((p, i) => (
              <div
                key={i}
                className="bg-white/10 backdrop-blur-sm border border-white/15 rounded-2xl p-7 text-center hover:bg-white/15 transition-colors duration-300 group"
              >
                <div className="w-14 h-14 bg-white/15 rounded-xl flex items-center justify-center mx-auto mb-5 group-hover:scale-110 transition-transform duration-300">
                  <p.icon size={26} className="text-secondary-light" />
                </div>
                <h4 className="font-display font-bold text-white mb-2">
                  {p.title}
                </h4>
                <p className="text-white/60 text-sm leading-relaxed">
                  {p.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
});
Why.displayName = "Why";

export default Why;

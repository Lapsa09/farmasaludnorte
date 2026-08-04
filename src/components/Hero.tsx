import { forwardRef } from "react";
import { ArrowRight, ChevronDown, ShieldCheck } from "lucide-react";
import office1 from "/assets/storage.png";

const Hero = forwardRef<HTMLDivElement>((_, ref) => {
  return (
    <section
      id="home"
      ref={ref}
      data-header-dark
      className="relative h-screen min-h-[680px] flex items-center overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <img
          src={office1}
          alt="Instalaciones Farma Salud Norte"
          className="w-full h-full object-cover xl:-translate-y-[55%] xl:h-auto"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary-dark/95 via-primary-dark/85 to-primary/50" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
      </div>

      {/* Subtle grid overlay */}
      <div
        className="absolute inset-0 z-0 opacity-[0.04]"
        style={{
          backgroundImage:
            "linear-gradient(white 1px, transparent 1px), linear-gradient(90deg, white 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pt-20">
        <div className="max-w-2xl">
          {/* Trust badge */}
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 mb-8 animate-fadeIn">
            <ShieldCheck size={14} className="text-secondary-light" />
            <span className="text-white/90 text-xs font-semibold tracking-wider uppercase">
              Habilitación ANMAT · Certificación GLN
            </span>
          </div>

          <h1 className="font-display text-4xl md:text-5xl lg:text-[3.75rem] font-black text-white leading-[1.08] mb-6 animate-fadeInUp">
            Distribución Integral
            <br />
            de <span className="text-secondary-light">Medicamentos</span>
          </h1>

          <p className="text-base md:text-lg text-white/70 leading-relaxed mb-10 max-w-xl animate-fadeInUp animation-delay-150">
            Abastecimiento farmacéutico confiable para farmacias, hospitales y
            centros de salud. Logística propia, stock permanente y atención
            personalizada.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 animate-fadeInUp animation-delay-300">
            <button
              onClick={() =>
                document
                  .getElementById("contact")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
              className="inline-flex items-center justify-center gap-2 bg-secondary hover:bg-secondary-dark text-white font-semibold py-3.5 px-8 rounded-xl transition-all duration-300 shadow-lg hover:shadow-secondary/30 hover:-translate-y-0.5"
            >
              Contactar ahora
              <ArrowRight size={18} />
            </button>
            <button
              onClick={() =>
                document
                  .getElementById("services")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
              className="inline-flex items-center justify-center gap-2 border-2 border-white/40 text-white font-semibold py-3.5 px-8 rounded-xl hover:bg-white/10 hover:border-white/70 transition-all duration-300"
            >
              Nuestros Servicios
            </button>
          </div>
        </div>
      </div>

      {/* Scroll hint */}
      <button
        onClick={() =>
          document
            .getElementById("stats")
            ?.scrollIntoView({ behavior: "smooth" })
        }
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 text-white/40 hover:text-white/70 transition-colors animate-bounce-slow focus:outline-none"
        aria-label="Desplazarse hacia abajo"
      >
        <ChevronDown size={30} />
      </button>
    </section>
  );
});
Hero.displayName = "Hero";

export default Hero;

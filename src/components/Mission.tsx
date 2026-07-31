import { forwardRef } from "react";
import { Target, Eye, HeartHandshake } from "lucide-react";

const Mission = forwardRef<HTMLDivElement>((_, ref) => {
  return (
    <section id="mission" className="py-24 bg-white" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="section-tag">Nuestra Identidad</span>
          <h2 className="section-title">¿Quiénes somos?</h2>
          <p className="section-subtitle mt-2">
            Una empresa farmacéutica comprometida con la salud y el
            abastecimiento de calidad.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {/* Mission — dark featured card */}
          <div className="relative overflow-hidden bg-gradient-to-br from-primary-dark to-primary p-9 rounded-2xl text-white">
            <div className="absolute -top-8 -right-8 w-32 h-32 bg-white/5 rounded-full" />
            <div className="absolute -bottom-10 -left-6 w-40 h-40 bg-white/5 rounded-full" />
            <div className="relative z-10">
              <div className="w-12 h-12 bg-white/15 rounded-xl flex items-center justify-center mb-6">
                <Target size={22} className="text-white" />
              </div>
              <h3 className="font-display text-2xl font-bold text-white mb-5">
                Misión
              </h3>
              <ul className="space-y-4">
                {[
                  "Brindar un servicio de excelencia en cada uno de nuestros procesos.",
                  "Establecer relaciones estratégicas y de largo plazo basadas en la confianza.",
                  "Generar beneficios recíprocos con nuestros clientes y la sociedad.",
                ].map((item, i) => (
                  <li
                    key={i}
                    className="flex items-start gap-3 text-white/75 text-sm leading-relaxed"
                  >
                    <span className="mt-2 w-1.5 h-1.5 bg-secondary-light rounded-full flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Vision */}
          <div className="bg-neutral-50 border border-neutral-100 p-9 rounded-2xl hover:shadow-lg transition-all duration-300 group">
            <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
              <Eye size={22} className="text-secondary-dark" />
            </div>
            <h3 className="font-display text-2xl font-bold text-primary-dark mb-4">
              Visión
            </h3>
            <p className="text-neutral-600 text-sm leading-relaxed">
              Ser la empresa líder del segmento farmacéutico hospitalario
              nacional, reconocida por nuestra trayectoria, valores, excelencia
              profesional e innovación tecnológica, estableciendo estándares de
              referencia en calidad y eficacia en la industria.
            </p>
          </div>

          {/* Values */}
          <div className="bg-neutral-50 border border-neutral-100 p-9 rounded-2xl hover:shadow-lg transition-all duration-300 group">
            <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
              <HeartHandshake size={22} className="text-primary" />
            </div>
            <h3 className="font-display text-2xl font-bold text-primary-dark mb-4">
              Valores
            </h3>
            <ul className="space-y-4">
              {[
                "Compromiso con la calidad y la innovación.",
                "Ética y transparencia en todas nuestras acciones.",
                "Respeto y cuidado por la salud y el bienestar de la comunidad.",
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="mt-2 w-2 h-2 bg-secondary rounded-full flex-shrink-0" />
                  <span className="text-neutral-600 text-sm leading-relaxed">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
});
Mission.displayName = "Mission";

export default Mission;

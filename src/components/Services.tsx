import { forwardRef } from "react";
import { HeartPulse, Building2, Landmark, Truck } from "lucide-react";

const services = [
  {
    icon: HeartPulse,
    title: "Obras Sociales",
    description:
      "Atención personalizada a los afiliados de obras sociales, garantizando el acceso oportuno a medicamentos con cobertura, trazabilidad y cumplimiento de los requisitos establecidos por cada entidad.",
    accent: "border-secondary",
    iconBg: "bg-green-50 text-secondary-dark",
  },
  {
    icon: Building2,
    title: "Hospitales y Clínicas",
    description:
      "Medicamentos y soluciones parenterales para internación hospitalaria. Stock y logística que garantizan respuesta inmediata.",
    accent: "border-primary",
    iconBg: "bg-blue-50 text-primary",
  },
  {
    icon: Landmark,
    title: "Sector Público",
    description:
      "Provisión a Ministerios Nacionales, Provinciales y Municipales. Participación en licitaciones con amplio stock y diversidad de productos.",
    accent: "border-secondary",
    iconBg: "bg-green-50 text-secondary-dark",
  },
  {
    icon: Truck,
    title: "Logística Propia",
    description:
      "Flota de vehículos propia con cadena de frío garantizada. Trazabilidad completa del proceso de distribución bajo Certificación GLN y Habilitación ANMAT vigente.",
    accent: "border-primary",
    iconBg: "bg-blue-50 text-primary",
  },
];

const Services = forwardRef<HTMLDivElement>((_, ref) => {
  return (
    <section id="services" ref={ref} className="py-24 bg-neutral-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="section-tag">Áreas de Atención</span>
          <h2 className="section-title">
            Soluciones para cada{" "}
            <span className="text-gradient">necesidad farmacéutica</span>
          </h2>
          <p className="section-subtitle mt-2">
            Cobertura integral de todo el canal farmacéutico con atención
            especializada por segmento.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((svc, i) => (
            <div
              key={i}
              className={`bg-white p-8 rounded-2xl border-b-4 ${svc.accent} shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 group`}
            >
              <div
                className={`w-14 h-14 ${svc.iconBg} rounded-xl flex items-center justify-center mb-6 transition-transform duration-300 group-hover:scale-110`}
              >
                <svc.icon size={26} />
              </div>
              <h3 className="font-display text-xl font-bold text-primary-dark mb-3">
                {svc.title}
              </h3>
              <p className="text-sm text-neutral-500 leading-relaxed">
                {svc.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
});
Services.displayName = "Services";

export default Services;

import { Phone, Mail, MapPin, UserPlus, ClipboardList } from "lucide-react";
import { forwardRef } from "react";
import { FaLinkedin, FaWhatsapp, FaInstagram } from "react-icons/fa";

const Contact = forwardRef<HTMLDivElement>((_, ref) => {
  const contactItems = [
    {
      icon: <Phone className="w-5 h-5" />,
      label: "Teléfono",
      content: "(011) 4839-8284",
      href: "tel:01148398284",
      bg: "bg-green-50 text-secondary-dark",
    },
    {
      icon: <FaWhatsapp className="w-5 h-5" />,
      label: "WhatsApp",
      content: "+54 9 11 5882-7073",
      href: "https://wa.me/5491158827073",
      target: "_blank",
      bg: "bg-green-50 text-secondary-dark",
    },
    {
      icon: <MapPin className="w-5 h-5" />,
      label: "Dirección",
      content:
        "Rondeau 2836, B1650 Villa Juan Martín de Pueyrredón, Buenos Aires",
      href: "https://maps.app.goo.gl/rduTFvMhfGNKr4N17",
      target: "_blank",
      bg: "bg-blue-50 text-primary",
    },
    {
      icon: <Mail className="w-5 h-5" />,
      label: "Email",
      content: "info@farmanorte.com.ar",
      href: "mailto:info@farmanorte.com.ar",
      bg: "bg-blue-50 text-primary",
    },
    {
      icon: <FaInstagram className="w-5 h-5" />,
      label: "Instagram",
      content: "@farma_salud_norte",
      href: "https://www.instagram.com/farma_salud_norte/",
      target: "_blank",
      bg: "bg-blue-50 text-primary",
    },
    {
      icon: <FaLinkedin className="w-5 h-5" />,
      label: "LinkedIn",
      content: "Farma Salud Norte",
      href: "https://www.linkedin.com/company/farma-salud-norte",
      target: "_blank",
      bg: "bg-blue-50 text-primary",
    },
  ];

  return (
    <section id="contact" className="py-12 bg-neutral-50" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="section-tag">Contacto</span>
          <h2 className="section-title">Estamos para ayudarte</h2>
          <p className="section-subtitle mt-2">
            Comunicate por el canal que prefieras. Nuestro equipo está listo
            para asesorarte.
          </p>
        </div>

        {/* Ser cliente — featured CTA */}
        <a
          href="mailto:ventas@farmanorte.com.ar"
          data-header-dark
          className="flex flex-col sm:flex-row items-center gap-6 bg-gradient-to-r from-primary-dark to-primary p-8 rounded-2xl mb-6 hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300 group"
        >
          <div className="w-16 h-16 flex-shrink-0 bg-white/15 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
            <UserPlus size={28} className="text-white" />
          </div>
          <div className="text-center sm:text-left flex-1">
            <p className="font-display text-xl font-bold text-white mb-1">
              Ser cliente
            </p>
            <p className="text-white/70 text-sm leading-relaxed">
              Consultanos para realizar la apertura de cuenta. Enviá la
              documentación necesaria para comenzar a comercializar con
              nosotros.
            </p>
          </div>
          <div className="flex-shrink-0 text-right">
            <p className="text-secondary-light font-semibold text-sm">
              ventas@farmanorte.com.ar
            </p>
            <p className="text-white text-xs mt-1">Escribinos →</p>
          </div>
        </a>

        {/* Ser proveedor — featured CTA */}
        <a
          href="mailto:compras@farmanorte.com.ar"
          data-header-dark
          className="flex flex-col sm:flex-row items-center gap-6 bg-gradient-to-r from-secondary-dark to-secondary p-8 rounded-2xl mb-6 hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300 group"
        >
          <div className="w-16 h-16 flex-shrink-0 bg-white/15 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
            <ClipboardList size={28} className="text-white" />
          </div>
          <div className="text-center sm:text-left flex-1">
            <p className="font-display text-xl font-bold text-white mb-1">
              Ser proveedor
            </p>
            <p className="text-white/70 text-sm leading-relaxed">
              Contactate con el Departamento de Compras. Solicitá una entrevista
              y presentá tu propuesta comercial.
            </p>
          </div>
          <div className="flex-shrink-0 text-right">
            <p className="text-white font-semibold text-sm">
              compras@farmanorte.com.ar
            </p>
            <p className="text-white text-xs mt-1">Escribinos →</p>
          </div>
        </a>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {contactItems.map((item, i) => (
            <a
              key={i}
              href={item.href}
              target={item.target}
              rel={item.target ? "noopener noreferrer" : undefined}
              className="bg-white flex items-center gap-5 p-6 rounded-2xl border border-neutral-100 hover:border-primary/20 hover:shadow-md hover:-translate-y-0.5 transition-all duration-300 group"
            >
              <div
                className={`w-12 h-12 flex-shrink-0 rounded-xl flex items-center justify-center ${item.bg} group-hover:scale-110 transition-transform duration-300`}
              >
                {item.icon}
              </div>
              <div>
                <p className="text-xs font-semibold text-neutral-400 uppercase tracking-wider mb-1">
                  {item.label}
                </p>
                <p className="text-neutral-700 font-semibold text-sm group-hover:text-primary transition-colors leading-snug">
                  {item.content}
                </p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
});
Contact.displayName = "Contact";

export default Contact;

import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { FaInstagram, FaLinkedin } from "react-icons/fa";
import logoWhite from "/assets/logo_white.png";

function Footer() {
  const year = new Date().getFullYear();

  const navLinks = [
    { label: "Inicio", href: "#home" },
    { label: "Servicios", href: "#services" },
    { label: "Nosotros", href: "#mission" },
    { label: "¿Por qué elegirnos?", href: "#why" },
    { label: "Contacto", href: "#contact" },
    { label: "Portal Clientes", href: "#" },
  ];

  return (
    <footer className="bg-primary-dark text-white">
      {/* Top accent */}
      <div className="h-[3px] bg-gradient-to-r from-secondary/0 via-secondary to-secondary/0" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="space-y-5">
            <div className="bg-white/10 p-3 w-fit rounded-xl">
              <img
                src={logoWhite}
                alt="Farma Salud Norte"
                className="h-9 w-auto"
              />
            </div>
            <div className="flex gap-3">
              <a
                href="https://www.instagram.com/farma_salud_norte/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="w-9 h-9 bg-white/10 hover:bg-secondary rounded-lg flex items-center justify-center transition-colors duration-300"
              >
                <FaInstagram className="w-4 h-4" />
              </a>
              <a
                href="https://www.linkedin.com/company/farma-salud-norte"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="w-9 h-9 bg-white/10 hover:bg-secondary rounded-lg flex items-center justify-center transition-colors duration-300"
              >
                <FaLinkedin className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-display font-semibold text-white mb-6 text-xs uppercase tracking-widest">
              Contacto
            </h3>
            <ul className="space-y-4 text-white/55 text-sm">
              <li className="flex items-start gap-3">
                <MapPin
                  size={16}
                  className="text-secondary mt-0.5 flex-shrink-0"
                />
                <span>
                  Rondeau 2836, B1650
                  <br />
                  Villa Juan Martín de Pueyrredón, Buenos Aires
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={16} className="text-secondary flex-shrink-0" />
                <a
                  href="tel:01148398284"
                  className="hover:text-white transition-colors"
                >
                  (011) 4839-8284
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={16} className="text-secondary flex-shrink-0" />
                <a
                  href="mailto:info@farmanorte.com.ar"
                  className="hover:text-white transition-colors"
                >
                  info@farmanorte.com.ar
                </a>
              </li>
            </ul>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="font-display font-semibold text-white mb-6 text-xs uppercase tracking-widest">
              Navegación
            </h3>
            <ul className="space-y-2.5 text-white/55 text-sm">
              {navLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="hover:text-white transition-colors hover:pl-1 duration-200 inline-block"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Hours */}
          <div>
            <h3 className="font-display font-semibold text-white mb-6 text-xs uppercase tracking-widest">
              Horario de Atención
            </h3>
            <ul className="space-y-3 text-white/55 text-sm">
              <li className="flex items-start gap-3">
                <Clock
                  size={16}
                  className="text-secondary mt-0.5 flex-shrink-0"
                />
                <div>
                  <p className="text-white/80 font-medium">Lunes a Viernes</p>
                  <p>9:00 – 17:00</p>
                </div>
              </li>
              <li className="pl-7">
                <p className="text-white/80 font-medium">Sabado y Domingo</p>
                <p>Cerrado</p>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex flex-col sm:flex-row justify-between items-center gap-3">
          <p className="text-white/35 text-xs">
            © {year} Farma Salud Norte. Todos los derechos reservados.
          </p>
          <div className="flex gap-5 text-white/35 text-xs">
            <a href="#" className="hover:text-white/60 transition-colors">
              Política de Privacidad
            </a>
            <a href="#" className="hover:text-white/60 transition-colors">
              Términos y Condiciones
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

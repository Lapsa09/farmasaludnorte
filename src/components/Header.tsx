import { Menu, X } from "lucide-react";
import { useState, useEffect } from "react";
import logoWhite from "/assets/logo_white.png";

function Header({
  refs,
}: {
  refs: Record<string, React.RefObject<HTMLElement>>;
}) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const check = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", check, { passive: true });
    check();
    return () => window.removeEventListener("scroll", check);
  }, []);

  const scrollToSection = (id: string) => {
    const element = refs[id]?.current;
    if (element) element.scrollIntoView({ behavior: "smooth" });
    setIsMenuOpen(false);
  };

  const links = [
    { id: "home", label: "Inicio" },
    { id: "services", label: "Servicios" },
    { id: "mission", label: "Nosotros" },
    { id: "why", label: "¿Por qué elegirnos?" },
    { id: "contact", label: "Contacto" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 h-20 transition-all duration-400 ${
        scrolled ? "bg-primary-dark backdrop-blur-md shadow-sm" : "bg-white/98"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center justify-between">
        {/* Logo */}
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="flex-shrink-0 focus:outline-none"
          aria-label="Volver al inicio"
        >
          <img
            src={logoWhite}
            alt="Farma Salud Norte"
            className={`h-16 my-auto transition-all duration-300`}
          />
        </button>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-7">
          {links.map((link) => (
            <button
              key={link.id}
              onClick={() => scrollToSection(link.id)}
              className="relative text-sm font-medium transition-colors duration-200 group text-white/85 hover:text-white"
            >
              {link.label}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-secondary transition-all duration-300 group-hover:w-full rounded-full" />
            </button>
          ))}
        </nav>

        {/* Mobile menu button */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden p-2 rounded-lg transition-colors text-white hover:bg-white/10"
          aria-label="Abrir menú"
        >
          {isMenuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile dropdown */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t border-neutral-100 absolute w-full shadow-xl">
          <nav className="flex flex-col py-3">
            {links.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollToSection(link.id)}
                className="px-6 py-3.5 text-left text-neutral-700 hover:bg-primary-50 hover:text-primary font-medium text-sm transition-colors border-l-4 border-transparent hover:border-primary"
              >
                {link.label}
              </button>
            ))}
            <div className="px-6 py-4">
              <button
                onClick={() => scrollToSection("contact")}
                className="w-full btn-secondary text-center text-sm"
              >
                Portal Clientes
              </button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}

export default Header;

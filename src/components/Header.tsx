import { useWindowScroll } from "@uidotdev/usehooks";
import { Menu, X } from "lucide-react";
import { useState } from "react";

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [{ y }, setScroll] = useWindowScroll();

  const scrolled = Boolean(y && y > 50);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    setScroll({ top: element?.offsetTop, behavior: "smooth" });
    setIsMenuOpen(false);
  };
  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-gradient-to-br from-green-700 via-green-600 to-emerald-500 shadow-lg py-4"
          : "bg-transparent py-6"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <img
            src="/assets/logo_color.png"
            alt="Logo Farma Salud Norte"
            className="h-16"
          />

          <nav className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => scrollToSection("home")}
              className="text-white font-light text-sm uppercase tracking-wider hover:text-green-200 transition-colors"
            >
              Inicio
            </button>
            <button
              onClick={() => scrollToSection("mission")}
              className="text-white font-light text-sm uppercase tracking-wider hover:text-green-200 transition-colors"
            >
              Misión & Visión
            </button>
            <button
              onClick={() => scrollToSection("why")}
              className="text-white font-light text-sm uppercase tracking-wider hover:text-green-200 transition-colors"
            >
              ¿Por qué elegirnos?
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="text-white font-light text-sm uppercase tracking-wider hover:text-green-200 transition-colors"
            >
              Contacto
            </button>
          </nav>

          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-white"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden bg-white shadow-lg mt-4 rounded-lg mx-4 overflow-hidden">
          <nav className="flex flex-col">
            <button
              onClick={() => scrollToSection("home")}
              className="px-6 py-4 text-left text-gray-700 hover:bg-green-50 hover:text-green-700 transition-colors"
            >
              Inicio
            </button>
            <button
              onClick={() => scrollToSection("mission")}
              className="px-6 py-4 text-left text-gray-700 hover:bg-green-50 hover:text-green-700 transition-colors"
            >
              Misión & Visión
            </button>
            <button
              onClick={() => scrollToSection("why")}
              className="px-6 py-4 text-left text-gray-700 hover:bg-green-50 hover:text-green-700 transition-colors"
            >
              ¿Por qué elegirnos?
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="px-6 py-4 text-left text-gray-700 hover:bg-green-50 hover:text-green-700 transition-colors"
            >
              Contacto
            </button>
          </nav>
        </div>
      )}
    </header>
  );
}

export default Header;

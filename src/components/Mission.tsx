function Mission() {
  return (
    <section id="mission" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-12">
          {/* Mission */}
          <div className="text-left">
            <div className="w-20 h-20 bg-gradient-to-br from-green-700 to-emerald-500 rounded-full flex items-center justify-center mb-8">
              <div className="w-12 h-12 bg-white rounded-full"></div>
            </div>
            <h3 className="text-2xl font-normal text-green-700 mb-6">Misión</h3>
            <div className="space-y-4 text-gray-600 leading-relaxed">
              <p className="flex items-start">
                <span className="text-green-700 mr-3 flex-shrink-0">•</span>
                <span>
                  Brindar un servicio de excelencia en cada uno de nuestros
                  procesos.
                </span>
              </p>
              <p className="flex items-start">
                <span className="text-green-700 mr-3 flex-shrink-0">•</span>
                <span>
                  Establecer relaciones estratégicas y de largo plazo con
                  nuestros proveedores y clientes, fundamentadas en la
                  confianza, la seriedad y el respeto mutuo.
                </span>
              </p>
              <p className="flex items-start">
                <span className="text-green-700 mr-3 flex-shrink-0">•</span>
                <span>
                  Lograr resultados que generen verdaderos beneficios recíprocos
                  con nuestros clientes, contribuyendo así al bienestar de la
                  sociedad.
                </span>
              </p>
            </div>
          </div>

          {/* Vision */}
          <div className="text-left">
            <div className="w-20 h-20 bg-gradient-to-br from-green-700 to-emerald-500 rounded-full flex items-center justify-center mb-8">
              <div className="w-12 h-12 bg-white rounded-full"></div>
            </div>
            <h3 className="text-2xl font-normal text-green-700 mb-6">Visión</h3>
            <p className="text-gray-600 leading-relaxed">
              Ser la empresa líder del segmento farmacéutico hospitalario
              nacional, reconocida por nuestra trayectoria, valores, excelencia
              profesional e innovación tecnológica, estableciendo estándares de
              referencia en cuanto a calidad y eficacia en la industria.
            </p>
          </div>

          {/* Values */}
          <div className="text-left">
            <div className="w-20 h-20 bg-gradient-to-br from-green-700 to-emerald-500 rounded-full flex items-center justify-center mb-8">
              <div className="w-12 h-12 bg-white rounded-full"></div>
            </div>
            <h3 className="text-2xl font-normal text-green-700 mb-6">
              Valores
            </h3>
            <div className="space-y-4 text-gray-600 leading-relaxed">
              <p className="flex items-start">
                <span className="text-green-700 mr-3 flex-shrink-0">•</span>
                <span>Compromiso con la calidad y la innovación.</span>
              </p>
              <p className="flex items-start">
                <span className="text-green-700 mr-3 flex-shrink-0">•</span>
                <span>Ética y transparencia en todas nuestras acciones.</span>
              </p>
              <p className="flex items-start">
                <span className="text-green-700 mr-3 flex-shrink-0">•</span>
                <span>
                  Respeto y cuidado por la salud y el bienestar de la comunidad.
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Mission;

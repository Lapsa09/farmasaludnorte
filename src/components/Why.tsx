function Why() {
  return (
    <section
      id="why"
      className="py-20 bg-gradient-to-br from-green-700 via-green-600 to-emerald-500"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl md:text-5xl font-light text-white mb-16">
          ¿Por qué elegirnos?
        </h2>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <h3 className="text-2xl font-normal mb-4 flex items-center text-white">
            <span className="mr-3">•</span>
            Cumplimos con lo que nos comprometemos
          </h3>

          <h3 className="text-2xl font-normal mb-4 flex items-center text-white">
            <span className="mr-3">•</span>
            Contamos con precios competitivos
          </h3>
          <h3 className="text-2xl font-normal mb-4 flex items-center text-white">
            <span className="mr-3">•</span>
            Habilitados por la Anmat
          </h3>
          <h3 className="text-2xl font-normal mb-4 flex items-center text-white">
            <span className="mr-3">•</span>
            Certificado GLN
          </h3>
        </div>

        <h3 className="text-2xl font-normal text-white mb-12 flex items-center">
          <span className="mr-3">•</span>
          Brindamos un probado óptimo servicio basado en:
        </h3>

        <div className="grid md:grid-cols-4 gap-8">
          <div className="text-center">
            <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-4">
              <div className="w-10 h-10 bg-green-700 rounded-full"></div>
            </div>
            <h4 className="text-white font-normal mb-2">Stock permanente</h4>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-4">
              <div className="w-10 h-10 bg-green-700 rounded-full"></div>
            </div>
            <h4 className="text-white font-normal mb-2">
              Responsabilidad en la gestión
            </h4>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-4">
              <div className="w-10 h-10 bg-green-700 rounded-full"></div>
            </div>
            <h4 className="text-white font-normal mb-2">Entrega inmediata</h4>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-4">
              <div className="w-10 h-10 bg-green-700 rounded-full"></div>
            </div>
            <h4 className="text-white font-normal mb-2">
              Organización comprometida
            </h4>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Why;

import office1 from "/assets/office1.jpeg";

function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-green-700 via-green-600 to-emerald-500 overflow-hidden"
    >
      {/* Decorative circles like Varadero */}
      <div className="absolute top-20 right-20 w-64 h-64 bg-emerald-400/10 rounded-full"></div>
      <div className="absolute bottom-40 left-20 w-96 h-96 bg-green-300/10 rounded-full"></div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-green-500/5 rounded-full"></div>

      <img
        src={office1}
        alt="Office Background"
        className="absolute inset-0 w-full h-full object-cover opacity-20"
      />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-left z-10">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-light text-white mb-8 leading-tight">
          Comprometidos con la salud,
          <br />
          <span className="font-normal">
            aportando excelencia en medicación hospitalaria
          </span>
        </h1>
      </div>
    </section>
  );
}

export default Hero;

import { forwardRef } from "react";
import Counter from "./animata/text/counter";

const FUNDACION = 2018;

const Stats = forwardRef<HTMLDivElement>((_, ref) => {
  const stats = [
    {
      value: new Date().getFullYear() - FUNDACION,
      prefix: "+",
      label: "Años de trayectoria",
    },
    { value: 3000, prefix: "+", label: "Productos disponibles" },
    { value: 24, suffix: "hs", label: "Entrega efectiva" },
    { value: 100, suffix: "%", label: "Cadena de trazabilidad" },
  ];
  return (
    <section
      id="stats"
      ref={ref}
      data-header-dark
      className="relative bg-primary-dark overflow-hidden"
    >
      {/* Top accent line */}
      <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-secondary/0 via-secondary to-secondary/0" />

      {/* Background pattern */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "radial-gradient(circle, white 1px, transparent 1px)",
          backgroundSize: "32px 32px",
        }}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 md:gap-6">
          {stats.map((stat, i) => (
            <div key={i} className="text-center group">
              <Counter
                targetValue={stat.value}
                prefix={stat.prefix}
                suffix={stat.suffix}
                className="font-display text-4xl md:text-5xl font-black text-secondary-light mb-2 leading-none"
              />

              <p className="text-white/55 text-xs font-semibold uppercase tracking-widest">
                {stat.label}
              </p>
              <div className="mt-4 mx-auto w-8 h-[2px] bg-white/15 rounded-full transition-all duration-500 group-hover:w-14 group-hover:bg-secondary/60" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
});
Stats.displayName = "Stats";

export default Stats;

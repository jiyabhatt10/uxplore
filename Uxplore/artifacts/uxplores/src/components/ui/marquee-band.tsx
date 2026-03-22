const BRANDS = [
  "TECHCORP",
  "INNOVATE",
  "NEXUS",
  "QUANTUM",
  "APEX",
  "ZENITH",
  "FUSION",
  "VERTEX",
];

export function MarqueeBand() {
  const doubled = [...BRANDS, ...BRANDS];

  return (
    <div className="w-full overflow-hidden border-y border-white/5 bg-white/[0.015] py-5 select-none">
      <div className="flex whitespace-nowrap animate-marquee" style={{ width: "max-content" }}>
        {doubled.map((brand, i) => (
          <span
            key={i}
            className="inline-flex items-center gap-4 mx-10 text-2xl md:text-3xl font-bold text-white/20 hover:text-white/40 transition-colors duration-300"
          >
            {brand}
            <span className="text-white/10 text-xl">✦</span>
          </span>
        ))}
      </div>
    </div>
  );
}

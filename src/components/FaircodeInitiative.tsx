import Image from "next/image";

const STATS = [
  { value: "13 Years", label: "Building software" },
  { value: "600+", label: "Projects shipped" },
  { value: "100%", label: "Client satisfaction" },
];

const CAPABILITIES = ["Custom Software", "ERP & ERPNext", "Mobile Apps", "Web & Cloud"];

export default function FaircodeInitiative() {
  return (
    <section id="about" className="scroll-mt-20 bg-[#141922] px-6 py-16 text-center sm:py-20">
      <div className="mx-auto max-w-2xl">
        <p className="text-xs font-bold uppercase tracking-[0.14em] text-white/60">
          A Faircode Initiative
        </p>
        <a
          href="https://faircodetech.com"
          aria-label="Visit Faircode's website"
          className="mt-4 flex items-center justify-center"
        >
          <Image src="/Faircode.webp" alt="Faircode" width={210} height={54} />
        </a>
        <p className="mt-4 text-base leading-[1.55] text-white/75">
          Faircode builds software that makes complex things simple, from
          enterprise operations to the weather app in your pocket. Climato is
          one of those initiatives.
        </p>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-x-10 gap-y-4 border-y border-white/10 py-6">
          {STATS.map((stat) => (
            <div key={stat.label}>
              <p className="font-heading text-2xl font-bold text-white">
                {stat.value}
              </p>
              <p className="mt-0.5 text-xs text-white/55">{stat.label}</p>
            </div>
          ))}
        </div>

        <div className="mt-6 flex flex-wrap items-center justify-center gap-2">
          {CAPABILITIES.map((capability) => (
            <span
              key={capability}
              className="rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs font-medium text-white/80"
            >
              {capability}
            </span>
          ))}
        </div>

        <a
          href="https://faircodetech.com"
          className="mt-7 inline-flex items-center gap-1.5 rounded-xl bg-white/10 px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-white/15"
        >
          Visit faircodetech.com
          <span aria-hidden="true">→</span>
        </a>
      </div>
    </section>
  );
}

import Image from "next/image";

export default function FaircodeInitiative() {
  return (
    <section className="bg-[#141922] px-6 py-16 text-center">
      <div className="mx-auto max-w-2xl">
        <p className="text-xs font-bold uppercase tracking-[0.14em] text-white/60">
          A Faircode Initiative
        </p>
        <a
          href="https://faircodetech.com"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Visit Faircode's website"
          className="mt-4 flex items-center justify-center"
        >
          <Image
            src="/Faircode.webp"
            alt="Faircode"
            width={210}
            height={54}
          />
        </a>
        <p className="mt-4 text-base leading-[1.55] text-white/75">
          Faircode builds software that makes complex things simple — from
          enterprise operations to the weather app in your pocket. Climato is
          one of those initiatives.
        </p>
      </div>
    </section>
  );
}

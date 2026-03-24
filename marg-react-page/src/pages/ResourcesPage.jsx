import { labEquipments, softwares } from "../data/resourcesData";
import { FaExternalLinkAlt, FaLaptopCode, FaFlask } from "react-icons/fa";

function Pill({ children, icon }) {
  return (
    <div className="inline-flex items-center gap-2 rounded-full border border-[#f0642b]/30 bg-[#f0642b]/10 px-4 py-1.5 text-sm font-semibold text-[#d84f1d]">
      {icon}
      {children}
    </div>
  );
}

function EquipmentCard({ item }) {
  return (
    <article className="group relative overflow-hidden rounded-3xl border border-neutral-200 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl">
      <div className="relative h-64 w-full overflow-hidden bg-linear-to-br from-neutral-100 to-neutral-200">
        <img
          src={item.image}
          alt={item.title}
          className={`h-full w-full ${item.imageClass ? item.imageClass : "object-cover"} transition duration-500 group-hover:scale-105`}
          loading="lazy"
        />
        <div className="absolute inset-x-0 bottom-0 h-24 bg-linear-to-t from-black/40 to-transparent" />
      </div>

      <div className="p-5">
        <a
          href={item.link}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-2 text-lg font-semibold leading-7 text-neutral-900 transition hover:text-[#f0642b]"
        >
          {item.title}
          <FaExternalLinkAlt className="text-xs opacity-70" />
        </a>
      </div>
    </article>
  );
}

function SoftwareCard({ software }) {
  return (
    <a
      href={software.link}
      target="_blank"
      rel="noreferrer"
      className="group rounded-2xl border border-neutral-200 bg-white px-5 py-4 shadow-sm transition hover:-translate-y-0.5 hover:border-[#f0642b]/50 hover:shadow-md"
    >
      <div className="flex items-center justify-between gap-3">
        <h4 className="font-semibold text-neutral-900 transition group-hover:text-[#f0642b]">
          {software.name}
        </h4>
        <FaExternalLinkAlt className="text-xs text-neutral-400 transition group-hover:text-[#f0642b]" />
      </div>
    </a>
  );
}

export default function ResourcesPage() {
  return (
    <main className="bg-neutral-50">
      {/* Hero */}
      <section className="relative overflow-hidden bg-white">
        <div className="absolute -top-20 -right-20 h-72 w-72 rounded-full bg-[#f0642b]/10 blur-3xl" />
        <div className="absolute -bottom-24 -left-20 h-72 w-72 rounded-full bg-orange-200/20 blur-3xl" />

        <div className="relative mx-auto max-w-7xl px-4 pt-12 pb-10 sm:pt-16 sm:pb-14 text-center">
          <h1 className="mt-4 text-5xl sm:text-6xl font-bold tracking-tight text-neutral-900">
            Resources
          </h1>
          <p className="mt-4 mx-auto max-w-2xl text-neutral-600 leading-7">
            Explore our lab equipment and software ecosystem supporting research in
            memory, anxiety, cognition, and human-centered experimentation.
          </p>
        </div>
      </section>

      {/* Equipment grid */}
      <section className="mx-auto max-w-7xl px-4 py-10 sm:py-12">
        <div className="mb-6">
          <h2 className="text-center text-2xl sm:text-3xl font-bold text-neutral-900">
            Lab Equipments
          </h2>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {labEquipments.map((item) => (
            <EquipmentCard key={item.title} item={item} />
          ))}
        </div>
      </section>

      {/* Software section */}
      <section className="mx-auto max-w-7xl px-4 pb-16">
        <div className="mb-6 flex items-center justify-center gap-2">
          <FaLaptopCode className="text-[#f0642b]" />
          <h2 className="text-2xl sm:text-3xl font-bold text-neutral-900">Softwares</h2>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {softwares.map((software) => (
            <SoftwareCard key={software.name} software={software} />
          ))}
        </div>
      </section>
    </main>
  );
}
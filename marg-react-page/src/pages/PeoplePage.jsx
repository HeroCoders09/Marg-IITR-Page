import {
  principalInvestigator,
  researchScholars,
  interns,
  alumni,
} from "../data/peopleData";
import { peopleGallery } from "../data/peopleGalleryData";
import { FaExternalLinkAlt, FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { useEffect, useRef, useState } from "react";

function SectionLabel({ children }) {
  return (
    <div className="mb-6 inline-flex items-center rounded-r-2xl bg-[#f0642b] px-6 py-2.5 text-white font-semibold shadow-sm">
      {children}
    </div>
  );
}

function PersonCard({ person }) {
  return (
    <article className="group overflow-hidden rounded-2xl border border-neutral-200 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg">
      <div className="relative overflow-hidden">
        <img
          src={person.image}
          alt={person.name}
          className="h-60 w-full object-cover transition duration-500 group-hover:scale-105"
          loading="lazy"
        />
      </div>
      <div className="bg-[#f0642b] px-4 py-4 text-white">
        <h3 className="text-lg font-semibold leading-tight">{person.name}</h3>
        <div className="my-2 h-px w-2/3 bg-white/70" />
        <p className="text-sm opacity-95">{person.role}</p>
      </div>
    </article>
  );
}

function PeopleGrid({ data }) {
  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {data.map((person) => (
        <PersonCard key={person.name} person={person} />
      ))}
    </div>
  );
}

function PeopleGalleryCarousel() {
  const [current, setCurrent] = useState(0);
  const [paused, setPaused] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);
  const total = peopleGallery.length;
  const timeoutRef = useRef(null);

  const goTo = (index) => {
    if (isAnimating) return; // prevent rapid click glitches
    setIsAnimating(true);
    setCurrent((index + total) % total);

    clearTimeout(timeoutRef.current);
    timeoutRef.current = setTimeout(() => {
      setIsAnimating(false);
    }, 500); // should match transition duration
  };

  const prev = () => goTo(current - 1);
  const next = () => goTo(current + 1);

  useEffect(() => {
    if (paused) return;
    const id = setInterval(() => {
      setCurrent((prevIdx) => (prevIdx + 1) % total);
    }, 4000);
    return () => clearInterval(id);
  }, [paused, total]);

  useEffect(() => {
    return () => clearTimeout(timeoutRef.current);
  }, []);

  return (
    <div
      className="overflow-hidden rounded-2xl border border-neutral-200 bg-white shadow-sm"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      {/* Sliding image track */}
      <div className="relative overflow-hidden bg-black">
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${current * 100}%)` }}
        >
          {peopleGallery.map((item, i) => (
            <div key={i} className="w-full shrink-0">
              <img
                src={item.image}
                alt={`Gallery ${i + 1}`}
                className="h-65 w-full object-contain sm:h-105 md:h-130"
              />
            </div>
          ))}
        </div>

        <button
          onClick={prev}
          className="absolute left-3 top-1/2 -translate-y-1/2 rounded-full bg-white/90 p-2 text-neutral-800 shadow hover:bg-white"
          aria-label="Previous"
        >
          <FaChevronLeft />
        </button>
        <button
          onClick={next}
          className="absolute right-3 top-1/2 -translate-y-1/2 rounded-full bg-white/90 p-2 text-neutral-800 shadow hover:bg-white"
          aria-label="Next"
        >
          <FaChevronRight />
        </button>

        <div className="absolute right-3 top-3 rounded-full bg-black/55 px-3 py-1 text-xs font-medium text-white">
          {current + 1} / {total}
        </div>
      </div>

      {/* Caption */}
      <div className="border-t border-neutral-200 bg-white px-5 py-4 sm:px-6 min-h-23">
        <p className="text-[15px] leading-7 text-neutral-700 sm:text-base">
          {peopleGallery[current].text}
        </p>
      </div>

      {/* Dots */}
      <div className="flex flex-wrap justify-center gap-2 bg-neutral-50 px-4 py-4">
        {peopleGallery.map((_, i) => (
          <button
            key={i}
            onClick={() => goTo(i)}
            aria-label={`Slide ${i + 1}`}
            className={`h-2.5 rounded-full transition-all duration-300 ${
              i === current ? "w-7 bg-[#f0642b]" : "w-2.5 bg-neutral-300 hover:bg-neutral-400"
            }`}
          />
        ))}
      </div>
    </div>
  );
}

export default function PeoplePage() {
  return (
    <main className="bg-linear-to-b from-white to-neutral-50">
      <section className="mx-auto max-w-7xl px-4 pt-10 pb-6 sm:pt-14">
        <h1 className="text-center text-4xl sm:text-5xl font-bold tracking-tight text-neutral-900">
          People
        </h1>
        <p className="mx-auto mt-3 max-w-2xl text-center text-neutral-600">
          Meet the team behind Memory and Anxiety Research Group (MARG), IIT Roorkee.
        </p>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-6 sm:py-8">
        <SectionLabel>Principal Investigator</SectionLabel>
        <a href={principalInvestigator.profileUrl} target="_blank" rel="noreferrer" className="group block">
          <article className="overflow-hidden rounded-3xl border border-neutral-200 bg-white shadow-sm transition duration-300 group-hover:shadow-xl">
            <div className="grid md:grid-cols-[360px_1fr]">
              <div className="overflow-hidden">
                <img
                  src={principalInvestigator.image}
                  alt={principalInvestigator.name}
                  className="h-85 md:h-full w-full object-cover transition duration-500 group-hover:scale-[1.03]"
                />
              </div>
              <div className="flex flex-col justify-between">
                <div className="p-6 sm:p-8">
                  <h2 className="text-2xl sm:text-3xl font-bold text-neutral-900">
                    {principalInvestigator.name}
                  </h2>
                  <p className="mt-1 text-base sm:text-lg text-[#f0642b] font-semibold">
                    {principalInvestigator.role}
                  </p>
                  <p className="mt-5 leading-8 text-neutral-700">{principalInvestigator.bio}</p>
                </div>
                <div className="flex items-center gap-2 bg-neutral-100 px-6 py-3 text-sm font-medium text-neutral-700">
                  View full profile <FaExternalLinkAlt className="text-xs" />
                </div>
              </div>
            </div>
          </article>
        </a>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-8">
        <SectionLabel>Research Scholars</SectionLabel>
        <PeopleGrid data={researchScholars} />
      </section>

      <section className="mx-auto max-w-7xl px-4 py-8">
        <SectionLabel>Interns</SectionLabel>
        <PeopleGrid data={interns} />
      </section>

      <section className="mx-auto max-w-7xl px-4 pt-8 pb-10">
        <SectionLabel>Alumni</SectionLabel>
        <PeopleGrid data={alumni} />
      </section>

      {/* NEW: Gallery section from old HTML */}
      <section className="mx-auto max-w-7xl px-4 pt-4 pb-16">
        <h2 className="mb-6 text-center text-3xl sm:text-4xl font-bold text-neutral-900">Gallery</h2>
        <PeopleGalleryCarousel />
      </section>
    </main>
  );
}
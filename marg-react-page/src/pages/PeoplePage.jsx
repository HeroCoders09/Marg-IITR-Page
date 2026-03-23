import {
  principalInvestigator,
  researchScholars,
  interns,
  alumni,
} from "../data/peopleData";

function SectionLabel({ children }) {
  return (
    <div className="mb-6 inline-flex rounded-r-xl bg-[#f0642b] px-6 py-2 text-white font-semibold shadow-sm">
      {children}
    </div>
  );
}

function PersonCard({ person }) {
  return (
    <article className="overflow-hidden rounded-xl border border-neutral-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-md">
      <img
        src={person.image}
        alt={person.name}
        className="h-56 w-full object-cover"
        loading="lazy"
      />
      <div className="bg-[#f0642b] px-4 py-3 text-white">
        <h3 className="text-lg font-semibold leading-tight">{person.name}</h3>
        <div className="my-2 h-px w-2/3 bg-white/70" />
        <p className="text-sm">{person.role}</p>
      </div>
    </article>
  );
}

export default function PeoplePage() {
  return (
    <main className="bg-white">
      <section className="mx-auto max-w-7xl px-4 py-10 sm:py-12">
        <h1 className="mb-10 text-center text-4xl font-bold text-neutral-900">People</h1>

        <SectionLabel>Principal Investigator</SectionLabel>

        <a
          href={principalInvestigator.profileUrl}
          target="_blank"
          rel="noreferrer"
          className="group block"
        >
          <article className="mx-auto max-w-4xl overflow-hidden rounded-2xl border border-neutral-200 bg-white shadow-sm transition group-hover:shadow-lg">
            <div className="grid md:grid-cols-[320px_1fr]">
              <img
                src={principalInvestigator.image}
                alt={principalInvestigator.name}
                className="h-80 w-full object-cover md:h-full"
              />
              <div className="flex flex-col justify-between">
                <div className="p-6">
                  <h2 className="text-2xl font-bold text-neutral-900">{principalInvestigator.name}</h2>
                  <p className="mt-1 text-[#f0642b] font-medium">{principalInvestigator.role}</p>
                  <p className="mt-4 leading-7 text-neutral-700">{principalInvestigator.bio}</p>
                </div>
                <div className="bg-neutral-100 px-6 py-3 text-sm text-neutral-600">
                  Click to view full profile
                </div>
              </div>
            </div>
          </article>
        </a>
      </section>

      <section className="mx-auto max-w-7xl px-4 pb-8">
        <SectionLabel>Research Scholars</SectionLabel>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {researchScholars.map((person) => (
            <PersonCard key={person.name} person={person} />
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-8">
        <SectionLabel>Interns</SectionLabel>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {interns.map((person) => (
            <PersonCard key={person.name} person={person} />
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 pt-8 pb-14">
        <SectionLabel>Alumni</SectionLabel>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {alumni.map((person) => (
            <PersonCard key={person.name} person={person} />
          ))}
        </div>
      </section>
    </main>
  );
}
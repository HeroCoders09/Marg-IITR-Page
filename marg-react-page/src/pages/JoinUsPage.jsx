import { FaExternalLinkAlt, FaUsers, FaFlask, FaGraduationCap } from "react-icons/fa";

export default function JoinUsPage() {
  const formUrl = "https://forms.gle/AgCLefirVoepRoGp6";

  return (
    <main className="bg-linear-to-b from-white to-neutral-50">
      {/* Hero */}
      <section className="relative overflow-hidden bg-white">
        <div className="absolute -top-20 -right-20 h-72 w-72 rounded-full bg-[#f0642b]/10 blur-3xl" />
        <div className="absolute -bottom-24 -left-20 h-72 w-72 rounded-full bg-orange-200/20 blur-3xl" />

        <div className="relative mx-auto max-w-7xl px-4 pt-12 pb-10 sm:pt-16 sm:pb-14 text-center">
          <h1 className="text-5xl sm:text-6xl font-bold tracking-tight text-neutral-900">
            Join Us
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-neutral-600 leading-7">
            Interested in working with the Memory and Anxiety Research Group (MARG), IIT Roorkee?
            Submit your application through the form below.
          </p>
        </div>
      </section>

      {/* Highlights */}
      <section className="mx-auto max-w-7xl px-4 pb-8">
        <div className="grid gap-4 sm:grid-cols-3">
          <div className="rounded-2xl border border-neutral-200 bg-white p-5 shadow-sm">
            <FaUsers className="text-[#f0642b]" />
            <h3 className="mt-2 font-semibold text-neutral-900">Collaborative Team</h3>
            <p className="mt-1 text-sm text-neutral-600">Work with scholars across memory and anxiety research.</p>
          </div>
          <div className="rounded-2xl border border-neutral-200 bg-white p-5 shadow-sm">
            <FaFlask className="text-[#f0642b]" />
            <h3 className="mt-2 font-semibold text-neutral-900">Hands-on Research</h3>
            <p className="mt-1 text-sm text-neutral-600">Engage with experiments, tools, and scientific methods.</p>
          </div>
          <div className="rounded-2xl border border-neutral-200 bg-white p-5 shadow-sm">
            <FaGraduationCap className="text-[#f0642b]" />
            <h3 className="mt-2 font-semibold text-neutral-900">Learning Environment</h3>
            <p className="mt-1 text-sm text-neutral-600">Build strong research and academic communication skills.</p>
          </div>
        </div>
      </section>

      {/* CTA only */}
      <section className="mx-auto max-w-4xl px-4 pb-16">
        <div className="rounded-3xl border border-neutral-200 bg-white p-8 text-center shadow-sm sm:p-10">
          <h2 className="text-2xl sm:text-3xl font-bold text-neutral-900">Application Form</h2>
          <p className="mx-auto mt-3 max-w-xl text-neutral-600">
            Click the button below to open the Google Form in a new tab and submit your application.
          </p>

          <a
            href={formUrl}
            target="_blank"
            rel="noreferrer"
            className="mt-6 inline-flex items-center gap-2 rounded-xl border-2 border-neutral-800 bg-[#f0642b] px-7 py-3 text-white font-semibold hover:opacity-90"
          >
            Open Application Form <FaExternalLinkAlt className="text-sm" />
          </a>
        </div>
      </section>
    </main>
  );
}
import { useMemo, useState } from "react";
import {
  journalArticles,
  conferenceProceedings,
  conferencePresentations,
} from "../data/researchData";
import { FaExternalLinkAlt, FaSearch } from "react-icons/fa";

const tabs = [
  { key: "journal", label: "Journal Articles", data: journalArticles },
  { key: "proc", label: "Conference Proceedings", data: conferenceProceedings },
  { key: "ppt", label: "Conference Presentations", data: conferencePresentations },
];

function TabButton({ active, onClick, children }) {
  return (
    <button
      onClick={onClick}
      className={`rounded-xl border px-4 py-2.5 text-sm sm:text-base font-medium transition ${
        active
          ? "border-[#f0642b] bg-[#f0642b] text-white shadow-sm"
          : "border-neutral-300 bg-white text-neutral-700 hover:border-[#f0642b] hover:text-[#f0642b]"
      }`}
    >
      {children}
    </button>
  );
}

function PublicationCard({ item, index }) {
  return (
    <article className="rounded-2xl border border-neutral-200 bg-white p-5 shadow-sm transition hover:shadow-md">
      <div className="mb-2 text-xs font-semibold text-[#f0642b]">#{index + 1}</div>

      <a
        href={item.link}
        target="_blank"
        rel="noreferrer"
        className="group inline-flex items-start gap-2 text-lg font-semibold leading-7 text-neutral-900 hover:text-[#f0642b]"
      >
        <span>{item.title}</span>
        <FaExternalLinkAlt className="mt-1 shrink-0 text-xs opacity-70 group-hover:opacity-100" />
      </a>

      <p className="mt-3 text-sm sm:text-base text-neutral-700">
        <span className="font-medium">Authors:</span> {item.authors}
      </p>
      <p className="mt-1 text-sm sm:text-base italic text-neutral-600">{item.venue}</p>
    </article>
  );
}

export default function ResearchPage() {
    const [activeTab, setActiveTab] = useState("journal");
    const [query, setQuery] = useState("");

    const activeData = useMemo(() => {
    return tabs.find((t) => t.key === activeTab)?.data ?? [];
    }, [activeTab]);

    const filteredData = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return activeData;

    return activeData.filter((item) => {
        const title = item.title?.toLowerCase() ?? "";
        const authors = item.authors?.toLowerCase() ?? "";
        const venue = item.venue?.toLowerCase() ?? "";
        return title.includes(q) || authors.includes(q) || venue.includes(q);
    });
    }, [activeData, query]);

  return (
    <main className="bg-linear-to-b from-white to-neutral-50">
      <section className="mx-auto max-w-7xl px-4 pt-10 pb-6 sm:pt-14">
        <h1 className="text-center text-4xl sm:text-5xl font-bold tracking-tight text-neutral-900">
          Research
        </h1>
        <p className="mx-auto mt-3 max-w-3xl text-center text-neutral-600">
          Publications and academic contributions from the Memory and Anxiety Research Group (MARG), IIT Roorkee.
        </p>
      </section>

      <section className="mx-auto max-w-7xl px-4 pb-14">
        {/* Tabs */}
        <div className="mb-5 flex flex-wrap gap-3">
          {tabs.map((tab) => (
            <TabButton
              key={tab.key}
              active={activeTab === tab.key}
              onClick={() => {
                setActiveTab(tab.key);
                setQuery("");
              }}
            >
              {tab.label}
            </TabButton>
          ))}
        </div>

        {/* Search */}
        <div className="mb-6 flex items-center gap-2 rounded-xl border border-neutral-300 bg-white px-4 py-3 shadow-sm">
          <FaSearch className="text-neutral-500" />
          <input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search title, author, venue..."
            className="w-full bg-transparent text-neutral-800 outline-none placeholder:text-neutral-400"
          />
        </div>

        {/* Stats */}
        <p className="mb-4 text-sm text-neutral-600">
          Showing <span className="font-semibold text-neutral-800">{filteredData.length}</span> item(s)
        </p>

        {/* List */}
        <div className="grid gap-4 sm:gap-5">
          {filteredData.length ? (
            filteredData.map((item, index) => (
              <PublicationCard key={`${item.title}-${index}`} item={item} index={index} />
            ))
          ) : (
            <div className="rounded-xl border border-dashed border-neutral-300 bg-white p-8 text-center text-neutral-500">
              No results found for “{query}”
            </div>
          )}
        </div>
      </section>
    </main>
  );
}
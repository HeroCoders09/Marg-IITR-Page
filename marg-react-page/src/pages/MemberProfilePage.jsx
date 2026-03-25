import { useMemo, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { FaEnvelope, FaLinkedin, FaArrowLeft, FaOrcid, FaGlobe } from "react-icons/fa";
import { membersData } from "../data/membersData";

const sectionLabels = {
  currentAffiliation: "Current Affiliation",
  about: "About",
  background: "Background",
  project: "Project",
  publications: "Publications",
  workshops: "Workshops",
  conferences: "Conferences",
  awards: "Awards",
  media: "Media",
  memberships: "Memberships",
  workExperience: "Work Experience",
  otherPositions: "Other Positions",
  internship: "Internship",
  scholarships: "Scholarships",
};

const sectionOrder = [
  "currentAffiliation",
  "about",
  "background",
  "project",
  "publications",
  "workshops",
  "conferences",
  "awards",
  "media",
  "memberships",
  "workExperience",
  "otherPositions",
  "internship",
  "scholarships",
];

function isNonEmpty(value) {
  if (Array.isArray(value)) return value.length > 0;
  if (typeof value === "string") return value.trim().length > 0;
  if (value && typeof value === "object") return Object.keys(value).length > 0;
  return Boolean(value);
}

function normalizeSectionItems(value) {
  if (typeof value === "string") return [{ type: "text", text: value }];

  if (Array.isArray(value)) {
    return value.map((item) => {
      if (typeof item === "string") return { type: "bullet", text: item };
      if (item?.title && item?.link) return { type: "link", title: item.title, link: item.link };
      if (item?.heading && Array.isArray(item?.items)) {
        return { type: "group", heading: item.heading, items: item.items };
      }
      if (item?.text) return { type: "bullet", text: item.text };
      return { type: "bullet", text: String(item) };
    });
  }

  if (value && typeof value === "object") {
    if (value.title && value.link) return [{ type: "link", title: value.title, link: value.link }];
    if (value.heading && Array.isArray(value.items)) {
      return [{ type: "group", heading: value.heading, items: value.items }];
    }
    return [{ type: "text", text: JSON.stringify(value) }];
  }

  return [];
}

function SectionContent({ value }) {
  const items = normalizeSectionItems(value);
  if (!items.length) return null;

  const hasListLike = items.some(
    (i) => i.type === "bullet" || i.type === "group" || i.type === "link"
  );

  if (!hasListLike && items[0]?.type === "text") {
    return <p className="text-[16px] leading-8 text-neutral-700">{items[0].text}</p>;
  }

  return (
    <ul className="list-disc space-y-2.5 pl-5 text-[16px] leading-7 text-neutral-700">
      {items.map((item, idx) => {
        if (item.type === "bullet") return <li key={idx}>{item.text}</li>;

        if (item.type === "link") {
          return (
            <li key={idx}>
              <a
                href={item.link}
                target="_blank"
                rel="noreferrer"
                className="font-medium text-[#2e7fb6] hover:text-[#f0642b] hover:underline"
              >
                {item.title}
              </a>
            </li>
          );
        }

        if (item.type === "group") {
          return (
            <li key={idx}>
              <span className="font-semibold text-neutral-900">{item.heading}</span>
              <ul className="mt-1.5 list-disc space-y-1.5 pl-5">
                {item.items.map((sub, sIdx) => (
                  <li key={sIdx}>{typeof sub === "string" ? sub : sub?.text ?? String(sub)}</li>
                ))}
              </ul>
            </li>
          );
        }

        return <li key={idx}>{String(item)}</li>;
      })}
    </ul>
  );
}

export default function MemberProfilePage() {
  const { slug } = useParams();
  const member = membersData.find((m) => m.slug === slug);

  const availableTabs = useMemo(() => {
    if (!member?.sections) return [];
    return sectionOrder.filter((key) => isNonEmpty(member.sections[key]));
  }, [member]);

  const [activeTab, setActiveTab] = useState("about");
  const selectedTab = availableTabs.includes(activeTab) ? activeTab : availableTabs[0] || "about";

  if (!member) {
    return (
      <main className="mx-auto max-w-5xl px-4 py-24 text-center">
        <h1 className="text-3xl font-bold text-neutral-900">Profile not found</h1>
        <p className="mt-3 text-neutral-600">The requested member profile does not exist.</p>
        <Link
          to="/people"
          className="mt-6 inline-block rounded-lg bg-[#f0642b] px-6 py-3 font-semibold text-white"
        >
          Back to People
        </Link>
      </main>
    );
  }

  return (
    <main className="bg-neutral-50 py-8 sm:py-10">
      <div className="mx-auto max-w-384 px-3 sm:px-5 lg:px-8">
        <Link
          to="/people"
          className="mb-4 inline-flex items-center gap-2 text-base font-medium text-[#2e7fb6] hover:text-[#f0642b]"
        >
          <FaArrowLeft /> Back to People
        </Link>

        <section className="overflow-hidden rounded-3xl border border-neutral-200 bg-white shadow-md">
          <div className="grid xl:grid-cols-[430px_1fr]">
            <div className="bg-neutral-100 p-7 sm:p-8">
              <img
                src={member.image}
                alt={member.name}
                className="h-full min-h-155 w-full rounded-2xl object-cover"
              />
            </div>

            <div className="p-8 sm:p-10 lg:p-12">
              <p className="text-[15px] font-semibold uppercase tracking-wide text-[#f0642b]">
                {member.role}
              </p>
              <h1 className="mt-1.5 text-3xl font-bold text-neutral-900 sm:text-4xl">{member.name}</h1>

              <div className="mt-5 flex flex-wrap gap-x-6 gap-y-2 text-[15px]">
                {member.linkedin && (
                  <a
                    href={member.linkedin}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 text-[#2e7fb6] hover:text-[#f0642b]"
                  >
                    <FaLinkedin /> LinkedIn
                  </a>
                )}

                {member.email && (
                  <a
                    href={`mailto:${member.email}`}
                    className="inline-flex items-center gap-2 text-[#2e7fb6] hover:text-[#f0642b]"
                  >
                    <FaEnvelope /> {member.email}
                  </a>
                )}

                {member.orcid && (
                  <a
                    href={member.orcid.startsWith("http") ? member.orcid : `https://orcid.org/${member.orcid}`}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 text-[#2e7fb6] hover:text-[#f0642b]"
                  >
                    <FaOrcid /> ORCID
                  </a>
                )}

                {member.researchGate && (
                  <a
                    href={member.researchGate}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 text-[#2e7fb6] hover:text-[#f0642b]"
                  >
                    <FaGlobe /> ResearchGate
                  </a>
                )}
              </div>

              <div className="mt-7 border-b border-neutral-200 pb-4">
                <div
                  className={`grid gap-2.5 ${
                    availableTabs.length > 5
                      ? "grid-cols-3 sm:grid-cols-4 md:grid-cols-5"
                      : "grid-cols-2 sm:grid-cols-3 md:grid-cols-5"
                  }`}
                >
                  {availableTabs.map((key) => (
                    <button
                      key={key}
                      onClick={() => setActiveTab(key)}
                      className={`rounded-lg px-3 py-2.5 text-center text-sm font-semibold transition ${
                        selectedTab === key
                          ? "bg-[#f0642b] text-white"
                          : "bg-neutral-100 text-neutral-700 hover:bg-neutral-200"
                      }`}
                    >
                      {sectionLabels[key] ?? key}
                    </button>
                  ))}
                </div>
              </div>

              <div className="pt-6">
                {/* Fixed-size section card */}
                <div className="h-100 rounded-xl bg-neutral-50 p-5 sm:p-6 flex flex-col">
                  <h2 className="mb-4 shrink-0 text-xl font-bold text-neutral-900">
                    {sectionLabels[selectedTab] ?? selectedTab}
                  </h2>

                  <div className="min-h-0 flex-1 overflow-y-auto pr-2">
                    <SectionContent value={member.sections?.[selectedTab]} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
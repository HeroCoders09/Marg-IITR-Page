import { useMemo, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { FaEnvelope, FaLinkedin, FaArrowLeft, FaOrcid, FaGlobe } from "react-icons/fa";
import { membersData } from "../data/membersData";

/* ───────────────────────── Section configuration ─────────────────────────
   Every key used in membersData `sections` must appear in `sectionLabels`
   and `sectionOrder`, otherwise it will not be shown on the profile page. */

const sectionLabels = {
  currentAffiliation: "Current Affiliation",
  about: "About",
  background: "Background",
  professionalInterests: "Professional Interests",
  project: "Projects",
  publications: "Publications",
  researchPublications: "Research & Publications",
  abstract: "Abstract",
  patents: "Patents",
  conferences: "Conferences",
  workshops: "Workshops",
  courses: "Courses",
  webinars: "Webinars",
  awards: "Awards",
  achievements: "Achievements",
  scholarships: "Scholarships",
  media: "Media",
  memberships: "Memberships",
  workExperience: "Work Experience",
  otherPositions: "Other Positions",
  academicDuties: "Academic Duties",
  internship: "Internship",
};

const sectionOrder = Object.keys(sectionLabels);

// Sections rendered as flowing paragraphs instead of bullet lists.
const paragraphSections = new Set(["about", "abstract", "currentAffiliation"]);

/* ───────────────────────────── Helpers ───────────────────────────── */

function isNonEmpty(value) {
  if (Array.isArray(value)) return value.length > 0;
  if (typeof value === "string") return value.trim().length > 0;
  if (value && typeof value === "object") return Object.keys(value).length > 0;
  return Boolean(value);
}

function normalizeUrl(url) {
  if (!url) return "";
  return /^(https?:|mailto:)/i.test(url) ? url : `https://${url}`;
}

function orcidUrl(orcid) {
  return /^https?:/i.test(orcid) ? orcid : `https://orcid.org/${orcid}`;
}

function getInitials(name = "") {
  return name
    .replace(/^dr\.?\s+/i, "")
    .split(/\s+/)
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0].toUpperCase())
    .join("");
}

function itemCount(value) {
  return Array.isArray(value) ? value.length : 1;
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

/* ───────────────────────────── Components ───────────────────────────── */

const linkClass =
  "font-medium text-[#2e7fb6] underline-offset-2 transition hover:text-[#f0642b] hover:underline";

function ContactLink({ href, icon, children, external = true }) {
  return (
    <a
      href={href}
      {...(external ? { target: "_blank", rel: "noreferrer" } : {})}
      className="inline-flex items-center gap-2 text-[#2e7fb6] transition hover:text-[#f0642b]"
    >
      {icon} {children}
    </a>
  );
}

function SectionContent({ value, asParagraphs }) {
  const items = normalizeSectionItems(value);
  if (!items.length) return null;

  if (asParagraphs) {
    return (
      <div className="space-y-4 text-[15px] leading-7 text-neutral-700">
        {items.map((item, idx) => (
          <p key={idx}>{item.text ?? item.title ?? ""}</p>
        ))}
      </div>
    );
  }

  return (
    <ul className="list-disc space-y-3 pl-5 text-[15px] leading-6 text-neutral-700 marker:text-[#f0642b]">
      {items.map((item, idx) => {
        if (item.type === "link") {
          return (
            <li key={idx}>
              <a href={normalizeUrl(item.link)} target="_blank" rel="noreferrer" className={linkClass}>
                {item.title}
              </a>
            </li>
          );
        }

        if (item.type === "group") {
          return (
            <li key={idx} className="list-none -ml-5">
              <p className="mb-2 font-semibold text-neutral-900">{item.heading}</p>
              <ul className="list-disc space-y-2.5 pl-5 marker:text-[#f0642b]">
                {item.items.map((sub, sIdx) => (
                  <li key={sIdx}>{typeof sub === "string" ? sub : sub?.text ?? String(sub)}</li>
                ))}
              </ul>
            </li>
          );
        }

        return <li key={idx}>{item.text ?? String(item)}</li>;
      })}
    </ul>
  );
}

function ProfileImage({ member }) {
  if (member.image) {
    return (
      <img
        src={member.image}
        alt={member.name}
        className="h-full min-h-170 w-full rounded-2xl object-cover"
      />
    );
  }

  return (
    <div
      role="img"
      aria-label={member.name}
      className="flex h-full min-h-170 w-full items-center justify-center rounded-2xl bg-linear-to-br from-[#2e7fb6]/15 to-[#f0642b]/15"
    >
      <span className="text-7xl font-bold text-[#2e7fb6]">{getInitials(member.name)}</span>
    </div>
  );
}

// Sections whose tab should not show an item counter.
const hideCountSections = new Set(["background", "conferences"]);

export default function MemberProfilePage() {
  const { slug } = useParams();
  // `key` remounts the profile (and resets the active tab) when the slug changes.
  return <MemberProfile key={slug} slug={slug} />;
}

function MemberProfile({ slug }) {
  const member = membersData.find((m) => m.slug === slug);

  const availableTabs = useMemo(() => {
    if (!member?.sections) return [];
    return sectionOrder.filter((key) => isNonEmpty(member.sections[key]));
  }, [member]);

  const [activeTab, setActiveTab] = useState(null);

  const selectedTab = availableTabs.includes(activeTab) ? activeTab : availableTabs[0];

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
      <div className="mx-auto max-w-450 px-3 sm:px-5 lg:px-8">
        <Link
          to="/people"
          className="mb-4 inline-flex items-center gap-2 text-base font-medium text-[#2e7fb6] transition hover:text-[#f0642b]"
        >
          <FaArrowLeft /> Back to People
        </Link>

        <section className="overflow-hidden rounded-3xl border border-neutral-200 bg-white shadow-md">
          <div className="grid xl:grid-cols-[430px_1fr]">
            <div className="bg-neutral-100 p-7 sm:p-8">
              <ProfileImage member={member} />
            </div>

            <div className="p-8 sm:p-10 lg:p-12">
              <p className="text-[15px] font-semibold uppercase tracking-wide text-[#f0642b]">
                {member.role}
              </p>
              <h1 className="mt-1.5 text-3xl font-bold text-neutral-900 sm:text-4xl">{member.name}</h1>
              {member.department && (
                <p className="mt-1.5 text-[15px] text-neutral-500">{member.department}</p>
              )}

              <div className="mt-5 flex flex-wrap gap-x-6 gap-y-2 text-[15px]">
                {member.email && (
                  <ContactLink href={`mailto:${member.email}`} icon={<FaEnvelope />} external={false}>
                    {member.email}
                  </ContactLink>
                )}
                {member.linkedin && (
                  <ContactLink href={normalizeUrl(member.linkedin)} icon={<FaLinkedin />}>
                    LinkedIn
                  </ContactLink>
                )}
                {member.orcid && (
                  <ContactLink href={orcidUrl(member.orcid)} icon={<FaOrcid />}>
                    ORCID
                  </ContactLink>
                )}
                {member.researchGate && (
                  <ContactLink href={normalizeUrl(member.researchGate)} icon={<FaGlobe />}>
                    ResearchGate
                  </ContactLink>
                )}
              </div>

              <div className="mt-7 border-b border-neutral-200 pb-4">
                <div className="flex flex-wrap gap-2.5" role="tablist">
                  {availableTabs.map((key) => {
                    const isActive = selectedTab === key;
                    const count = itemCount(member.sections[key]);
                    const showCount =
                      !paragraphSections.has(key) && !hideCountSections.has(key) && count > 1;

                    return (
                      <button
                        key={key}
                        role="tab"
                        aria-selected={isActive}
                        onClick={() => setActiveTab(key)}
                        className={`rounded-lg px-3.5 py-2 text-sm font-semibold transition ${
                          isActive
                            ? "bg-[#f0642b] text-white shadow-sm"
                            : "bg-neutral-100 text-neutral-700 hover:bg-neutral-200"
                        }`}
                      >
                        {sectionLabels[key]}
                        {showCount && (
                          <span
                            className={`ml-1.5 rounded-full px-1.5 py-0.5 text-xs ${
                              isActive ? "bg-white/25 text-white" : "bg-neutral-200 text-neutral-600"
                            }`}
                          >
                            {count}
                          </span>
                        )}
                      </button>
                    );
                  })}
                </div>
              </div>

              <div className="pt-6">
                {/* Fixed-size section card */}
                <div className="flex h-107.5 flex-col rounded-xl bg-neutral-50 p-5 sm:p-6">
                  <h2 className="mb-4 shrink-0 text-xl font-bold text-neutral-900">
                    {sectionLabels[selectedTab] ?? selectedTab}
                  </h2>

                  <div className="min-h-0 flex-1 overflow-y-auto pr-2">
                    <SectionContent
                      value={member.sections?.[selectedTab]}
                      asParagraphs={paragraphSections.has(selectedTab)}
                    />
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

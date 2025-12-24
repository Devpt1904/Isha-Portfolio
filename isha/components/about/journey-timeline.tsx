"use client";

import { Icon } from "@iconify/react";

import type { EducationItems, ExperienceItems } from "@/components/about/types";

type JourneyTimelineProps = {
  education: EducationItems;
  experience: ExperienceItems;
};

type TimelineKind = "education" | "experience";

type TimelineEvent = {
  kind: TimelineKind;
  title: string;
  dateLabel: string;
  subtitle?: string;
  description: string;
  sortKey: number;
};

const MONTHS: Record<string, number> = {
  jan: 1,
  january: 1,
  feb: 2,
  february: 2,
  mar: 3,
  march: 3,
  apr: 4,
  april: 4,
  may: 5,
  jun: 6,
  june: 6,
  jul: 7,
  july: 7,
  aug: 8,
  august: 8,
  sep: 9,
  sept: 9,
  september: 9,
  oct: 10,
  october: 10,
  nov: 11,
  november: 11,
  dec: 12,
  december: 12,
};

function parseStartSortKey(dateLabel: string): number {
  // Supports:
  // - "2020"
  // - "2022 - 2026"
  // - "May 2025 - June 2025"
  // - "Sept 2024 - Dec 2024"
  // - "Sept 2023 - Present"
  const start = dateLabel.split("-")[0]?.trim() ?? dateLabel.trim();
  const yearMatch = start.match(/(19|20)\d{2}/);
  const year = yearMatch ? Number(yearMatch[0]) : 0;

  const monthMatch = start.match(/[A-Za-z]+/);
  const monthRaw = monthMatch?.[0]?.toLowerCase() ?? "";
  const month = MONTHS[monthRaw] ?? 1;

  // YYYYMM style number for stable chronological sorting
  return year * 100 + month;
}

function orgFromDescription(text: string) {
  // e.g. "Photon School, where I ..." -> "Photon School"
  const idx = text.indexOf(",");
  return idx === -1 ? "" : text.slice(0, idx).trim();
}

function restAfterOrg(text: string, org: string) {
  if (!org) return text;
  const prefix = `${org},`;
  return text.startsWith(prefix) ? text.slice(prefix.length).trim() : text;
}

function firstSentence(text: string) {
  const idx = text.indexOf(".");
  return idx === -1 ? text : text.slice(0, idx).trim();
}

function restAfterFirstSentence(text: string, first: string) {
  if (!first) return text;
  const prefix = `${first}.`;
  return text.startsWith(prefix) ? text.slice(prefix.length).trim() : text;
}

export const JourneyTimeline = ({ education, experience }: JourneyTimelineProps) => {
  const events: TimelineEvent[] = [
    ...education.map((item): TimelineEvent => {
      const subtitle = firstSentence(item.description);
      return {
        kind: "education" as TimelineKind,
        title: item.title,
        dateLabel: item.date,
        subtitle,
        description: restAfterFirstSentence(item.description, subtitle),
        sortKey: parseStartSortKey(item.date),
      };
    }),
    ...experience.map((item): TimelineEvent => {
      const org = orgFromDescription(item.description);
      return {
        kind: "experience" as TimelineKind,
        title: item.title,
        dateLabel: item.date,
        subtitle: org || undefined,
        description: restAfterOrg(item.description, org),
        sortKey: parseStartSortKey(item.date),
      };
    }),
  ].sort((a, b) => {
    if (a.sortKey !== b.sortKey) return a.sortKey - b.sortKey;

    // Tie-breaker: keep education milestones in a natural academic order
    // for same-year entries (e.g., HSC before B.Tech if both start in 2022).
    const eduRank = (title: string) => {
      const t = title.toLowerCase();
      if (t.includes("secondary") || t.includes("ssc")) return 0;
      if (t.includes("higher secondary") || t.includes("hsc")) return 1;
      if (t.includes("b.tech") || t.includes("btech")) return 2;
      return 3;
    };

    if (a.kind === "education" && b.kind === "education") {
      return eduRank(a.title) - eduRank(b.title);
    }

    // If still tied, keep a stable-ish order by kind then title.
    if (a.kind !== b.kind) return a.kind.localeCompare(b.kind);
    return a.title.localeCompare(b.title);
  });

  return (
    <section className="mt-12 min-h-[85vh] flex items-stretch">
      <div className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-md overflow-hidden">
        <div className="px-6 md:px-10 pt-10 pb-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white">My Journey</h2>
          <p className="mt-3 text-sm md:text-base text-white/70">
            Education &amp; experience over the years
          </p>
        </div>

        <div className="relative px-6 md:px-10 pb-24 min-h-[75vh]">
          {/* Center timeline rail */}
          <div className="pointer-events-none absolute overflow-hidden md:z-0 z-[-10]  left-1/2 -translate-x-1/2 top-0 bottom-0 w-[2px] bg-gradient-to-b from-primary-500/70 via-white/10 to-secondary-400/70" />
          <span className="absolute left-1/2 -translate-x-1/2 top-0 h-3 w-3 rounded-full bg-primary-500 shadow-[0_0_0_8px_rgba(0,0,0,0.45)]" />
          <span className="absolute left-1/2 -translate-x-1/2 bottom-0 h-3 w-3 rounded-full bg-secondary-400 shadow-[0_0_0_8px_rgba(0,0,0,0.45)]" />

          <div className="space-y-6">
            {events.map((event, idx) => {
              const isLeft = idx % 2 === 0;
              const accent =
                event.kind === "education" ? "text-primary-300" : "text-secondary-300";
              const dotColor = event.kind === "education" ? "bg-primary-500" : "bg-secondary-400";
              const icon = event.kind === "education" ? "mdi:school-outline" : "mdi:briefcase-outline";
              const badge =
                event.kind === "education" ? "EDUCATION" : "EXPERIENCE";
              const badgeBg =
                event.kind === "education"
                  ? "bg-black/40 text-primary-200 border-white/20"
                  : "bg-black/40 text-secondary-200 border-white/20";

              return (
                <div
                  key={`${event.kind}-${event.title}-${event.dateLabel}`}
                  className="grid grid-cols-1 md:grid-cols-[1fr_56px_1fr] items-start gap-4"
                >
                  {/* Mobile (single column card) */}
                  <div className="md:hidden">
                    <div className="rounded-2xl border border-white/15 bg-black p-5 z-50">
                      <div className="flex items-center justify-between gap-3">
                        <span
                          className={`inline-flex items-center gap-2 rounded-full px-3 py-1 text-sm font-extrabold tracking-wider uppercase border drop-shadow-[0_1px_10px_rgba(0,0,0,0.75)] ${badgeBg}`}
                        >
                          <Icon icon={icon} width={14} height={14} />
                          {badge}
                        </span>
                        <p className={`text-sm font-semibold ${accent} text-white/85`}>
                          {event.dateLabel}
                        </p>
                      </div>
                      <p className="mt-3 text-lg font-bold text-white tracking-tight">
                        {event.title}
                      </p>
                      {event.subtitle && (
                        <p className="mt-2 text-sm text-white/80">{event.subtitle}</p>
                      )}
                      <p className="mt-2 text-sm text-white/70">{event.description}</p>
                    </div>
                  </div>

                  {/* Desktop left card */}
                  <div className="hidden md:flex md:justify-end">
                    {isLeft ? (
                      <div className="relative w-full max-w-[460px]">
                        <div className="absolute -right-6 top-7 h-px w-6 bg-white/15" />
                        <div className="rounded-2xl border border-white/15 bg-black/35 p-5">
                          <div className="flex items-center justify-between gap-3">
                            <span
                              className={`inline-flex items-center gap-2 rounded-full px-3 py-1 text-sm font-extrabold tracking-wider uppercase border drop-shadow-[0_1px_10px_rgba(0,0,0,0.75)] ${badgeBg}`}
                            >
                              <Icon icon={icon} width={14} height={14} />
                              {badge}
                            </span>
                            <p className={`text-sm font-semibold ${accent} text-white/85`}>
                              {event.dateLabel}
                            </p>
                          </div>
                          <p className="mt-3 text-lg font-bold text-white tracking-tight">
                            {event.title}
                          </p>
                          {event.subtitle && (
                            <p className="mt-2 text-sm text-white/80">{event.subtitle}</p>
                          )}
                          <p className="mt-2 text-sm text-white/70">{event.description}</p>
                        </div>
                      </div>
                    ) : (
                      <div />
                    )}
                  </div>

                  {/* Center dot */}
                  <div className="relative hidden md:flex items-start justify-center">
                    <span
                      className={[
                        "mt-7 h-3.5 w-3.5 rounded-full ring-2 ring-background shadow-[0_0_0_6px_rgba(0,0,0,0.45)]",
                        dotColor,
                      ].join(" ")}
                    />
                  </div>

                  {/* Desktop right card */}
                  <div className="hidden md:flex md:justify-start">
                    {!isLeft ? (
                      <div className="relative w-full max-w-[460px]">
                        <div className="absolute -left-6 top-7 h-px w-6 bg-white/15" />
                        <div className="rounded-2xl border border-white/15 bg-black/35 p-5">
                          <div className="flex items-center justify-between gap-3">
                            <span
                              className={`inline-flex items-center gap-2 rounded-full px-3 py-1 text-sm font-extrabold tracking-wider uppercase border drop-shadow-[0_1px_10px_rgba(0,0,0,0.75)] ${badgeBg}`}
                            >
                              <Icon icon={icon} width={14} height={14} />
                              {badge}
                            </span>
                            <p className={`text-sm font-semibold ${accent} text-white/85`}>
                              {event.dateLabel}
                            </p>
                          </div>
                          <p className="mt-3 text-lg font-bold text-white tracking-tight">
                            {event.title}
                          </p>
                          {event.subtitle && (
                            <p className="mt-2 text-sm text-white/80">{event.subtitle}</p>
                          )}
                          <p className="mt-2 text-sm text-white/70">{event.description}</p>
                        </div>
                      </div>
                    ) : (
                      <div />
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};



import type { Article, ArticleCategory, ArticleType } from '../types/article';

export const staffAuthor = {
  id: 'outlaw-desk',
  name: 'Outlaw.News Desk',
  slug: 'outlaw-news-desk',
  title: 'Independent Field Reporting',
};

const demo = (
  id: string,
  category: ArticleCategory,
  type: ArticleType,
  title: string,
  deck: string,
  options: Partial<Article> = {},
): Article => ({
  id,
  slug: id,
  category,
  type,
  status: 'demo',
  title,
  deck,
  author: staffAuthor,
  publishedAt: '2026-09-12T10:00:00-05:00',
  readingTimeMinutes: 5,
  tags: [],
  ...options,
});

export const articles: Article[] = [
  demo('public-records-are-public', 'rights-power', 'guide', 'Public Records Are Public—So Why Are They So Hard to Get?', 'A practical look at request language, exemptions, timelines, fees, and the paper trail created when access is delayed.', { featured: true, mostRead: true, readingTimeMinutes: 8, tags: ['public records', 'transparency'] }),
  demo('agenda-before-the-meeting', 'rights-power', 'field-note', 'Read the Agenda Before the Meeting', 'How to spot consent-calendar decisions, contract approvals, executive-session notices, and items likely to move without debate.', { tags: ['local government', 'meetings'] }),
  demo('policy-vs-practice', 'rights-power', 'analysis', 'The Policy Says One Thing. What Does the Practice Show?', 'A verification framework for comparing written rules with complaints, incident reports, audits, and real-world enforcement.', { mostRead: true, tags: ['accountability', 'policy'] }),
  demo('records-request-denial-map', 'rights-power', 'report', 'Mapping a Records Denial From Request to Appeal', 'A document-first walkthrough of the dates, people, statutes, correspondence, and remedies that make a denial understandable.', { documentsIncluded: true, tags: ['public records', 'appeals'] }),
  demo('public-comment-rules', 'rights-power', 'guide', 'Before Public Comment: Know the Rules They Actually Adopted', 'Find the ordinance, policy, or meeting rule that governs time limits, signs, recording, decorum, and speaker registration.', { tags: ['speech', 'public meetings'] }),

  demo('week-without-grid-power', 'off-grid', 'field-note', 'What a Week Without Grid Power Actually Teaches You', 'A field checklist for refrigeration, lighting, charging, cooking, communications, fuel, and the mistakes that surface fast.', { featured: true, mostRead: true, readingTimeMinutes: 7, tags: ['power', 'preparedness'] }),
  demo('water-before-watts', 'off-grid', 'guide', 'Water Before Watts', 'Why water storage, filtration, pumping, and sanitation planning should come before the exciting parts of an off-grid build.', { tags: ['water', 'off grid'] }),
  demo('rural-zoning-first', 'off-grid', 'guide', 'Check Rural Zoning Before You Buy the Dream', 'A pre-purchase research list covering access, setbacks, septic, wells, structures, animals, road maintenance, and utility rules.', { tags: ['land', 'zoning'] }),
  demo('solar-reality-check', 'off-grid', 'analysis', 'Solar Math Without the Sales Pitch', 'Start with loads, battery capacity, winter production, inverter limits, and replacement cost before choosing panels.', { tags: ['solar', 'energy'] }),

  demo('tools-worth-owning', 'self-reliance', 'guide', 'The Tools Worth Owning Before You Need Them', 'A practical hierarchy built around repair frequency, safety, parts availability, portability, and the jobs you can realistically do yourself.', { featured: true, mostRead: true, tags: ['tools', 'repair'] }),
  demo('72-hour-repair-kit', 'self-reliance', 'guide', 'Build a 72-Hour Repair Kit, Not a Fantasy Bunker', 'Fasteners, tape, wire, hose repair, electrical basics, hand tools, lighting, water control, and a small inventory that solves ordinary failures.', { tags: ['preparedness', 'repair'] }),
  demo('food-resilience-small-space', 'self-reliance', 'field-note', 'Food Resilience in a Small Space', 'A realistic starting point for storage, rotation, herbs, sprouts, container growing, and reducing waste before scaling up.', { tags: ['food', 'resilience'] }),
  demo('cash-flow-resilience', 'self-reliance', 'analysis', 'Financial Resilience Is Also Self-Reliance', 'Emergency liquidity, recurring-cost audits, spare capacity, and why a lower monthly burn can matter more than a larger gear pile.', { tags: ['finance', 'resilience'] }),

  demo('bureaucratic-error-life-altering', 'legal-exile', 'report', 'When a Bureaucratic Error Becomes a Life-Altering Problem', 'How to build a chronology when one database entry, hold, suspension, warrant flag, or administrative record begins cascading across systems.', { featured: true, mostRead: true, documentsIncluded: true, tags: ['due process', 'records'] }),
  demo('property-seizure-paper-trail', 'legal-exile', 'investigation', 'Follow the Paper Trail After Property Is Taken', 'Tow sheets, inventories, notices, storage charges, court filings, disposition records, and the documents that establish what happened next.', { documentsIncluded: true, tags: ['seizure', 'property'] }),
  demo('reentry-by-form', 'legal-exile', 'analysis', 'Exile by Form, Flag, and Database', 'A reporting framework for examining how administrative restrictions can follow a person long after a courtroom event ends.', { tags: ['reentry', 'bureaucracy'] }),
  demo('prove-a-negative', 'legal-exile', 'field-note', 'The Impossible Demand to Prove a Negative', 'How people document repeated attempts to correct an official record when the system keeps treating the record itself as proof.', { tags: ['records', 'administrative harm'] }),

  demo('flock-questions-before-rollout', 'surveillance', 'analysis', 'Flock Cameras: Questions Worth Asking Before a Rollout', 'Before accepting claims about license-plate readers, request the contract, retention rules, access logs, sharing policies, and governing approvals.', { featured: true, mostRead: true, documentsIncluded: true, tags: ['ALPR', 'surveillance'] }),
  demo('who-can-search-location-record', 'surveillance', 'report', 'Who Can Search the Location Record?', 'A source checklist for access controls, agency sharing, audit logs, search justifications, retention, and outside vendor roles.', { tags: ['location data', 'privacy'] }),
  demo('facial-recognition-procurement', 'surveillance', 'investigation', 'Follow Facial Recognition Through Procurement', 'Contracts, pilot programs, grants, renewals, policy documents, accuracy claims, and the questions that should be answered before deployment.', { documentsIncluded: true, tags: ['facial recognition', 'procurement'] }),

  demo('warrant-docket-reading', 'the-docket', 'guide', 'The Docket: How to Read a Warrant Fight', 'Start with the affidavit, scope, return, suppression motion, hearing record, and ruling before reducing a case to a headline.', { tags: ['warrants', 'courts'] }),
  demo('asset-seizure-docket', 'the-docket', 'report', 'The Docket: Property Taken, Process Pending', 'A compact court-watch format for tracking seizure dates, notice, hearings, continuances, claims, and disposition.', { documentsIncluded: true, tags: ['asset seizure', 'courts'] }),
  demo('due-process-clock', 'the-docket', 'analysis', 'The Docket: When the Process Becomes the Punishment', 'Track detention, continuances, missed deadlines, hearing intervals, and practical consequences alongside the formal case status.', { mostRead: true, tags: ['due process', 'courts'] }),

  demo('field-note-meeting-packet', 'field-notes', 'field-note', 'Field Notes: Download the Meeting Packet Before It Changes', 'Save agendas, attachments, staff reports, contracts, and revisions with timestamps before the meeting begins.', { tags: ['meetings', 'verification'] }),
  demo('field-note-call-log', 'field-notes', 'field-note', 'Field Notes: Keep the Call Log', 'Record dates, numbers, names, transfers, voicemail, promises, and follow-up documents when reporting across agencies.', { tags: ['reporting', 'chronology'] }),
  demo('field-note-photo-context', 'field-notes', 'field-note', 'Field Notes: Photograph Context, Not Just the Flashpoint', 'Wide shots, signage, entrances, posted rules, clocks, nearby cameras, and sequence can matter as much as the dramatic frame.', { tags: ['field reporting', 'documentation'] }),

  demo('record-contract-redlines', 'from-the-records', 'document', 'From the Records: Read the Contract, Then the Amendments', 'A document desk for comparing the original agreement with renewals, exhibits, pricing changes, scope expansions, and termination language.', { documentsIncluded: true, tags: ['contracts', 'primary records'] }),
  demo('record-court-filing-stack', 'from-the-records', 'document', 'From the Records: Build the Filing Stack', 'Complaint, answer, motions, exhibits, orders, docket text, and hearing records organized so readers can inspect the sequence themselves.', { documentsIncluded: true, tags: ['court records', 'primary records'] }),
  demo('record-audit-findings', 'from-the-records', 'document', 'From the Records: What the Audit Actually Found', 'Separate findings, management responses, corrective actions, repeat findings, and unresolved issues from the rhetoric surrounding an audit.', { documentsIncluded: true, tags: ['audits', 'primary records'] }),

  demo('toolbox-no-power-cooking', 'the-toolbox', 'guide', 'The Toolbox: Cooking When the Power Is Out', 'Safe fuel choices, ventilation, simple meal planning, water usage, cleanup, and equipment that earns its space.', { tags: ['cooking', 'outage'] }),
  demo('toolbox-field-repair', 'the-toolbox', 'guide', 'The Toolbox: A Repair Kit That Fits Behind the Seat', 'Compact hand tools and consumables selected for roadside, shelter, hardware, wiring, hose, and temporary weatherproofing problems.', { tags: ['repair', 'tools'] }),

  demo('under-radar-board-minutes', 'under-the-radar', 'report', 'Under the Radar: The Story Hidden in Board Minutes', 'Routine minutes can reveal contract extensions, resignations, settlements, equipment purchases, policy shifts, and votes nobody covered.', { tags: ['local news', 'records'] }),
  demo('under-radar-small-contracts', 'under-the-radar', 'report', 'Under the Radar: Small Contracts, Big Pattern', 'A method for finding repeated low-dollar purchases that become significant when viewed across vendors, departments, and time.', { tags: ['procurement', 'local government'] }),

  demo('paper-trail-vendor-map', 'the-paper-trail', 'investigation', 'The Paper Trail: Map the Vendor Before the Contract', 'Ownership, registered agents, campaign disclosures, prior contracts, lawsuits, lobbying, and subcontractors can change how a procurement story reads.', { documentsIncluded: true, tags: ['vendors', 'procurement'] }),
  demo('paper-trail-grant-to-purchase', 'the-paper-trail', 'investigation', 'The Paper Trail: From Grant Award to Local Purchase', 'Trace award documents, matching funds, procurement, contract terms, implementation milestones, renewals, and measurable outcomes.', { documentsIncluded: true, tags: ['grants', 'procurement'] }),

  demo('know-rights-recording-public', 'know-your-rights', 'guide', 'Know Your Rights: Start With the Actual Rule', 'A general-information framework for finding controlling statutes, policies, posted rules, and case law before making assumptions about recording or access.', { tags: ['civil rights', 'general information'] }),
  demo('know-rights-seized-property', 'know-your-rights', 'guide', 'Know Your Rights: What Records Exist After a Seizure?', 'General information on identifying inventories, receipts, notices, dockets, forfeiture filings, towing records, and agency policies.', { tags: ['property', 'general information'] }),

  demo('guide-public-records-request', 'outlaw-guides', 'guide', 'Outlaw Guide: File a Better Public-Records Request', 'Narrow the scope, identify likely custodians, ask for electronic production, preserve dates, and build an appeal-ready request file.', { featured: true, tags: ['public records', 'guide'] }),
  demo('guide-find-local-court-records', 'outlaw-guides', 'guide', 'Outlaw Guide: Find Local Court Records', 'A research workflow for identifying the correct court, docket system, clerk, case number, document type, and access procedure.', { tags: ['court records', 'guide'] }),
  demo('guide-municipal-budget', 'outlaw-guides', 'guide', 'Outlaw Guide: Read a Municipal Budget Without Getting Lost', 'Start with revenue, major funds, staffing, capital spending, debt, transfers, amendments, and year-over-year changes.', { tags: ['budgets', 'guide'] }),
  demo('guide-government-contract', 'outlaw-guides', 'guide', 'Outlaw Guide: Inspect a Government Contract', 'Scope, term, pricing, amendments, data ownership, indemnity, termination, renewals, audit rights, and public-record obligations.', { tags: ['contracts', 'guide'] }),
  demo('guide-public-meeting', 'outlaw-guides', 'guide', 'Outlaw Guide: Document a Public Meeting', 'Prepare the agenda, meeting rules, recording setup, timestamps, speaker list, packet archive, and a clean post-meeting verification file.', { tags: ['public meetings', 'guide'] }),
  demo('guide-multiday-outage', 'outlaw-guides', 'guide', 'Outlaw Guide: Prepare for a Multi-Day Outage', 'A practical planning sequence for water, medical needs, refrigeration, lighting, charging, communications, sanitation, food, and fuel.', { tags: ['preparedness', 'guide'] }),
];

export const byCategory = (category: ArticleCategory) =>
  articles.filter((article) => article.category === category);

export const latestDispatches = articles.slice(0, 6);
export const mostRead = articles.filter((article) => article.mostRead).slice(0, 5);

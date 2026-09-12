import { articles, byCategory, latestDispatches, mostRead } from './data/articles';
import type { Article, ArticleCategory } from './types/article';

const categoryNames: Record<ArticleCategory, string> = {
  'rights-power': 'Rights & Power',
  'off-grid': 'Off Grid',
  'self-reliance': 'Self-Reliance',
  'legal-exile': 'Legal Exile',
  surveillance: 'Surveillance Watch',
  'the-docket': 'The Docket',
  'field-notes': 'Field Notes',
  'from-the-records': 'From the Records',
  'the-toolbox': 'The Toolbox',
  'under-the-radar': 'Under the Radar',
  'the-paper-trail': 'The Paper Trail',
  'know-your-rights': 'Know Your Rights',
  'outlaw-guides': 'Outlaw Guides',
};

const fieldGuides = [
  {
    title: 'Rights & Power',
    href: '#rights-power',
    text: 'Follow the policies, court decisions, and institutions that determine whose rights are recognized in practice.',
    note: 'Records requests, court watches, and accountability reporting.',
  },
  {
    title: 'Off Grid',
    href: '#off-grid',
    text: 'Practical reporting from people building resilient lives around land, water, power, food, and community.',
    note: 'Solar, water catchment, rural zoning, and repair skills.',
  },
  {
    title: 'Self-Reliance',
    href: '#self-reliance',
    text: 'Skills, tools, preparedness, repair, food production, financial resilience, and knowledge that reduces dependence on fragile systems.',
    note: 'Repair, preparedness, food, finance, and practical skills.',
  },
  {
    title: 'Legal Exile',
    href: '#legal-exile',
    text: 'Examine what happens when an ordinary person is excluded, mislabeled, overregulated, or pushed to the margins of public life.',
    note: 'Due process, reentry, asset seizure, and bureaucratic harm.',
  },
];

const formatDate = (date: string) =>
  new Intl.DateTimeFormat('en-US', { month: 'short', day: 'numeric', year: 'numeric' }).format(new Date(date));

const today = new Intl.DateTimeFormat('en-US', {
  weekday: 'long',
  month: 'long',
  day: 'numeric',
  year: 'numeric',
}).format(new Date());

function DemoBadge({ article }: { article: Article }) {
  if (article.status !== 'demo') return null;
  return <span className="demo-badge">Editorial demo</span>;
}

function StoryMeta({ article }: { article: Article }) {
  return (
    <div className="story-meta">
      <span>{article.author.name}</span>
      <span>{formatDate(article.publishedAt)}</span>
      <span>{article.readingTimeMinutes} min read</span>
    </div>
  );
}

function StoryKicker({ article }: { article: Article }) {
  return (
    <div className="story-kicker-row">
      <span className="story-kicker">{categoryNames[article.category]}</span>
      {article.type === 'investigation' && <span className="content-flag">Outlaw investigation</span>}
      {article.documentsIncluded && <span className="content-flag">Documents included</span>}
      {article.type === 'analysis' && <span className="content-flag">Analysis</span>}
      <DemoBadge article={article} />
    </div>
  );
}

function StoryLink({ article, className = '' }: { article: Article; className?: string }) {
  return (
    <article className={`story-link ${className}`}>
      <StoryKicker article={article} />
      <h3><a href={`/article/${article.slug}`}>{article.title}</a></h3>
      <p>{article.deck}</p>
      <StoryMeta article={article} />
    </article>
  );
}

function FeatureStory({ article, image = false }: { article: Article; image?: boolean }) {
  return (
    <article className="feature-story">
      {image && <img src="/hero-eagle.svg" alt="Eagle over an open landscape" className="feature-image" />}
      <StoryKicker article={article} />
      <h2><a href={`/article/${article.slug}`}>{article.title}</a></h2>
      <p>{article.deck}</p>
      <StoryMeta article={article} />
    </article>
  );
}

function SectionHeading({ eyebrow, title, description }: { eyebrow?: string; title: string; description?: string }) {
  return (
    <div className="section-heading">
      <div>
        {eyebrow && <span className="section-eyebrow">{eyebrow}</span>}
        <h2>{title}</h2>
      </div>
      {description && <p>{description}</p>}
    </div>
  );
}

function CategorySection({ id, category, description }: { id: string; category: ArticleCategory; description: string }) {
  const items = byCategory(category).slice(0, 4);
  if (!items.length) return null;
  return (
    <section className="page-section" id={id}>
      <SectionHeading title={categoryNames[category]} description={description} />
      <div className="feature-plus-grid">
        <FeatureStory article={items[0]} />
        <div className="secondary-grid">
          {items.slice(1).map((article) => <StoryLink article={article} key={article.id} className="secondary-story" />)}
        </div>
      </div>
    </section>
  );
}

function Header() {
  return (
    <>
      <div className="utility-bar">
        <div className="shell utility-inner">
          <strong>Independent · Self-Reliant · Unafraid</strong>
          <span>{today}</span>
          <a href="#newsletter">Stay Informed</a>
        </div>
      </div>
      <header className="site-header">
        <div className="shell masthead-row">
          <a href="/" className="masthead" aria-label="Outlaw.News home">
            <span className="mark">O</span>
            <span><strong>Outlaw.News</strong><small>Independent Field Reporting</small></span>
          </a>
          <span className="masthead-motto">Stories from outside the approved script.</span>
        </div>
        <nav className="main-nav" aria-label="Primary navigation">
          <div className="shell nav-inner">
            <a href="/">Home</a>
            <a href="/#rights-power">Rights & Power</a>
            <a href="/#off-grid">Off Grid</a>
            <a href="/#self-reliance">Self-Reliance</a>
            <a href="/#legal-exile">Legal Exile</a>
            <a href="/#surveillance">Surveillance</a>
            <a href="/#outlaw-guides">Guides</a>
          </div>
        </nav>
      </header>
    </>
  );
}

function Footer() {
  return (
    <footer className="site-footer">
      <div className="shell footer-grid">
        <div>
          <div className="footer-brand"><span className="mark">O</span><strong>Outlaw.News</strong></div>
          <p>Independent reporting on self-reliance, civil liberties, public records, surveillance, and life beyond broken systems.</p>
        </div>
        <div>
          <h3>Categories</h3>
          <a href="/#rights-power">Rights & Power</a>
          <a href="/#off-grid">Off Grid</a>
          <a href="/#self-reliance">Self-Reliance</a>
          <a href="/#legal-exile">Legal Exile</a>
        </div>
        <div>
          <h3>Desks</h3>
          <a href="/#surveillance">Surveillance Watch</a>
          <a href="/#the-docket">The Docket</a>
          <a href="/#from-the-records">From the Records</a>
          <a href="/#outlaw-guides">Outlaw Guides</a>
        </div>
      </div>
      <div className="shell footer-bottom">© 2026 Outlaw.News. Editorial demo content is clearly labeled until reported and published.</div>
    </footer>
  );
}

function HomePage() {
  const rights = byCategory('rights-power');
  const surveillance = byCategory('surveillance');
  const docket = byCategory('the-docket');
  const records = byCategory('from-the-records');
  const notes = byCategory('field-notes');
  const trail = byCategory('the-paper-trail');
  const radar = byCategory('under-the-radar');
  const toolbox = byCategory('the-toolbox');
  const knowRights = byCategory('know-your-rights');
  const guides = byCategory('outlaw-guides');

  return (
    <>
      <Header />
      <main>
        <section className="hero shell">
          <img src="/hero-eagle.svg" alt="Eagle in flight over an open landscape with a subtle flag motif" />
          <div className="hero-overlay">
            <span>Independent Field Reporting</span>
            <h1>When freedom is outlawed, the outlaws will be free.</h1>
            <p>Reporting on self-reliance, off-grid life, civil liberties, surveillance, public records, and the people pushed outside systems that no longer serve them.</p>
          </div>
        </section>

        <section className="page-section shell field-guide" id="field-guide">
          <SectionHeading eyebrow="The Field Guide" title="Stories from outside the approved script." description="Outlaw.News follows choices people make when institutions fail them—without romanticizing harm or treating claims as facts." />
          <div className="guide-grid">
            {fieldGuides.map((guide) => (
              <a className="guide-card" href={guide.href} key={guide.title}>
                <span>{guide.title}</span>
                <h3>{guide.title}</h3>
                <p>{guide.text}</p>
                <small>{guide.note}</small>
              </a>
            ))}
          </div>
          <div className="reporting-standard"><strong>Reporting standard:</strong> separate evidence from allegation, link to primary records where possible, identify what remains unverified, and make room for the human impact a system can leave behind.</div>
        </section>

        <section className="page-section shell" id="latest">
          <SectionHeading eyebrow="Latest Dispatches" title="What we're working on" description="Seeded concepts below are intentionally labeled as editorial demos until sourced, reported, reviewed, and published." />
          <div className="latest-layout">
            <FeatureStory article={latestDispatches[0]} image />
            <div className="dispatch-list">
              {latestDispatches.slice(1).map((article) => <StoryLink article={article} key={article.id} />)}
            </div>
          </div>
        </section>

        <section className="page-section shell" id="rights-power">
          <div className="rights-layout">
            <div>
              <SectionHeading title="Rights & Power" description="Records, policy, court decisions, public meetings, and the institutions that translate written rights into everyday practice." />
              <FeatureStory article={rights[0]} />
              <div className="three-up">{rights.slice(1, 4).map((a) => <StoryLink article={a} key={a.id} />)}</div>
            </div>
            <aside className="most-read">
              <span className="section-eyebrow">Most Read</span>
              {mostRead.map((article, index) => (
                <a href={`/article/${article.slug}`} className="ranked-story" key={article.id}>
                  <strong>{String(index + 1).padStart(2, '0')}</strong>
                  <span>{article.title}</span>
                </a>
              ))}
            </aside>
          </div>
        </section>

        <section className="surveillance-band" id="surveillance">
          <div className="shell surveillance-inner">
            <div>
              <span className="section-eyebrow light">Surveillance Watch</span>
              <h2>{surveillance[0].title}</h2>
              <p>{surveillance[0].deck}</p>
              <ul>
                <li>Request contracts, retention schedules, access policies, audit-log rules, and agency-sharing terms.</li>
                <li>Compare public statements with the governing documents before drawing conclusions.</li>
                <li>Preserve meeting packets, procurement records, amendments, renewals, and implementation reports.</li>
              </ul>
              <a className="light-link" href={`/article/${surveillance[0].slug}`}>Open the editorial brief →</a>
            </div>
            <div className="surveillance-side">
              {surveillance.slice(1).map((a) => <StoryLink article={a} key={a.id} />)}
            </div>
          </div>
        </section>

        <div className="shell">
          <CategorySection id="off-grid" category="off-grid" description="Land, water, power, food, zoning, repair, and the practical realities behind resilient living." />
          <CategorySection id="self-reliance" category="self-reliance" description="Tools, repair, preparedness, food, financial resilience, and skills that increase personal capacity." />
        </div>

        <section className="page-section shell" id="the-docket">
          <SectionHeading eyebrow="Court Watch" title="The Docket" description="Warrants, seizures, detention, due process, filings, hearings, and decisions—tracked as a sequence rather than reduced to a headline." />
          <div className="docket-list">{docket.map((a) => <StoryLink article={a} key={a.id} />)}</div>
        </section>

        <div className="shell">
          <CategorySection id="legal-exile" category="legal-exile" description="Due process, reentry, seizures, administrative records, and the consequences of being pushed outside ordinary civic life." />
        </div>

        <section className="page-section records-section" id="from-the-records">
          <div className="shell">
            <SectionHeading eyebrow="Primary Material" title="From the Records" description="Documents readers can inspect: contracts, filings, audits, ordinances, meeting packets, correspondence, and other source material." />
            <div className="records-grid">
              {records.map((article) => (
                <a href={`/article/${article.slug}`} className="record-card" key={article.id}>
                  <span className="document-icon">DOC</span>
                  <div><DemoBadge article={article} /><h3>{article.title}</h3><p>{article.deck}</p></div>
                </a>
              ))}
            </div>
          </div>
        </section>

        <section className="page-section shell" id="field-notes">
          <SectionHeading title="Field Notes" description="Short practical reporting habits: what to save, what to photograph, what to timestamp, and how to leave a verification trail." />
          <div className="three-up">{notes.map((a) => <StoryLink article={a} key={a.id} />)}</div>
        </section>

        <section className="page-section shell twin-desks">
          <div id="the-paper-trail">
            <SectionHeading title="The Paper Trail" description="Follow money, procurement, grants, vendors, contracts, and renewals." />
            {trail.map((a) => <StoryLink article={a} key={a.id} />)}
          </div>
          <div id="under-the-radar">
            <SectionHeading title="Under the Radar" description="Local records and decisions that received little institutional press attention." />
            {radar.map((a) => <StoryLink article={a} key={a.id} />)}
          </div>
        </section>

        <section className="page-section shell" id="the-toolbox">
          <SectionHeading title="The Toolbox" description="Practical equipment and repair knowledge, judged by usefulness rather than gear culture." />
          <div className="two-up">{toolbox.map((a) => <StoryLink article={a} key={a.id} />)}</div>
        </section>

        <section className="rights-info" id="know-your-rights">
          <div className="shell rights-info-grid">
            <div>
              <span className="section-eyebrow light">Know Your Rights</span>
              <h2>Start with the rule that actually governs.</h2>
              <p>These explainers are general information, not legal advice. They should identify controlling law and policy, jurisdictional limits, unresolved questions, and primary sources so readers can verify the material themselves.</p>
            </div>
            <div>{knowRights.map((a) => <StoryLink article={a} key={a.id} />)}</div>
          </div>
        </section>

        <section className="page-section shell" id="outlaw-guides">
          <SectionHeading eyebrow="Evergreen Reference" title="Outlaw Guides" description="Useful procedures people can return to long after a breaking story has disappeared from the feed." />
          <div className="guides-grid">{guides.map((a) => <StoryLink article={a} key={a.id} />)}</div>
        </section>

        <section className="newsletter" id="newsletter">
          <div className="shell newsletter-inner">
            <div><span className="section-eyebrow light">Stay Informed</span><h2>Get the dispatch.</h2><p>New investigations, practical guides, records, and field reporting—without the noise.</p></div>
            <form onSubmit={(event) => event.preventDefault()} className="newsletter-form">
              <label htmlFor="email">Email address</label>
              <div><input id="email" type="email" placeholder="you@example.com" /><button type="submit">Subscribe</button></div>
              <small>Signup UI is present; connect the production email provider before launch.</small>
            </form>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

function ArticlePage({ article }: { article: Article }) {
  const related = articles.filter((candidate) => candidate.category === article.category && candidate.id !== article.id).slice(0, 3);
  return (
    <>
      <Header />
      <main className="article-page shell">
        <a className="back-link" href="/">← Back to Outlaw.News</a>
        <StoryKicker article={article} />
        <h1>{article.title}</h1>
        <p className="article-deck">{article.deck}</p>
        <StoryMeta article={article} />
        {article.status === 'demo' && (
          <div className="demo-notice"><strong>This is an editorial demo concept, not published reporting.</strong> It exists to demonstrate the content system and homepage structure. Before publication it should be sourced, fact-checked, reviewed, and updated with primary records where appropriate.</div>
        )}
        <div className="article-body">
          <p>{article.deck}</p>
          <p>This page is wired to the structured article model. The production version can carry a full reported narrative, key points, source links, document embeds, corrections, updates, related stories, and author information without changing the homepage code.</p>
          {article.keyPoints?.length ? <ul>{article.keyPoints.map((point) => <li key={point}>{point}</li>)}</ul> : null}
          {article.sources?.length ? (
            <div className="source-box"><h2>Sources</h2>{article.sources.map((source) => <a key={source.url} href={source.url}>{source.label}</a>)}</div>
          ) : null}
        </div>
        {related.length > 0 && <section className="related"><SectionHeading title={`More from ${categoryNames[article.category]}`} /><div className="three-up">{related.map((a) => <StoryLink article={a} key={a.id} />)}</div></section>}
      </main>
      <Footer />
    </>
  );
}

export default function App() {
  const match = window.location.pathname.match(/^\/article\/([^/]+)\/?$/);
  if (match) {
    const article = articles.find((item) => item.slug === match[1]);
    if (article) return <ArticlePage article={article} />;
  }
  return <HomePage />;
}

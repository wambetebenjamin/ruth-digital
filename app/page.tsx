import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  BarChart3,
  Camera,
  Check,
  Mail,
  Megaphone,
  Quote,
  Search,
  Share2,
  Sparkles,
  Target,
  Users,
  UtensilsCrossed,
  ShoppingBag,
  Home as HomeIcon,
  HeartPulse,
  GraduationCap,
  Shirt,
  HeartHandshake,
  Linkedin,
  TrendingUp,
} from "lucide-react";
import HeroReveal from "@/components/HeroReveal";
import CountUpStat from "@/components/CountUpStat";
import CtaBand from "@/components/CtaBand";
import { CaseStudyCard, PostCard } from "@/components/Cards";
import { Reveal, Stagger, StaggerItem } from "@/components/Motion";
import {
  clientIndustries,
  process,
  resultsStats,
  services,
  team,
  testimonials,
  caseStudies,
} from "@/lib/content";
import { latestPosts } from "@/lib/queries";

const serviceStrip = [
  { label: "Social Media Management", icon: Share2 },
  { label: "Content Creation", icon: Camera },
  { label: "Paid Ads (Meta and Google)", icon: Target },
  { label: "Email Marketing", icon: Mail },
  { label: "SEO", icon: Search },
  { label: "Influencer Outreach", icon: Users },
  { label: "Brand Strategy", icon: Megaphone },
  { label: "Monthly Reporting", icon: BarChart3 },
];

const industryIcons = [
  UtensilsCrossed,
  ShoppingBag,
  HomeIcon,
  HeartPulse,
  GraduationCap,
  Shirt,
  HeartHandshake,
];

export default function HomePage() {
  const previewStudies = caseStudies.slice(0, 3);
  const posts = latestPosts(3);

  return (
    <>
      {/* Hero */}
      <section className="rd-hero">
        <div className="rd-container">
          <HeroReveal className="rd-hero__grid" targetSelector="[data-hero-item]">
            <div className="rd-hero__copy">
              <span className="rd-hero__kicker" data-hero-item>
                <TrendingUp size={14} aria-hidden="true" />
                A Nairobi digital marketing agency
              </span>
              <h1 className="rd-hero__title" data-hero-item>
                Your brand online. <em>Done properly.</em>
              </h1>
              <p className="rd-hero__text" data-hero-item>
                We manage social media, create the content and run the ads that grow
                Kenyan brands. Real audiences, real revenue, and a report you can read
                in five minutes.
              </p>
              <div className="rd-hero__actions" data-hero-item>
                <Link href="#strategy-call" className="rd-btn rd-btn--light">
                  Get a Free Strategy Call
                  <ArrowRight size={18} aria-hidden="true" />
                </Link>
                <Link href="/work" className="rd-btn rd-btn--ghost">
                  See Our Work
                </Link>
              </div>
            </div>

            <div className="rd-hero__media" data-hero-item>
              <div className="rd-hero__frame">
                <Image
                  src="/images/hero-studio.jpg"
                  alt="A Nairobi marketing team reviewing social media content together on a laptop"
                  fill
                  sizes="(max-width: 991px) 100vw, 46vw"
                  priority
                  style={{ objectFit: "cover" }}
                />
              </div>
              <div className="rd-hero__badge">
                <div>
                  <strong>{`4.3x`}</strong>
                  <span>{`Average return on ad spend across client campaigns`}</span>
                </div>
              </div>
            </div>
          </HeroReveal>
        </div>
      </section>

      {/* Services strip */}
      <section className="rd-strip" aria-label="Services we offer">
        <div className="rd-container">
          <ul className="rd-strip__list">
            {serviceStrip.map(({ label, icon: Icon }) => (
              <li key={label} className="rd-strip__item">
                <span className="rd-strip__icon" aria-hidden="true">
                  <Icon size={18} />
                </span>
                {label}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* How the agency works */}
      <section className="rd-section" aria-labelledby="process-title">
        <div className="rd-container">
          <div className="rd-titlepage">
            <span className="rd-eyebrow">How we work</span>
            <h2 className="rd-h2" id="process-title">
              Four steps from first call to monthly report
            </h2>
            <p>
              No long discovery decks and no six month runway before anything goes live.
              Here is exactly how a new client starts with us.
            </p>
          </div>

          <Stagger className="rd-steps">
            {process.map((step, index) => (
              <StaggerItem key={step.title}>
                <div className="rd-step">
                  <span className="rd-step__num">{String(index + 1).padStart(2, "0")}</span>
                  <h3>{step.title}</h3>
                  <p>{step.detail}</p>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      {/* Results */}
      <section className="rd-section rd-section--silver" aria-labelledby="results-title">
        <div className="rd-container">
          <div className="rd-titlepage">
            <span className="rd-eyebrow">Results</span>
            <h2 className="rd-h2" id="results-title">
              The numbers we hold ourselves to
            </h2>
            <p>
              {`These are averages across our managed accounts for 2025, not the best single month we have ever had.`}
            </p>
          </div>

          <div className="rd-stats">
            {resultsStats.map((stat, index) => (
              <Reveal key={stat.label} delay={index * 0.1}>
                <div className="rd-stat">
                  <div className="rd-stat__value">
                    <CountUpStat
                      value={stat.value}
                      prefix={stat.prefix}
                      suffix={stat.suffix}
                    />
                  </div>
                  <div className="rd-stat__label">{stat.label}</div>
                  <p className="rd-stat__note">{stat.note}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* What we do, two column intro */}
      <section className="rd-section" aria-labelledby="about-title">
        <div className="rd-container">
          <div className="rd-split">
            <div>
              <span className="rd-eyebrow">Who you are working with</span>
              <h2 className="rd-h2" id="about-title" style={{ paddingBottom: 18 }}>
                A small Nairobi team that treats your page like our own
              </h2>
              <p className="rd-lead" style={{ paddingBottom: 18 }}>
                Ruth Digital was started because too many good Kenyan businesses were
                paying for posts instead of results. We keep the team small, the
                reporting honest and the strategy tied to what you actually sell.
              </p>
              <ul className="rd-check-list" style={{ marginBottom: 26 }}>
                <li>
                  <Check size={17} aria-hidden="true" />
                  One account lead who knows your business, not a rotating queue.
                </li>
                <li>
                  <Check size={17} aria-hidden="true" />
                  Content shot in your space, by a crew that knows the market.
                </li>
                <li>
                  <Check size={17} aria-hidden="true" />
                  Ads managed with your margin in mind, never for vanity metrics.
                </li>
              </ul>
              <Link href="/services" className="rd-btn rd-btn--brand">
                Explore our services
                <ArrowRight size={17} aria-hidden="true" />
              </Link>
            </div>
            <div className="rd-split__media">
              <Image
                src="/images/team-group.jpg"
                alt="Three members of the Ruth Digital team smiling while working on a laptop"
                fill
                sizes="(max-width: 900px) 100vw, 46vw"
                style={{ objectFit: "cover" }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Client industries */}
      <section className="rd-section rd-section--tight rd-section--silver" aria-labelledby="industries-title">
        <div className="rd-container">
          <div className="rd-titlepage" style={{ paddingBottom: 36 }}>
            <span className="rd-eyebrow">Client industries</span>
            <h2 className="rd-h2" id="industries-title">
              Sectors we know well
            </h2>
          </div>
          <div className="rd-industries">
            {clientIndustries.map((industry, index) => {
              const Icon = industryIcons[index] ?? Sparkles;
              return (
                <span className="rd-industry" key={industry}>
                  <Icon size={18} aria-hidden="true" />
                  {industry}
                </span>
              );
            })}
          </div>
        </div>
      </section>

      {/* Case studies preview */}
      <section className="rd-section" aria-labelledby="work-title">
        <div className="rd-container">
          <div className="rd-titlepage">
            <span className="rd-eyebrow">Case studies</span>
            <h2 className="rd-h2" id="work-title">
              Work that moved a number that matters
            </h2>
            <p>
              Three recent projects across hospitality, retail and property. Client
              names stay private, the results do not.
            </p>
          </div>

          <Stagger className="rd-grid-3">
            {previewStudies.map((study) => (
              <StaggerItem key={study.slug}>
                <CaseStudyCard study={study} />
              </StaggerItem>
            ))}
          </Stagger>

          <div className="rd-center rd-mt-40">
            <Link href="/work" className="rd-btn rd-btn--outline">
              View all case studies
              <ArrowRight size={17} aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="rd-section rd-section--silver" aria-labelledby="team-title">
        <div className="rd-container">
          <div className="rd-titlepage">
            <span className="rd-eyebrow">The team</span>
            <h2 className="rd-h2" id="team-title">
              The people doing the work
            </h2>
            <p>
              A compact team of strategists, creators and media buyers based in Nairobi.
            </p>
          </div>

          <Stagger className="rd-grid-4">
            {team.map((member) => (
              <StaggerItem key={member.name}>
                <article className="rd-member">
                  <div className="rd-member__photo">
                    <Image
                      src={member.image}
                      alt={member.alt}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 991px) 50vw, 25vw"
                      style={{ objectFit: "cover", objectPosition: "center top" }}
                    />
                  </div>
                  <div className="rd-member__body">
                    <div>
                      <div className="rd-member__name">{member.name}</div>
                      <div className="rd-member__role">{member.role}</div>
                    </div>
                    <a
                      href={member.linkedin}
                      className="rd-member__link"
                      aria-label={`${member.name} on LinkedIn`}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Linkedin size={17} aria-hidden="true" />
                    </a>
                  </div>
                </article>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      {/* Testimonials */}
      <section className="rd-section" aria-labelledby="testimonials-title">
        <div className="rd-container">
          <div className="rd-titlepage">
            <span className="rd-eyebrow">Testimonials</span>
            <h2 className="rd-h2" id="testimonials-title">
              What clients say
            </h2>
          </div>

          <div className="rd-testimonials">
            {testimonials.map((item, index) => (
              <Reveal key={item.quote} delay={index * 0.1}>
                <figure className="rd-quote">
                  <Quote size={28} className="rd-quote__mark" aria-hidden="true" />
                  <blockquote style={{ margin: 0 }}>
                    <p>{`"${item.quote}"`}</p>
                  </blockquote>
                  <figcaption className="rd-quote__author">
                    <span className="rd-quote__avatar" aria-hidden="true">
                      {item.name.charAt(0)}
                    </span>
                    <span>
                      <span className="rd-quote__name">{item.name}</span>
                      <span className="rd-quote__role">{item.role}</span>
                    </span>
                  </figcaption>
                </figure>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Blog preview */}
      <section className="rd-section rd-section--tight rd-section--silver" aria-labelledby="blog-title">
        <div className="rd-container">
          <div className="rd-titlepage" style={{ paddingBottom: 40 }}>
            <span className="rd-eyebrow">From the blog</span>
            <h2 className="rd-h2" id="blog-title">
              Marketing notes for Kenyan brands
            </h2>
          </div>
          <Stagger className="rd-grid-3">
            {posts.map((post) => (
              <StaggerItem key={post.slug}>
                <PostCard post={post} />
              </StaggerItem>
            ))}
          </Stagger>
          <div className="rd-center rd-mt-40">
            <Link href="/blog" className="rd-btn rd-btn--outline">
              Read the blog
              <ArrowRight size={17} aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>

      {/* Services teaser list */}
      <section className="rd-section rd-section--tight" aria-labelledby="services-title">
        <div className="rd-container">
          <div className="rd-titlepage" style={{ paddingBottom: 36 }}>
            <span className="rd-eyebrow">Services</span>
            <h2 className="rd-h2" id="services-title">
              Six ways we can help
            </h2>
          </div>
          <Stagger className="rd-grid-3">
            {services.map((service) => (
              <StaggerItem key={service.slug}>
                <article className="rd-card" style={{ padding: 26 }}>
                  <div className="rd-icon-box" aria-hidden="true">
                    <BarChart3 size={22} />
                  </div>
                  <h3 className="rd-h3" style={{ paddingTop: 16 }}>
                    {service.title}
                  </h3>
                  <p style={{ fontSize: 14.5, lineHeight: 1.7, paddingBottom: 6 }}>
                    {service.summary}
                  </p>
                  <div style={{ marginTop: "auto", paddingTop: 12 }}>
                    <span className="rd-meta" style={{ display: "block", paddingBottom: 10 }}>
                      From {service.priceFrom}
                    </span>
                    <Link href={`/services#${service.slug}`} className="rd-link-arrow">
                      {`See what is included`}
                      <ArrowRight size={16} aria-hidden="true" />
                    </Link>
                  </div>
                </article>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      <CtaBand />
    </>
  );
}

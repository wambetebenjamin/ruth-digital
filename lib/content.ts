export type Service = {
  slug: string;
  title: string;
  summary: string;
  intro: string;
  includes: string[];
  audience: string[];
  process: { title: string; detail: string }[];
  priceFrom: string;
  priceNote: string;
  icon: string;
};

export const services: Service[] = [
  {
    slug: "social-media-management",
    title: "Social Media Management",
    summary:
      "We run your Instagram, Facebook, TikTok and LinkedIn accounts end to end so you can focus on running the business.",
    intro:
      "This is the core of what we do. We plan the month, write the captions, shoot and edit the visuals, publish on schedule and answer your community in a voice that sounds like you. You get one team that owns the calendar from start to finish.",
    includes: [
      "Monthly content calendar built around your offers and season",
      "Caption writing in English and Swahili where it fits your audience",
      "Publishing and scheduling across your chosen platforms",
      "Community management, comments and direct messages within 24 hours",
      "Profile optimisation, highlights, bios and pinned posts",
      "Competitor and hashtag research refreshed every quarter",
      "Monthly performance report with plain language recommendations",
    ],
    audience: [
      "Restaurants and food businesses building a loyal local following",
      "Retail and fashion brands that need consistent posting",
      "Clinics, gyms and wellness brands that must stay credible online",
    ],
    process: [
      {
        title: "Week one, audit and voice",
        detail:
          "We review your current accounts, study your best performing posts and agree the tone your brand will use.",
      },
      {
        title: "Week two, the content plan",
        detail:
          "You receive the month plan for approval, with captions, visuals and posting dates.",
      },
      {
        title: "Weeks three and four, execution",
        detail:
          "We publish, monitor and respond, then report back on what worked and what we change next month.",
      },
    ],
    priceFrom: "KES 45,000",
    priceNote: "per month, two platforms, twelve posts and daily community management",
    icon: "share",
  },
  {
    slug: "content-creation",
    title: "Content Creation",
    summary:
      "Photo, video, reels and stills shot in your space by a Nairobi production crew that understands the market.",
    intro:
      "Good content is the difference between a page people scroll past and a page people save. Our crew comes to your location, shoots in natural light, edits for each platform and hands you a library you can reuse across ads and organic posts.",
    includes: [
      "One production day per month at your location",
      "Short form vertical video for reels, TikTok and shorts",
      "Product and lifestyle photography edited in your brand colours",
      "Graphic templates for offers, menus and announcements",
      "Subtitle and voiceover versions for silent viewing",
      "Full res exports organised by campaign",
      "Usage rights for organic and paid social",
    ],
    audience: [
      "Hotels, restaurants and cafes with spaces worth showing",
      "Fashion and beauty brands launching new collections",
      "Service businesses that need to show real faces and real work",
    ],
    process: [
      {
        title: "Pre production",
        detail:
          "We agree shot list, models, location and styling, then confirm the shooting day.",
      },
      {
        title: "Shoot day",
        detail:
          "A producer and a videographer work through the shot list in one visit, usually half a day.",
      },
      {
        title: "Edit and delivery",
        detail:
          "You receive edited files within five working days, with two rounds of changes included.",
      },
    ],
    priceFrom: "KES 35,000",
    priceNote: "per production day, editing and platform versions included",
    icon: "camera",
  },
  {
    slug: "paid-ads",
    title: "Paid Ads (Meta and Google)",
    summary:
      "Meta and Google campaigns managed for reach, leads and sales, with the budget watched like it is our own.",
    intro:
      "We build campaigns that are measured in shillings returned, not impressions collected. Every ad set is built on a clear offer, a tested audience and a landing destination that is ready to convert.",
    includes: [
      "Meta Ads setup across Facebook and Instagram",
      "Google Search, Performance Max and YouTube where relevant",
      "Audience research, lookalikes and retargeting pools",
      "Ad copywriting and creative testing matrix",
      "Conversion tracking with Meta Pixel and Google Tag",
      "Weekly budget pacing and bid adjustments",
      "Monthly report on cost per lead, cost per sale and return on ad spend",
    ],
    audience: [
      "Businesses already posting but not reaching enough new buyers",
      "Retailers running seasonal offers and launches",
      "Education and real estate brands that need qualified enquiries",
    ],
    process: [
      {
        title: "Account audit",
        detail:
          "We check pixel health, past spend and creative history, then set the target cost per result.",
      },
      {
        title: "Build and launch",
        detail:
          "Campaign structure, creative and audiences go live inside ten working days.",
      },
      {
        title: "Optimise weekly",
        detail:
          "We pause what is not paying, scale what is, and report on the numbers that matter.",
      },
    ],
    priceFrom: "KES 40,000",
    priceNote: "per month management fee, ad spend billed separately to your account",
    icon: "target",
  },
  {
    slug: "email-marketing",
    title: "Email Marketing",
    summary:
      "Newsletters and automated flows that turn your existing customers into repeat buyers.",
    intro:
      "Email is still the cheapest way to speak to people who already know you. We set up the list properly, design the templates, write the sequences and keep your database warm with a monthly send.",
    includes: [
      "List setup and cleaning in your email platform",
      "Branded templates for campaigns and announcements",
      "Welcome, abandoned cart and re engagement automations",
      "Monthly newsletter writing and scheduling",
      "Segmentation by purchase history and interest",
      "Deliverability checks and spam score testing",
      "Reporting on open rate, click rate and revenue per send",
    ],
    audience: [
      "Ecommerce and retail brands with repeat purchase potential",
      "Education and events businesses with long consideration windows",
      "Hospitality brands building a loyalty list",
    ],
    process: [
      {
        title: "List and platform",
        detail:
          "We agree the platform, migrate your contacts and set permission records straight.",
      },
      {
        title: "Build the flows",
        detail:
          "Automations are written, designed and tested before a single send goes out.",
      },
      {
        title: "Send and learn",
        detail:
          "One newsletter per month, with subject line tests and a report on revenue per send.",
      },
    ],
    priceFrom: "KES 30,000",
    priceNote: "per month, flows and one campaign send included",
    icon: "mail",
  },
  {
    slug: "seo",
    title: "SEO",
    summary:
      "Search visibility for the things your customers actually type, from the first audit to published pages.",
    intro:
      "Kenyan buyers search before they buy. We find the terms that bring ready customers to your site, fix what stops Google ranking you, and publish pages that answer the questions your sales team hears every day.",
    includes: [
      "Technical audit covering speed, indexing and schema",
      "Keyword research for Kenya and regional search intent",
      "On page optimisation of titles, headings and meta descriptions",
      "Google Business Profile setup and local map optimisation",
      "Four long form articles per month where content is included",
      "Internal linking and content cluster planning",
      "Monthly rank tracking and traffic reporting",
    ],
    audience: [
      "Businesses with a website that gets little organic traffic",
      "Clinics, schools and law firms competing on local search",
      "Ecommerce stores that want cheaper acquisition than ads",
    ],
    process: [
      {
        title: "Audit",
        detail: "We crawl the site and list every fix in priority order with an effort estimate.",
      },
      {
        title: "Fix and publish",
        detail:
          "Technical work goes out first, then content clusters start publishing in month two.",
      },
      {
        title: "Track",
        detail:
          "Rankings, impressions and enquiries are reviewed monthly against the starting baseline.",
      },
    ],
    priceFrom: "KES 55,000",
    priceNote: "per month, technical work and content included",
    icon: "search",
  },
  {
    slug: "influencer-outreach",
    title: "Influencer Outreach",
    summary:
      "Creator partnerships in Nairobi and across East Africa, sourced, negotiated and measured properly.",
    intro:
      "We match your brand with creators whose audience actually buys what you sell, then handle the brief, the contract and the measurement. No vanity follower counts, no gifted posts without a plan.",
    includes: [
      "Creator shortlisting with audience quality checks",
      "Outreach, negotiation and rate benchmarking",
      "Creative briefs written around your selling points",
      "Contract and usage rights handling",
      "Paid boosting of the best creator content",
      "Tracking links and unique codes per creator",
      "Post campaign report on reach, clicks and sales",
    ],
    audience: [
      "Consumer brands entering new counties or cities",
      "Fashion, beauty and lifestyle launches",
      "Hospitality brands filling specific nights or seasons",
    ],
    process: [
      {
        title: "Brief",
        detail: "We agree the campaign goal, budget band and the audience you want to reach.",
      },
      {
        title: "Match",
        detail:
          "You get a shortlist of five creators with rates, audience data and past brand work.",
      },
      {
        title: "Run and measure",
        detail:
          "We manage delivery dates, then report on performance per creator and per shilling spent.",
      },
    ],
    priceFrom: "KES 38,000",
    priceNote: "per campaign, creator fees quoted separately",
    icon: "users",
  },
];

export type CaseStudy = {
  slug: string;
  industry: string;
  platform: string[];
  client: string;
  location: string;
  challenge: string;
  resultHeadline: string;
  summary: string;
  image: string;
  imageAlt: string;
  duration: string;
  approach: string[];
  execution: string[];
  metrics: { value: string; label: string; note: string }[];
  quote: { text: string; author: string; role: string };
  services: string[];
};

export const caseStudies: CaseStudy[] = [
  {
    slug: "restaurant-lunch-crowd",
    industry: "Restaurant and Food",
    platform: ["Instagram", "TikTok"],
    client: "A Westlands lunch restaurant",
    location: "Westlands, Nairobi",
    challenge:
      "The restaurant filled up on Fridays but stayed quiet from Monday to Thursday. The team posted irregularly, with phone photos that did not match the quality of the food.",
    resultHeadline: "44 percent more weekday lunch covers in five months",
    summary:
      "A reels first content plan, staff led storytelling and a small daily ad budget turned four quiet weekdays into the busiest part of the week.",
    image: "/images/work-restaurant.jpg",
    imageAlt:
      "A waitress smiling as she serves a hot drink to a customer at a bright restaurant counter",
    duration: "5 months",
    approach: [
      "Rebuilt the content calendar around weekday offers instead of weekend posts",
      "Shot the kitchen in natural light and made the chefs the face of the brand",
      "Tested three reel formats per week and doubled down on what held attention",
      "Ran a lunch hour ad campaign with a radius around the restaurant",
    ],
    execution: [
      "Twelve posts a month across Instagram and TikTok, six of them video",
      "A weekly menu reel published every Monday at 10am",
      "Community replies within an hour during lunch service",
      "A table booking link added to both profiles",
    ],
    metrics: [
      { value: "44%", label: "More weekday covers", note: "Compared with the five months before we started" },
      { value: "3.1x", label: "Return on ad spend", note: "Lunch campaign tracked to table reservations" },
      { value: "+6,800", label: "New followers", note: "Organic growth on Instagram and TikTok combined" },
    ],
    quote: {
      text:
        "They understood our kitchen before they understood our Instagram. The Monday menu reel alone now brings people in on the slowest day of the week.",
      author: "Restaurant owner",
      role: "Westlands, Nairobi",
    },
    services: ["Social Media Management", "Content Creation", "Paid Ads"],
  },
  {
    slug: "retail-store-launch",
    industry: "Retail",
    platform: ["Instagram", "Facebook"],
    client: "A Nairobi fashion and home store",
    location: "Kilimani, Nairobi",
    challenge:
      "A new store opening competed with established neighbours. The team had no mailing list, no ads experience and only three weeks before launch day.",
    resultHeadline: "312 people at the opening weekend and a 4,200 person waiting list",
    summary:
      "We built anticipation with a countdown campaign, collected contacts before the doors opened and filled the store on day one.",
    image: "/images/work-retail.jpg",
    imageAlt: "A shop owner holding an open sign at the entrance of a boutique",
    duration: "3 months",
    approach: [
      "A three week countdown with one clear message per week",
      "A simple sign up page that offered early access in exchange for a phone number",
      "Creator partnerships with three Nairobi lifestyle pages",
      "Opening weekend ads with a first purchase discount",
    ],
    execution: [
      "Daily stories in the final week, each with a countdown sticker",
      "Two photoshoot days before opening to build a launch bank of images",
      "SMS reminder to the waiting list on the morning of the opening",
      "Post opening content focused on real customers, not products on shelves",
    ],
    metrics: [
      { value: "312", label: "Opening weekend visitors", note: "Counted at the door across two days" },
      { value: "4,200", label: "Waitlist sign ups", note: "Collected in three weeks before launch" },
      { value: "18%", label: "Repeat purchase rate", note: "Customers who returned within 60 days" },
    ],
    quote: {
      text:
        "We opened with a queue. Three weeks of planning did what a year of posting had never done for us.",
      author: "Store founder",
      role: "Kilimani, Nairobi",
    },
    services: ["Social Media Management", "Paid Ads", "Influencer Outreach"],
  },
  {
    slug: "real-estate-qualified-leads",
    industry: "Real Estate",
    platform: ["Facebook", "Google"],
    client: "A Nairobi property developer",
    location: "Kiambu Road, Nairobi",
    challenge:
      "The sales team spent days calling unqualified enquiries from boosted posts. Cost per viewing kept rising and the agents lost confidence in digital.",
    resultHeadline: "Cost per qualified viewing dropped from KES 9,400 to KES 3,200",
    summary:
      "Better qualification questions, a proper landing page and a retargeting sequence cut the noise and put agents in front of serious buyers.",
    image: "/images/work-real-estate.jpg",
    imageAlt: "A property agent standing in front of a house holding keys beside a sold sign",
    duration: "6 months",
    approach: [
      "Rebuilt the landing page around unit availability and payment plans",
      "Added qualification questions to the enquiry form",
      "Split campaigns by budget band and neighbourhood",
      "A retargeting sequence for people who viewed the plans but did not enquire",
    ],
    execution: [
      "Google Search campaigns for people searching the specific estate name",
      "Meta lead campaigns with instant forms and follow up automation",
      "Weekly call quality feedback from the sales team fed back into the targeting",
      "Monthly report shared with both marketing and sales leads",
    ],
    metrics: [
      { value: "KES 3,200", label: "Cost per qualified viewing", note: "Down from KES 9,400 before the rebuild" },
      { value: "68%", label: "Leads that answered", note: "Improved contactability after form changes" },
      { value: "21", label: "Units sold", note: "Attributed to digital campaigns over six months" },
    ],
    quote: {
      text:
        "The difference was not more leads. It was leads our agents actually wanted to call.",
      author: "Head of Sales",
      role: "Kiambu Road, Nairobi",
    },
    services: ["Paid Ads", "SEO", "Content Creation"],
  },
  {
    slug: "clinic-patient-growth",
    industry: "Health and Wellness",
    platform: ["Instagram", "Google"],
    client: "A Nairobi wellness clinic",
    location: "Lavington, Nairobi",
    challenge:
      "The clinic had strong word of mouth but almost no search presence. New patients came from referrals only, and the website was invisible for the treatments it offered.",
    resultHeadline: "1,240 new patient enquiries from search in one year",
    summary:
      "Local SEO, treatment pages and calm, credible content built a steady stream of enquiries without discounting the clinic's services.",
    image: "/images/work-health.jpg",
    imageAlt: "A woman training with dumbbells in a bright gym",
    duration: "12 months",
    approach: [
      "Optimised the Google Business Profile and collected genuine reviews",
      "Built one page per treatment with clear pricing guidance",
      "Published two educational articles a month written by clinic staff",
      "Ran branded search ads to protect the clinic name",
    ],
    execution: [
      "Technical fixes across the site including speed and mobile layout",
      "Monthly photoshoots of the team to humanise the brand",
      "A weekly Q and A reel answering one patient question",
      "Enquiry tracking from search landing page to booking",
    ],
    metrics: [
      { value: "1,240", label: "Search enquiries", note: "In twelve months, tracked to form submissions" },
      { value: "2.9x", label: "Organic traffic growth", note: "Year on year comparison" },
      { value: "4.8", label: "Average review rating", note: "From 37 verified Google reviews" },
    ],
    quote: {
      text:
        "Patients now come in already knowing what we do. That changes the consultation completely.",
      author: "Clinic director",
      role: "Lavington, Nairobi",
    },
    services: ["SEO", "Content Creation", "Social Media Management"],
  },
  {
    slug: "school-enrolment-season",
    industry: "Education",
    platform: ["Facebook", "Instagram"],
    client: "A Nairobi private school",
    location: "Runda, Nairobi",
    challenge:
      "Enrolment enquiries peaked too late in the year. Parents were making decisions while the school was still posting last year's photographs.",
    resultHeadline: "96 enrolment enquiries in the six week admission window",
    summary:
      "An earlier campaign, parent testimonials and a virtual tour helped the school reach families before competitor schools did.",
    image: "/images/work-education.jpg",
    imageAlt: "Young pupils in uniform concentrating at their desks in a classroom",
    duration: "4 months",
    approach: [
      "Moved the campaign start from May to February",
      "Recorded parent and alumni testimonials in their own words",
      "Shot a simple virtual tour on a phone gimbal",
      "Ran admission ads targeted to parents in nearby estates",
    ],
    execution: [
      "One testimonial video published every two weeks",
      "Facebook lead form with a callback request option",
      "A welcome sequence by email for every enquiry",
      "Weekly reports to the admissions team during the window",
    ],
    metrics: [
      { value: "96", label: "Enrolment enquiries", note: "Within the six week admission window" },
      { value: "41", label: "Open day bookings", note: "Booked through the campaign landing page" },
      { value: "KES 610", label: "Cost per enquiry", note: "Average across the campaign" },
    ],
    quote: {
      text:
        "The testimonial videos did more than any brochure we have ever printed.",
      author: "Admissions lead",
      role: "Runda, Nairobi",
    },
    services: ["Paid Ads", "Content Creation", "Email Marketing"],
  },
  {
    slug: "ngo-donor-engagement",
    industry: "NGO",
    platform: ["LinkedIn", "Facebook"],
    client: "An East African community organisation",
    location: "Nairobi, Kenya",
    challenge:
      "The organisation told its story well in reports but barely online. Donors and partners had no way to see the work between annual publications.",
    resultHeadline: "3.4 times more partner enquiries in eight months",
    summary:
      "Field led storytelling, a monthly donor newsletter and a clean LinkedIn presence built trust with institutional partners.",
    image: "/images/work-ngo.jpg",
    imageAlt: "Volunteers sorting donated clothes and laughing during a community drive",
    duration: "8 months",
    approach: [
      "Trained the field team to capture photo and voice notes",
      "Built a monthly newsletter for donors and partners",
      "Reframed LinkedIn around programme outcomes, not events",
      "Created a one page impact summary that partners could share",
    ],
    execution: [
      "Six field stories published each month across two channels",
      "One long form impact article each quarter",
      "Consent and safeguarding checklist for all published images",
      "Quarterly analytics review with the programme team",
    ],
    metrics: [
      { value: "3.4x", label: "Partner enquiries", note: "Compared with the eight months before" },
      { value: "1,900", label: "Newsletter subscribers", note: "Built from a standing start" },
      { value: "47%", label: "Average open rate", note: "Across the monthly donor newsletter" },
    ],
    quote: {
      text:
        "Our partners finally see the work as it happens, not a year later in a report.",
      author: "Programme manager",
      role: "Nairobi, Kenya",
    },
    services: ["Social Media Management", "Email Marketing", "Content Creation"],
  },
];

export const industries = [
  "Restaurant and Food",
  "Retail",
  "Real Estate",
  "Health and Wellness",
  "Education",
  "Fashion",
  "NGO",
] as const;

export type Stat = { value: number; suffix: string; prefix?: string; label: string; note: string };

export const resultsStats: Stat[] = [
  {
    value: 11.4,
    suffix: "%",
    label: "Average follower growth per month",
    note: "Average across 34 managed accounts in 2025",
  },
  {
    value: 6.2,
    suffix: "%",
    label: "Average engagement rate",
    note: "Measured on organic posts against follower count",
  },
  {
    value: 4.3,
    suffix: "x",
    label: "Average ad return on spend",
    note: "Across Meta and Google campaigns in 2025",
  },
];

export const team = [
  {
    name: "Ruth Wanjiru",
    role: "Founder and Strategy Lead",
    image: "/images/team-ruth.jpg",
    alt: "Portrait of Ruth Wanjiru, founder of Ruth Digital, in a dark blazer",
    linkedin: "https://www.linkedin.com/in/ruthdigital",
  },
  {
    name: "Amina Otieno",
    role: "Head of Social Media",
    image: "/images/team-amina.jpg",
    alt: "Portrait of Amina Otieno, head of social media at Ruth Digital",
    linkedin: "https://www.linkedin.com/in/ruthdigital",
  },
  {
    name: "Brian Kimani",
    role: "Performance Marketing Manager",
    image: "/images/team-brian.jpg",
    alt: "Portrait of Brian Kimani, performance marketing manager at Ruth Digital",
    linkedin: "https://www.linkedin.com/in/ruthdigital",
  },
  {
    name: "Kevin Mwangi",
    role: "Content and Production Lead",
    image: "/images/team-kevin.jpg",
    alt: "Portrait of Kevin Mwangi, content and production lead at Ruth Digital",
    linkedin: "https://www.linkedin.com/in/ruthdigital",
  },
];

export const testimonials = [
  {
    quote:
      "We had been posting for two years with nothing to show for it. Ruth Digital came in, changed the plan, and within a quarter our tables were full on a Tuesday.",
    name: "Restaurant owner",
    role: "Westlands, Nairobi",
  },
  {
    quote:
      "The monthly report is the part I value most. It is plain, honest and it tells me where the money went and what came back.",
    name: "Retail founder",
    role: "Kilimani, Nairobi",
  },
  {
    quote:
      "They behave like part of our sales team. When a campaign is not working they say so first, before we even ask.",
    name: "Property developer",
    role: "Kiambu Road, Nairobi",
  },
];

export const process = [
  {
    title: "Onboarding call",
    detail:
      "A 45 minute call to understand your business, your customers and what has and has not worked before.",
  },
  {
    title: "Strategy and content plan",
    detail:
      "We build the channel plan, the offer calendar and the first month of content for your approval.",
  },
  {
    title: "Execution and publishing",
    detail:
      "Shoots happen, posts go out, community gets answered and ads are managed and adjusted weekly.",
  },
  {
    title: "Monthly performance report",
    detail:
      "Every month you get a clear report on reach, engagement, leads and spend, with what we change next.",
  },
];

export const clientIndustries = industries;

export type Plan = {
  key: "starter" | "growth" | "premium";
  name: string;
  price: string;
  priceNote: string;
  tagline: string;
  platforms: string;
  posts: string;
  ads: string;
  reporting: string;
  features: string[];
  popular?: boolean;
};

export const plans: Plan[] = [
  {
    key: "starter",
    name: "Starter",
    price: "KES 45,000",
    priceNote: "per month",
    tagline: "For small businesses that need a consistent, professional presence.",
    platforms: "2 platforms",
    posts: "12 posts per month",
    ads: "Not included, available as an add on",
    reporting: "Monthly report, one page",
    features: [
      "Content calendar approved before publishing",
      "Caption writing and hashtag research",
      "Community management on working days",
      "Profile optimisation and highlights",
      "Monthly performance report",
      "WhatsApp support during working hours",
    ],
  },
  {
    key: "growth",
    name: "Growth",
    price: "KES 95,000",
    priceNote: "per month",
    tagline: "For growing brands ready to put budget behind their content.",
    platforms: "3 platforms",
    posts: "20 posts per month, 8 of them video",
    ads: "Up to KES 150,000 monthly ad spend managed",
    reporting: "Bi weekly dashboard and monthly report",
    features: [
      "Everything in Starter",
      "One production day per month",
      "Reels and short form video editing",
      "Meta and Google ads management",
      "Community management seven days a week",
      "Monthly strategy call with the founder",
    ],
    popular: true,
  },
  {
    key: "premium",
    name: "Premium",
    price: "KES 185,000",
    priceNote: "per month",
    tagline: "For established brands that need a full in house style team.",
    platforms: "4 platforms",
    posts: "30 posts per month, 14 of them video",
    ads: "Up to KES 500,000 monthly ad spend managed",
    reporting: "Weekly dashboard and monthly board report",
    features: [
      "Everything in Growth",
      "Two production days per month",
      "Influencer outreach and creator management",
      "Email marketing and automation",
      "SEO and content programme",
      "Quarterly planning workshop in Nairobi",
      "Dedicated account lead with same day response",
    ],
  },
];

export const blogCategories = [
  "Social Media",
  "SEO",
  "Ads",
  "Strategy",
  "Kenya Market",
] as const;

export type BlogPost = {
  slug: string;
  title: string;
  date: string;
  displayDate: string;
  category: (typeof blogCategories)[number];
  excerpt: string;
  author: string;
  readingTime: string;
  image: string;
  imageAlt: string;
  body: { type: "p" | "h2" | "h3" | "ul"; content: string | string[] }[];
};

export const blogPosts: BlogPost[] = [
  {
    slug: "instagram-reels-nairobi-businesses",
    title: "What actually works on Reels for Nairobi businesses",
    date: "2026-09-30",
    displayDate: "30 September 2026",
    category: "Social Media",
    excerpt:
      "We reviewed 1,850 reels published by Kenyan brands over six months. The pattern is not what most agencies sell you.",
    author: "Amina Otieno",
    readingTime: "6 minute read",
    image: "/images/services-content.jpg",
    imageAlt: "A phone mounted on a ring light filming content for social media",
    body: [
      {
        type: "p",
        content:
          "There is a lot of advice about Reels online, and most of it was written for audiences in London or Los Angeles. We wanted to know what actually works when your customers are in Nairobi, Mombasa or Nakuru, so we pulled 1,850 reels from 60 Kenyan brand accounts and looked at the numbers.",
      },
      { type: "h2", content: "Sound is doing more work than you think" },
      {
        type: "p",
        content:
          "Reels that used a clearly Kenyan audio track, either a local song or a trending sound with local context, held attention measurably longer. The effect was strongest for food and retail accounts. Imported trending audio still works, but it competed with hundreds of other posts using the same sound in the same week.",
      },
      { type: "h2", content: "Show the work, not the finish" },
      {
        type: "p",
        content:
          "The top performing format across every industry was what we call the process reel. Kitchens plating food, a tailor cutting fabric, a mechanic running a diagnostic. These posts carried no text overlay, no voiceover and often no logo. They simply showed something real happening, and they built trust faster than any polished campaign asset.",
      },
      {
        type: "ul",
        content: [
          "The first two seconds decide whether anyone watches the rest. Start on movement, not on a logo.",
          "Captions in English and Swahili broadened reach for almost every account we studied.",
          "Vertical video shot on a phone can beat a produced clip if the lighting is natural and the story is clear.",
          "Posting consistency mattered more than posting volume. Three strong reels a week beat fourteen weak ones.",
        ],
      },
      { type: "h2", content: "What we stopped doing" },
      {
        type: "p",
        content:
          "We stopped opening reels with branded intro cards. We stopped stacking six hashtags in the first caption line. We stopped posting the same clip to Instagram and TikTok without adjusting the caption, because the reading behaviour on each platform is different.",
      },
      {
        type: "p",
        content:
          "None of this is complicated. It is simply easier to sell a polished edit than a one minute clip of someone doing their job well. The data keeps pointing the other way.",
      },
    ],
  },
  {
    slug: "google-business-profile-kenya",
    title: "Your Google Business Profile is your cheapest marketing asset",
    date: "2026-09-12",
    displayDate: "12 September 2026",
    category: "SEO",
    excerpt:
      "Most Kenyan service businesses are losing ready to buy customers to a profile they have not touched in two years.",
    author: "Ruth Wanjiru",
    readingTime: "5 minute read",
    image: "/images/work-health.jpg",
    imageAlt: "A woman training with dumbbells in a gym, representing local service businesses",
    body: [
      {
        type: "p",
        content:
          "When someone searches for a dentist in Kilimani or a plumber in South B, the map pack appears before any website. Three businesses get seen. Everyone else gets a scroll. If your profile is thin, unverified or full of old photographs, you are handing those customers to a competitor.",
      },
      { type: "h2", content: "Start with the basics you probably skipped" },
      {
        type: "ul",
        content: [
          "Claim and verify the listing. An unverified profile is a rumour, not a business.",
          "Set the correct primary category. It determines which searches you can appear in.",
          "Add real opening hours, including public holidays, and keep them current.",
          "Upload at least twenty recent photographs taken inside your business.",
          "Write a description that names the services customers search for, in plain language.",
        ],
      },
      { type: "h2", content: "Reviews are a ranking signal and a sales tool" },
      {
        type: "p",
        content:
          "Ask every satisfied customer for a review at the moment they are happiest, which is usually at payment, not a week later. Reply to all reviews, including the difficult ones. A calm, specific reply to a complaint converts more readers than five generic five star reviews.",
      },
      { type: "h2", content: "Posts and questions are free real estate" },
      {
        type: "p",
        content:
          "Google Business Profiles allow regular posts and a questions and answers section that anyone can contribute to. Most businesses ignore both. A weekly post about an offer or a new service costs nothing and keeps the profile active in Google's eyes.",
      },
      {
        type: "p",
        content:
          "We have seen clinics and salons add more enquiries in a month from profile work than from a year of inconsistent posting. It is not glamorous, but it is the closest thing to free customers that exists online.",
      },
    ],
  },
  {
    slug: "meta-ads-budget-kenya",
    title: "How to set a Meta ads budget when every shilling counts",
    date: "2026-08-24",
    displayDate: "24 August 2026",
    category: "Ads",
    excerpt:
      "A practical way to decide what to spend, when to stop and how to tell a bad campaign from a bad offer.",
    author: "Brian Kimani",
    readingTime: "7 minute read",
    image: "/images/work-retail.jpg",
    imageAlt: "A shop owner holding an open sign at a boutique entrance",
    body: [
      {
        type: "p",
        content:
          "The most common mistake we see is a business spending too little for too short a time, concluding that ads do not work, and quitting. Meta ads need enough budget and enough days to exit the learning phase. Below a certain spend, you are buying noise.",
      },
      { type: "h2", content: "Work backwards from a cost per result" },
      {
        type: "p",
        content:
          "Decide what a lead or a sale is worth to you before you spend anything. If a customer is worth KES 8,000 in gross profit over a year and you can afford KES 1,500 to acquire one, that number sets your maximum cost per result. Everything else is arithmetic.",
      },
      {
        type: "ul",
        content: [
          "Budget at least 20 times your target cost per result per week so the system can test.",
          "Run for a minimum of seven days before judging anything.",
          "Change one variable at a time, or you will never know what caused the shift.",
          "Keep a control campaign untouched while you test new creative.",
        ],
      },
      { type: "h2", content: "A bad campaign or a bad offer" },
      {
        type: "p",
        content:
          "Before blaming the platform, check the offer. A discount nobody asked for, a landing page that takes nine seconds to load, a form with eleven fields, any of these will make an otherwise healthy campaign look broken. We audit the destination before we touch the targeting.",
      },
      { type: "h2", content: "When to stop" },
      {
        type: "p",
        content:
          "Stop when the cost per result has held above your ceiling for two consecutive weeks with a stable offer and a tested landing page. That is not a bad week, it is a signal. Pause, rebuild the offer, and return with a different angle rather than more budget.",
      },
    ],
  },
  {
    slug: "content-calendar-kenyan-business",
    title: "A content calendar that survives a busy Kenyan business",
    date: "2026-08-05",
    displayDate: "5 August 2026",
    category: "Strategy",
    excerpt:
      "Plans fail when they assume a quiet week. Here is a calendar built for the weeks you are firefighting.",
    author: "Ruth Wanjiru",
    readingTime: "5 minute read",
    image: "/images/hero-studio.jpg",
    imageAlt: "A marketing team reviewing content together around a laptop",
    body: [
      {
        type: "p",
        content:
          "Every business starts the month with a beautiful calendar and abandons it by the tenth, usually because a supplier failed, a delivery was late or a staff member left. A calendar that assumes calm weeks is not a calendar, it is a wish.",
      },
      { type: "h2", content: "Build two layers, not one" },
      {
        type: "p",
        content:
          "Layer one is evergreen: the posts you could publish any week of the year, such as team introductions, how it is made, customer questions answered and behind the scenes. Layer two is campaign content tied to dates and offers. Evergreen fills the gaps when campaigns slip.",
      },
      { type: "h2", content: "Batch the work, not the ideas" },
      {
        type: "ul",
        content: [
          "One production day a month creates enough raw material for four weeks.",
          "Write captions in batches of ten while you are in the right frame of mind.",
          "Schedule a week ahead, never a month ahead, so you can react to what is working.",
          "Keep a folder of approved evergreen posts ready to publish in any emergency.",
        ],
      },
      { type: "h2", content: "Give someone the final say" },
      {
        type: "p",
        content:
          "Content stalls when approval sits with four people. Name one person who can approve or reject within a day. If a post is not approved in time, the evergreen slot runs instead. The page stays alive and nobody is chasing approvals at eleven at night.",
      },
    ],
  },
  {
    slug: "why-tiktok-matters-kenya",
    title: "TikTok is not a young person's app anymore",
    date: "2026-07-18",
    displayDate: "18 July 2026",
    category: "Kenya Market",
    excerpt:
      "The audience on TikTok in Kenya has matured faster than most brands have noticed. Here is what that means for your channel plan.",
    author: "Amina Otieno",
    readingTime: "6 minute read",
    image: "/images/work-education.jpg",
    imageAlt: "Pupils in a Kenyan classroom, representing a broadening audience on social platforms",
    body: [
      {
        type: "p",
        content:
          "Two years ago, TikTok was a channel most of our clients treated as optional. Today it drives enquiries for clinics, schools and property developers, audiences that would have looked out of place there in 2023.",
      },
      { type: "h2", content: "The audience aged with the platform" },
      {
        type: "p",
        content:
          "The first Kenyan TikTok users are now in their late twenties and thirties. They have disposable income, they are searching for services, and they are used to discovering businesses through video rather than through search.",
      },
      { type: "h2", content: "Search behaviour is changing" },
      {
        type: "p",
        content:
          "Younger buyers increasingly search inside TikTok before they search on Google. A two minute video answering a real question, such as how much a service costs or what to expect on a first visit, often outperforms a written page.",
      },
      {
        type: "ul",
        content: [
          "Answer the price question openly. It is the most searched question and the most avoided.",
          "Use captions and on screen text so videos work with sound off.",
          "Keep a consistent posting rhythm, even if it is only three videos a week.",
          "Link to a single clear destination, not a link tree full of options.",
        ],
      },
      {
        type: "p",
        content:
          "None of this means abandoning Instagram or Facebook. It means treating TikTok as a channel with a real, adult audience rather than as an experiment.",
      },
    ],
  },
  {
    slug: "monthly-reports-clients-read",
    title: "How to write a monthly report your client actually reads",
    date: "2026-06-29",
    displayDate: "29 June 2026",
    category: "Strategy",
    excerpt:
      "Screenshots of reach graphs are not reporting. A good report answers three questions and takes ten minutes to read.",
    author: "Ruth Wanjiru",
    readingTime: "4 minute read",
    image: "/images/team-group.jpg",
    imageAlt: "Three colleagues smiling while reviewing work together on a laptop",
    body: [
      {
        type: "p",
        content:
          "We have inherited accounts where the previous agency sent a forty page PDF every month. Nobody had opened it in a year. Data without a decision attached is decoration.",
      },
      { type: "h2", content: "Three questions, in this order" },
      {
        type: "ul",
        content: [
          "What did we spend, and what came back? Revenue, leads or bookings, whichever is the real measure for this business.",
          "What changed this month, and why? One or two honest explanations, not twelve.",
          "What are we doing differently next month? Specific actions with a date.",
        ],
      },
      { type: "h2", content: "Lead with the number that pays salaries" },
      {
        type: "p",
        content:
          "Reach and impressions belong in an appendix. Put cost per lead, cost per sale and return on ad spend on the first page, side by side with last month. If a client only reads one page, that page should be enough to make a decision.",
      },
      { type: "h2", content: "Say the difficult thing first" },
      {
        type: "p",
        content:
          "If a campaign underperformed, write it in the summary before the client asks. Trust is built in the month you report a miss clearly, not in the month everything went well.",
      },
    ],
  },
];

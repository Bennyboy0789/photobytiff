// Content + gallery data for the dedicated service / location landing pages.
// Each entry renders through ServiceLanding. Galleries reuse existing portfolio images.

export interface ServiceFAQ {
  q: string;
  a: string;
}

export interface ServicePage {
  slug: string; // route segment under /services (or top-level for location pages)
  metaTitle: string;
  metaDescription: string;
  canonical: string;
  heroImage: string;
  heroAlt: string;
  eyebrow: string;
  h1: string;
  intro: string; // lead paragraph under the H1
  priceLine: string; // e.g. "Sessions from $350"
  bookingHref: string;
  // Body sections rendered in order
  sections: { heading: string; paragraphs: string[] }[];
  // "What's included" bullet list
  included: string[];
  gallery: { src: string; alt: string; aspectClass: string }[];
  // Related internal links (blog posts / other pages) for the cluster link graph.
  relatedPosts?: { href: string; label: string }[];
  // A real client testimonial displayed on the page (also emitted as Review schema).
  testimonial?: { author: string; quote: string };
  faqs: ServiceFAQ[];
  // schema.org Service fields
  serviceName: string;
  serviceType: string;
  offerPrice: string; // number as string
}

export const servicePages: Record<string, ServicePage> = {
  'newborn-photography': {
    slug: 'newborn-photography',
    metaTitle: 'Newborn Photographer in Spring Lake & Fayetteville, NC',
    metaDescription:
      'Gentle, baby-led newborn photography in Spring Lake, NC, serving Fayetteville, Fort Bragg & surrounding areas. In-home sessions from $350. Book with Tiffany Jarosz.',
    canonical: 'https://photobytiff.com/services/newborn-photography',
    heroImage: '/images/real/family-lifestyle-session-outdoor.jpg',
    heroAlt: 'Newborn photography session in Spring Lake, NC',
    eyebrow: 'Newborn Photography',
    h1: 'Newborn Photographer in Spring Lake & Fayetteville, NC',
    intro:
      "Those first days go by in a blur — and they never come back. I offer relaxed, baby-led newborn sessions in the comfort of your own home, capturing your brand-new little one exactly as they are, from tiny curled fingers to sleepy yawns.",
    priceLine: 'Newborn sessions from $350',
    bookingHref: '/contact',
    sections: [
      {
        heading: 'A gentle, baby-led approach',
        paragraphs: [
          "I don't force stiff, propped-up poses or spend hours manipulating a fussy baby. Instead, my newborn sessions follow your baby's lead entirely. If they want to stretch, we let them stretch. If they're hungry, we pause and feed. If they fall into a deep sleep, that's when we gently capture them at their most peaceful.",
          "The result is imagery that feels natural, calm, and true to those early days — not manufactured. Sessions typically last up to an hour, which is much gentler on both baby and parents than the multi-hour posed sessions you may have seen elsewhere.",
        ],
      },
      {
        heading: 'In-home sessions across the Fayetteville area',
        paragraphs: [
          "I come to you. Your newborn session happens in your own home, where you don't have to pack a diaper bag, wrangle a car seat, or worry about being anywhere on time. Your home doesn't need to look like a magazine spread — I'll find the best natural light, usually near a bedroom or living room window, and work from there.",
          "I serve Spring Lake, Fayetteville, Fort Bragg, Sanford, and the surrounding North Carolina communities, with travel included within 30 miles of Spring Lake.",
        ],
      },
      {
        heading: 'When to book',
        paragraphs: [
          "The sweet spot for newborn photos is within the first two weeks, while babies still have that womb-curled flexibility and sleep deeply. I recommend reaching out during your second trimester so we can pencil in a window around your due date — then you simply message me when baby arrives and we lock in the date.",
          "Already past those first two weeks? Don't worry. I've photographed six- and eight-week-olds with beautiful results. Reach out anyway and we'll make it work.",
        ],
      },
    ],
    included: [
      'Up to 1 hour baby-led session, in your home',
      '20 high-resolution, hand-edited images',
      'Private online gallery to download and share',
      'Guidance on prep, lighting, and what to wear',
      'Siblings and parents welcome in the frame',
    ],
    gallery: [
      { src: '/images/real/family-lifestyle-session-outdoor.jpg', alt: 'Baby-led newborn session in Spring Lake, NC', aspectClass: 'aspect-[4/5]' },
      { src: '/images/real/family-candid-session-outdoor.jpg', alt: 'Newborn with family, candid moment - Fayetteville NC', aspectClass: 'aspect-[3/4]' },
      { src: '/images/real/family-golden-hour-outdoor-session.jpg', alt: 'Golden hour newborn family session near Fort Bragg', aspectClass: 'aspect-[3/4]' },
      { src: '/images/real/family-lifestyle-session-nature.jpg', alt: 'Lifestyle newborn photography in nature - Spring Lake NC', aspectClass: 'aspect-[4/3]' },
    ],
    relatedPosts: [
      { href: '/blog/what-is-a-baby-led-newborn-session', label: 'What is a baby-led newborn session?' },
      { href: '/blog/newborn-photography-tips-spring-lake-nc', label: 'Newborn photography tips & when to book' },
    ],
    testimonial: {
      author: 'Marissa S.',
      quote: 'She was super sweet and kind! We had a blast! 10/10 would go to her for pictures again! They turned out amazing!!',
    },
    faqs: [
      { q: 'When should I book my newborn session?', a: 'Reach out during your second trimester so we can reserve a window around your due date. The ideal time to photograph is within the first two weeks after birth, though I happily photograph older babies too.' },
      { q: 'Do you come to my home?', a: 'Yes — newborn sessions are held in your home so you and baby stay comfortable. I bring wraps and blankets and find the best natural light in your space.' },
      { q: 'How much is a newborn session?', a: 'Newborn sessions are $350 and include an up-to-one-hour baby-led session with 20 high-resolution edited images delivered in an online gallery.' },
      { q: 'What areas do you serve?', a: 'I serve Spring Lake, Fayetteville, Fort Bragg, Sanford, and surrounding North Carolina areas. Travel is included within 30 miles of Spring Lake.' },
    ],
    serviceName: 'Newborn Photography',
    serviceType: 'Newborn photography session',
    offerPrice: '350',
  },

  'maternity-photography': {
    slug: 'maternity-photography',
    metaTitle: 'Maternity Photographer in Spring Lake & Fayetteville, NC',
    metaDescription:
      'Relaxed, natural maternity photography in Spring Lake, NC, serving Fayetteville & Fort Bragg. Golden-hour sessions from $300. Book your bump session with Tiffany Jarosz.',
    canonical: 'https://photobytiff.com/services/maternity-photography',
    heroImage: '/images/real/maternity-photographer-green-dress-ultrasound-spring-lake-nc.jpg',
    heroAlt: 'Maternity photography session in Spring Lake, NC',
    eyebrow: 'Maternity Photography',
    h1: 'Maternity Photographer in Spring Lake & Fayetteville, NC',
    intro:
      "You're growing a human — that deserves to be documented beautifully. My maternity sessions are relaxed and natural, celebrating this fleeting season with soft golden-hour light and genuine connection rather than stiff posing.",
    priceLine: 'Maternity sessions from $300',
    bookingHref: '/contact',
    sections: [
      {
        heading: 'When to book your maternity session',
        paragraphs: [
          "The sweet spot for maternity photos is between 28 and 34 weeks, when your bump is beautifully round but you're still comfortable on your feet. If you're expecting twins, aim a little earlier, around 24 to 28 weeks.",
          "I recommend reaching out by your second trimester to plan your session, since spring and fall dates in the Fayetteville and Spring Lake area fill up fast.",
        ],
      },
      {
        heading: 'A natural, guided experience',
        paragraphs: [
          "I won't pose you stiffly. Instead, I'll guide you into gentle, natural movement — walking together, a hand resting on your belly, forehead touches, real laughter. Sessions last 60 to 90 minutes during golden hour, and we'll move through a few spots as the light softens.",
          "Older children and partners are always welcome to join for part of the session, and you're welcome to bring one outfit change to vary the look.",
        ],
      },
      {
        heading: 'Military families — let\'s plan ahead',
        paragraphs: [
          "I photograph many military families from Fort Bragg, and I know deployment and PCS schedules don't always cooperate with the ideal window. If your partner is deploying or returning around your due date, reach out early — I've done sessions as early as 24 weeks and as late as 37 when the situation called for it, and I'll do everything I can to work with your timeline.",
        ],
      },
    ],
    included: [
      '1 hour golden-hour session on location',
      '20 high-resolution, hand-edited images',
      'One outfit change welcome',
      'Partner and older children welcome',
      'Private online gallery to download and share',
    ],
    gallery: [
      { src: '/images/real/maternity-photographer-green-dress-ultrasound-spring-lake-nc.jpg', alt: 'Maternity session with ultrasound - Spring Lake NC', aspectClass: 'aspect-[2/3]' },
      { src: '/images/real/family-lifestyle-outdoor-portrait.jpg', alt: 'Outdoor maternity lifestyle portrait - Fayetteville NC', aspectClass: 'aspect-[2/3]' },
      { src: '/images/real/family-milestone-portrait-outdoor.jpg', alt: 'Golden hour maternity portrait near Fort Bragg', aspectClass: 'aspect-[3/4]' },
      { src: '/images/real/family-outdoor-portrait-session.jpg', alt: 'Maternity couple session outdoors - Spring Lake NC', aspectClass: 'aspect-[4/5]' },
    ],
    relatedPosts: [
      { href: '/blog/maternity-photography-spring-lake-nc', label: 'Maternity photography: what to expect & when to book' },
      { href: '/blog/what-is-a-baby-led-newborn-session', label: 'Planning ahead? Baby-led newborn sessions' },
    ],
    testimonial: {
      author: 'Ashley K.',
      quote: 'She was so helpful and friendly! And my son absolutely enjoyed his time during the shoot! Will definitely book again!',
    },
    faqs: [
      { q: 'When is the best time for maternity photos?', a: 'Between 28 and 34 weeks for most pregnancies, or 24 to 28 weeks if you are expecting twins. Book by your second trimester to secure a date.' },
      { q: 'What should I wear?', a: 'Flowing dresses in soft, solid tones photograph beautifully and highlight your bump. You are welcome to bring one outfit change, and I am happy to help you plan.' },
      { q: 'How much is a maternity session?', a: 'Maternity sessions are $300 and include a one-hour golden-hour session with 20 high-resolution edited images in an online gallery.' },
      { q: 'Can my partner and kids join?', a: 'Absolutely. Partners and older children are welcome for part or all of the session at no extra charge.' },
    ],
    serviceName: 'Maternity Photography',
    serviceType: 'Maternity photography session',
    offerPrice: '300',
  },

  'family-photography': {
    slug: 'family-photography',
    metaTitle: 'Family Photographer in Spring Lake, Fayetteville & Fort Bragg, NC',
    metaDescription:
      'Natural, lifestyle family photography in Spring Lake, NC, serving Fayetteville, Fort Bragg & surrounding areas. Golden-hour sessions from $400. Book with Tiffany Jarosz.',
    canonical: 'https://photobytiff.com/services/family-photography',
    heroImage: '/images/real/family-outdoor-nature-session.jpg',
    heroAlt: 'Family photography session in Spring Lake, NC',
    eyebrow: 'Family Photography',
    h1: 'Family Photographer in Spring Lake, Fayetteville & Fort Bragg, NC',
    intro:
      "The best family photos rarely come from telling everyone to smile. They come from letting your family be your family — laughing, snuggling, chasing each other through golden evening light. That's the kind of session I create.",
    priceLine: 'Family sessions from $400',
    bookingHref: '/contact',
    sections: [
      {
        heading: 'Real moments, not stiff poses',
        paragraphs: [
          "My approach is guided, not directed. I'll suggest a walk, a tickle fight, a quiet cuddle — and then I step back and let your family be yourselves. I get down on the kids' level, learn their names, and follow their lead, so what ends up in your gallery is genuine connection rather than say-cheese stiffness.",
          "Sessions last about an hour during golden hour, the soft warm window about an hour before sunset, and include up to six people.",
        ],
      },
      {
        heading: 'Beautiful locations across the area',
        paragraphs: [
          "I have go-to spots all around Spring Lake, Fayetteville, and Fort Bragg — open fields for running kids, tree-lined trails for filtered light, lake access for golden-hour reflections, and quiet pockets away from traffic where toddlers can explore safely. I'll suggest a location based on the season and the look you want, and I'm always happy to shoot somewhere meaningful to your family.",
        ],
      },
      {
        heading: 'What to wear',
        paragraphs: [
          "Coordinate, don't match. Pick a palette of two to four complementary colors — soft blues, creams, warm earth tones, dusty sage, and navy all photograph timelessly. Let one person anchor the palette and build everyone else around them, and prioritize comfort, especially for little ones.",
        ],
      },
    ],
    included: [
      '1 hour golden-hour session on location',
      '25 high-resolution, hand-edited images',
      'Up to 6 people included',
      'Location guidance and outfit help',
      'Private online gallery to download and share',
    ],
    gallery: [
      { src: '/images/real/family-outdoor-nature-session.jpg', alt: 'Family session in nature - Spring Lake NC', aspectClass: 'aspect-[4/3]' },
      { src: '/images/real/family-lifestyle-mom-holding-son-fall-pines.jpg', alt: 'Mom holding son in fall pines - Fayetteville family photographer', aspectClass: 'aspect-[4/3]' },
      { src: '/images/real/family-outdoor-mini-session.jpg', alt: 'Outdoor family mini session near Fort Bragg', aspectClass: 'aspect-[4/5]' },
      { src: '/images/real/children-portrait-golden-hour-outdoor-session.jpg', alt: 'Golden hour family session - Spring Lake NC', aspectClass: 'aspect-[3/4]' },
    ],
    relatedPosts: [
      { href: '/fort-bragg-family-photographer', label: 'Fort Bragg military family sessions' },
      { href: '/blog/what-to-wear-to-a-photoshoot', label: 'What to wear to your family session' },
      { href: '/blog/best-photo-session-locations-spring-lake-fort-bragg', label: 'Best photo session spots in Spring Lake' },
    ],
    testimonial: {
      author: 'Amanda S.',
      quote: 'Great experience! Tiffany was very patient with my children — she was able to coax the best pictures out of my sons and made it a fun experience for us all!',
    },
    faqs: [
      { q: 'How long is a family session?', a: 'Family sessions last about an hour, held during golden hour for the softest light, and include up to six people.' },
      { q: 'How much is a family session?', a: 'Family sessions are $400 and include 25 high-resolution edited images in an online gallery, for up to six people.' },
      { q: 'Where do you photograph families?', a: 'I photograph at beautiful outdoor locations across Spring Lake, Fayetteville, Fort Bragg, and the surrounding area, and I can shoot in your home or a spot that is meaningful to you.' },
      { q: 'What if my kids won\'t cooperate?', a: 'That is completely normal and I plan for it. I keep sessions playful and child-led, and some of my favorite frames come right after a wobble, when a child collapses into a parent\'s arms.' },
    ],
    serviceName: 'Family Photography',
    serviceType: 'Family photography session',
    offerPrice: '400',
  },

  'cake-smash-photography': {
    slug: 'cake-smash-photography',
    metaTitle: 'Cake Smash Photographer in Spring Lake & Fayetteville, NC',
    metaDescription:
      'Joyful first-birthday cake smash photography in Spring Lake, NC, serving Fayetteville & Fort Bragg. Cake included, sessions from $250. Book with Tiffany Jarosz.',
    canonical: 'https://photobytiff.com/services/cake-smash-photography',
    heroImage: '/images/real/cake-smash-first-birthday-outdoor-spring-lake-nc.jpg',
    heroAlt: 'First birthday cake smash session in Spring Lake, NC',
    eyebrow: 'Cake Smash Photography',
    h1: 'Cake Smash Photographer in Spring Lake & Fayetteville, NC',
    intro:
      "One-year-olds are only one once. A cake smash session celebrates the end of that incredible first year with pure, messy, unfiltered joy — and the cake is included, so there's nothing for you to coordinate.",
    priceLine: 'Cake smash sessions from $250 — cake included',
    bookingHref: '/contact',
    sections: [
      {
        heading: 'What is a cake smash session?',
        paragraphs: [
          "Your baby gets a cake, and they do whatever comes naturally — dig in with both hands, smear it across their face, or study it suspiciously for ten full minutes. All of it is fair game, and all of it makes for the most joyful, expressive photos you'll ever own.",
          "Cake smash sessions are typically held around your baby's first birthday. We'll talk through colors and themes beforehand so everything ties together beautifully, and I provide the cake as part of your session.",
        ],
      },
      {
        heading: 'Relaxed, baby-paced, and fun',
        paragraphs: [
          "Some babies dive straight in; others need a few minutes to warm up. Either way, I let your little one set the pace and capture the real reactions as they unfold. These sessions are lighthearted and playful, and grandparents absolutely love the results.",
        ],
      },
    ],
    included: [
      'Up to 1 hour session',
      'Cake included',
      '15 high-resolution, hand-edited images',
      'Theme and color planning beforehand',
      'Private online gallery to download and share',
    ],
    gallery: [
      { src: '/images/real/cake-smash-first-birthday-outdoor-spring-lake-nc.jpg', alt: 'Outdoor first birthday cake smash - Spring Lake NC', aspectClass: 'aspect-[3/4]' },
      { src: '/images/real/cake-smash-birthday-celebration-session.jpg', alt: 'Cake smash birthday celebration - Fayetteville NC', aspectClass: 'aspect-[3/4]' },
      { src: '/images/real/cake-smash-colorful-session-spring-lake-nc.jpg', alt: 'Colorful cake smash session near Fort Bragg', aspectClass: 'aspect-square' },
      { src: '/images/real/cake-smash-birthday-portrait-session.jpg', alt: 'First birthday cake smash portrait - Spring Lake NC', aspectClass: 'aspect-[3/4]' },
    ],
    relatedPosts: [
      { href: '/blog/what-is-a-cake-smash-session', label: 'What is a cake smash session?' },
      { href: '/blog/what-is-a-milestone-session', label: 'First birthday & milestone sessions' },
    ],
    testimonial: {
      author: 'Ameria J.',
      quote: "Tiffany did my daughter's 1st Birthday pictures and they came out absolutely amazing!! You can tell she's passionate about photography through her work!",
    },
    faqs: [
      { q: 'Is the cake included?', a: 'Yes. The cake is included with every cake smash session, so there is nothing for you to coordinate. We plan colors and theme together beforehand.' },
      { q: 'How much is a cake smash session?', a: 'Cake smash sessions are $250 and include up to an hour of shooting, the cake, and 15 high-resolution edited images in an online gallery.' },
      { q: 'When should we book a cake smash?', a: 'Most families book around their baby\'s first birthday. Reach out a few weeks ahead so we can plan the theme and secure your date.' },
      { q: 'What if my baby hates the cake?', a: 'It happens, and it makes for adorable photos either way. I let your baby set the pace and capture the real reactions, whether they dive in or sit there unimpressed.' },
    ],
    serviceName: 'Cake Smash Photography',
    serviceType: 'Cake smash photography session',
    offerPrice: '250',
  },

  'milestone-photography': {
    slug: 'milestone-photography',
    metaTitle: 'Milestone & Children\'s Photographer in Spring Lake, NC',
    metaDescription:
      'Milestone and children\'s photography in Spring Lake, NC, serving Fayetteville & Fort Bragg. Sitter sessions, first birthdays & more from $200. Book with Tiffany Jarosz.',
    canonical: 'https://photobytiff.com/services/milestone-photography',
    heroImage: '/images/real/children-milestone-portrait-outdoor-lifestyle.jpg',
    heroAlt: 'Children\'s milestone session in Spring Lake, NC',
    eyebrow: 'Milestone Photography',
    h1: 'Milestone & Children\'s Photographer in Spring Lake, NC',
    intro:
      "Children change in the blink of an eye. A milestone session freezes a version of your child that will never exist again — the wobbly first stand, the serious concentrating face, the way they grip your finger at three months.",
    priceLine: 'Milestone sessions from $200',
    bookingHref: '/contact',
    sections: [
      {
        heading: 'Every stage worth remembering',
        paragraphs: [
          "The most popular milestones I photograph are the sitter session, around six to eight months when baby can sit up on their own, and the first birthday. But there's no wrong time — first haircuts, the start of kindergarten, or simply your child at a favorite age are all worth preserving.",
          "Milestone sessions are relaxed and child-led. We don't force poses or chase the perfect smile. Instead, we follow your little one's lead, play, and let their real personality come through.",
        ],
      },
      {
        heading: 'Outdoors or in your home',
        paragraphs: [
          "Sessions can happen outdoors at one of our beautiful local spots around Spring Lake, Fayetteville, and Fort Bragg, or in the comfort of your own home — whichever suits your child best. I keep them short and low-pressure so they stay fun for everyone.",
          "These sessions also make a wonderful gift for grandparents, who often treasure the images even more than the parents do.",
        ],
      },
    ],
    included: [
      '1 hour session, outdoors or in-home',
      '15 high-resolution, hand-edited images',
      'Child-led, low-pressure pace',
      'Private online gallery to download and share',
    ],
    gallery: [
      { src: '/images/real/children-milestone-portrait-outdoor-lifestyle.jpg', alt: 'Children milestone portrait outdoors - Spring Lake NC', aspectClass: 'aspect-[3/4]' },
      { src: '/images/real/children-playful-outdoor-portrait.jpg', alt: 'Playful children milestone session - Fayetteville NC', aspectClass: 'aspect-[3/4]' },
      { src: '/images/real/children-portrait-toddler-picking-pinecones-fall.jpg', alt: 'Toddler milestone session in fall near Fort Bragg', aspectClass: 'aspect-[3/4]' },
      { src: '/images/real/children-exploring-outdoors-natural-light.jpg', alt: 'Child exploring outdoors, natural light - Spring Lake NC', aspectClass: 'aspect-[3/4]' },
    ],
    relatedPosts: [
      { href: '/blog/what-is-a-milestone-session', label: 'What is a milestone session?' },
      { href: '/blog/childrens-milestone-photography', label: "Children's milestone photography guide" },
    ],
    testimonial: {
      author: 'Gregg K.',
      quote: 'Tiffany met me at a location convenient to me. She had several suggestions for poses and spots. She quickly edited the photos and got them back to me. Recommended!',
    },
    faqs: [
      { q: 'What counts as a milestone session?', a: 'Common milestones include the sitter session (six to eight months), first birthdays, and other big moments like first haircuts or starting school. Any stage of your child\'s growth is worth capturing.' },
      { q: 'How much is a milestone session?', a: 'Milestone sessions are $200 and include a one-hour session with 15 high-resolution edited images in an online gallery.' },
      { q: 'Where do milestone sessions take place?', a: 'Outdoors at a local spot around Spring Lake, Fayetteville, or Fort Bragg, or in your home — whichever is most comfortable for your child.' },
      { q: 'When should I book?', a: 'Sooner than you think — children change fast. For a sitter session, aim for six to eight months; for a first birthday, book a few weeks ahead.' },
    ],
    serviceName: 'Milestone Photography',
    serviceType: 'Milestone photography session',
    offerPrice: '200',
  },
};

// Top-level location landing page (not under /services)
export const fortBraggPage: ServicePage = {
  slug: 'fort-bragg-family-photographer',
  metaTitle: 'Fort Bragg Family Photographer | Military Family Sessions',
  metaDescription:
    'Family photographer for Fort Bragg military families in Spring Lake, NC. Homecoming, pre-deployment, PCS & milestone sessions. Book with Tiffany Jarosz.',
  canonical: 'https://photobytiff.com/fort-bragg-family-photographer',
  heroImage: '/images/blog/family-photography-fort-bragg-featured.jpg',
  heroAlt: 'Fort Bragg military family photography session in Spring Lake, NC',
  eyebrow: 'Fort Bragg Military Families',
  h1: 'Fort Bragg Family Photographer',
  intro:
    "If you're stationed at Fort Bragg, you already know the tempo. Deployments come and go, orders change, and the seasons when everyone is home together are precious. I help military families preserve those windows — before the next chapter begins.",
  priceLine: 'Family sessions from $400 · Homecoming & pre-deployment sessions available',
  bookingHref: '/contact',
  sections: [
    {
      heading: 'Why military family photos matter differently',
      paragraphs: [
        "It's not just about a nice picture for the Christmas card. It's about freezing a window of time when everyone is in the same frame, in the same place, in this specific season of life. When your kids are older and you're stationed somewhere else, these are the photos that will remind them of this chapter — the house off base, the playground, the way their parent looked in uniform coming through the door.",
        "The sessions where a service member just got home are unlike anything else: the relief, the joy, the way kids cling a little tighter. Those are the images families return to again and again.",
      ],
    },
    {
      heading: 'Homecoming & pre-deployment sessions',
      paragraphs: [
        "Homecoming sessions are the most emotionally charged photos I take all year. I'll meet you at the airfield or company area, or wait at your home for the private reunion, staying out of the way and letting the moment unfold — no posing, just your family welcoming someone back. Because flights shift constantly, reach out as soon as you have a tentative date and I'll build in extra flexibility.",
        "Pre-deployment sessions hit differently. I keep them gentle and unhurried, focused on connection — lots of snuggling, hand-holding, and walking together. The goal is imagery your service member can carry with them, and photos your kids can look at when they miss their parent.",
      ],
    },
    {
      heading: 'When to schedule around your window',
      paragraphs: [
        "The honest answer is: as soon as you know your window. If your spouse is home for a dwell period, don't wait until the last month. Book early so we have flexibility if weather or sickness forces a reschedule. If someone is in uniform, uniform portraits with the family in coordinated neutrals are some of the most powerful images I create — they honor your service while capturing the family that stands behind it.",
      ],
    },
  ],
  included: [
    'About 1 hour, golden-hour session',
    'Documentary-style homecoming coverage available',
    '25 high-resolution, hand-edited images',
    'Uniform portraits welcome',
    'Private online gallery to download and share',
  ],
  gallery: [
    { src: '/images/real/family-lifestyle-mom-holding-son-fall-pines.jpg', alt: 'Military family session in fall pines near Fort Bragg', aspectClass: 'aspect-[4/3]' },
    { src: '/images/real/family-outdoor-nature-session.jpg', alt: 'Fort Bragg family session outdoors - Spring Lake NC', aspectClass: 'aspect-[4/3]' },
    { src: '/images/real/family-lifestyle-mom-son-pine-forest-golden-hour.jpg', alt: 'Golden hour military family portrait - Fayetteville NC', aspectClass: 'aspect-[3/4]' },
    { src: '/images/real/family-outdoor-mini-session.jpg', alt: 'Fort Bragg family mini session - Spring Lake NC', aspectClass: 'aspect-[4/5]' },
  ],
  relatedPosts: [
    { href: '/services/family-photography', label: 'Family Photography sessions' },
    { href: '/blog/family-photography-fort-bragg-nc', label: 'Family photography at Fort Bragg: the full guide' },
  ],
  testimonial: {
    author: 'Gregg K.',
    quote: 'Tiffany met me at a location convenient to me. She had several suggestions for poses and spots. She quickly edited the photos and got them back to me. Recommended!',
  },
  faqs: [
    { q: 'Do you photograph homecomings?', a: 'Yes. Homecoming sessions are documentary-style — I meet you at the airfield, company area, or your home and capture the reunion as it unfolds. Reach out as soon as you have a tentative date since flights shift often.' },
    { q: 'When should military families book?', a: 'As soon as you know your window. If your spouse is home for a dwell period, book early so we have flexibility to reschedule around weather or short-notice changes.' },
    { q: 'Can we do photos in uniform?', a: 'Absolutely. Uniform portraits with the family in coordinated neutrals are some of the most meaningful images I create.' },
    { q: 'Where are you located?', a: 'I\'m based in Spring Lake, NC, minutes from Fort Bragg, and serve Fayetteville and the surrounding area. Travel is included within 30 miles of Spring Lake.' },
  ],
  serviceName: 'Fort Bragg Family Photography',
  serviceType: 'Military family photography session',
  offerPrice: '400',
};

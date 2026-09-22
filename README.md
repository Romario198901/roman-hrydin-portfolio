# Roman Hrydin Portfolio

Create a complete, production-quality personal developer portfolio website for:

ROMAN HRYDIN
Junior Full-Stack Developer

IMPORTANT:
Build an original portfolio design.

The reference screenshots provided separately should be used ONLY as inspiration for:
- information architecture;
- section order;
- content hierarchy;
- responsive behavior;
- general idea of project cards and contact cards.

DO NOT copy:
- the visual design;
- exact layouts;
- gradients;
- backgrounds;
- decorative elements;
- card shapes;
- typography;
- spacing;
- logo;
- animations;
- or any distinctive visual identity from the reference website.

The final website must have its own visual identity based primarily on Roman Hrydin's CV.

==================================================
1. TECHNICAL REQUIREMENTS
==================================================

Build the website as a modern production-ready application using:

- Next.js
- App Router
- React
- TypeScript
- CSS Modules or another clean maintainable styling approach appropriate for Next.js
- semantic HTML5
- responsive and adaptive design
- reusable React components
- optimized images using next/image where appropriate

The project must be structured so that it can later be deployed to Vercel.

Do NOT use Vite.

Keep the architecture clean and understandable for a junior full-stack developer who may later edit and maintain the project manually.

Use Server Components by default where possible.
Use Client Components only where browser interaction requires them.

Avoid unnecessary dependencies.

The project must successfully support:

npm install
npm run dev
npm run build

The production build must complete without TypeScript or ESLint errors.

==================================================
2. DESIGN DIRECTION
==================================================

The visual identity should be inspired primarily by Roman's CV.

Use a clean, modern, professional developer portfolio aesthetic.

PRIMARY COLOR DIRECTION:

Background:
#FFFFFF or a slightly warm off-white such as #FAFAF8

Primary text:
#181818 / #202020

Secondary text:
#555555 / #666666

Primary accent:
warm yellow / golden yellow inspired by the headings in the CV.

Suggested accent range:
#F5B800
#F4B400
#EAAA00

Use dark graphite where stronger contrast is required.

Optional very light neutral sections:
#F5F5F2
#F8F8F6

Borders:
light neutral grey.

The yellow accent should be used intentionally for:
- section labels;
- small decorative elements;
- active navigation;
- icons;
- buttons;
- tags;
- project highlights;
- hover states.

Do NOT turn the whole website yellow.

The overall visual impression should be:

- professional;
- minimal;
- modern;
- technically oriented;
- confident;
- clean;
- readable;
- suitable for recruiters and engineering teams.

Avoid excessive gradients, glassmorphism, neon effects, or overly futuristic visuals.

The CV should remain the main visual inspiration.

==================================================
3. TYPOGRAPHY
==================================================

Use a modern sans-serif font available through next/font.

Good options:
- Inter
- Manrope
- Geist

Use strong typography hierarchy.

Hero name:
very large and bold.

Section titles:
large and confident.

Body:
high readability and comfortable line-height.

Use uppercase small labels with increased letter spacing for section identifiers such as:

ABOUT
TECH STACK
PROJECTS
EDUCATION
CONTACT

These labels can use the yellow accent.

==================================================
4. GLOBAL LAYOUT
==================================================

Use a centered responsive container.

Recommended max width:
1200–1280px.

Desktop:
generous horizontal whitespace.

Tablet:
reduce gaps and paddings.

Mobile:
single-column layouts and comfortable touch targets.

Recommended section order:

1. Header
2. Hero / Developer introduction
3. About / short professional summary
4. Technology Stack
5. Featured Projects
6. Education & Certifications
7. CV call-to-action
8. Contact
9. Footer

The transition between sections should feel cohesive.

==================================================
5. HEADER
==================================================

Create a sticky or fixed header.

Desktop navigation:

Roman Hrydin / developer mark on the left.

Navigation on the right:

About
Stack
Projects
Education
Contact

Add a visually distinct CTA:

Download CV

Clicking navigation links should smoothly scroll to their respective sections.

On mobile:
replace desktop navigation with a hamburger menu.

The mobile menu must be accessible:
- proper aria labels;
- keyboard support;
- clear close button;
- focus states.

Do not copy the "< dev />" branding from the reference screenshots.

Create an original simple personal developer mark.

Possible direction:
RH.
Roman Hrydin.
RH / Developer.

Keep it understated and professional.

==================================================
6. HERO SECTION
==================================================

Create a strong personal introduction.

Use the provided portrait image of Roman Hrydin.

Do NOT modify the person's identity or generate a replacement portrait.

Desktop layout:
two columns.

LEFT:

Small accent label:

HELLO, I'M

Main heading:

Roman Hrydin

Professional title:

Junior Full-Stack Developer

Professional summary:

"Junior Full-Stack Developer with practical experience building modern web applications using React, Next.js, Node.js, TypeScript, and REST APIs. Experienced in developing responsive user interfaces, implementing server-side logic, integrating databases and authentication systems, and deploying full-stack solutions."

Add two CTA buttons:

View Projects
Download CV

Download CV must download/open ONLY the English CV supplied with the project.

Do NOT create a German, Ukrainian, or second CV version.

Optional secondary text:

Based in Lviv, Ukraine
English — Upper-Intermediate
Ukrainian — Native

RIGHT:

Display Roman's supplied portrait.

Use an original presentation:
for example a rounded rectangle with asymmetric yellow decorative elements.

Do NOT imitate the circular portrait design from the screenshots.

The image should remain professional and prominent.

==================================================
7. ABOUT SECTION
==================================================

Section label:
ABOUT

Heading:

Building modern web applications from interface to backend

Use a concise version of Roman's professional summary.

Explain that Roman has practical experience with:

- responsive interfaces;
- React applications;
- Next.js applications;
- TypeScript;
- REST API integration;
- server-side logic;
- authentication;
- MongoDB;
- application deployment;
- teamwork.

Do not exaggerate experience.

Do not call Roman a Senior Developer.

Use:
Junior Full-Stack Developer.

Optional three small information cards:

FOCUS
Full-Stack Web Development

FRONTEND
React · Next.js · TypeScript

BACKEND
Node.js · Express · MongoDB

==================================================
8. TECH STACK SECTION
==================================================

Section id:
stack

Section label:
TECH STACK

Heading:
Technologies I Work With

Organize technologies into clear categories.

FRONTEND

React
Next.js
TypeScript
JavaScript (ES6+)
HTML5
CSS3
CSS Modules
Responsive & Adaptive Design

BACKEND

Node.js
Express.js
REST API

DATABASE

MongoDB

TOOLS

Git
GitHub
Postman
Vite
Figma

Also include relevant technologies demonstrated by the portfolio projects:

TanStack Query
Zustand
Formik
Axios
Firebase

Use recognizable technology icons where available.

Do not use huge colorful logos.

Create restrained technology cards or pills consistent with the CV-inspired visual identity.

Desktop:
multi-column grid.

Mobile:
2-column or horizontally scrollable layout depending on usability.

Each item should have:
icon
technology name

Add subtle hover interaction.

==================================================
9. PROJECTS SECTION
==================================================

Section id:
projects

Section label:
PROJECTS

Heading:
Selected Projects

Subtitle:

"A selection of full-stack and frontend projects focused on responsive interfaces, API integration, state management, authentication, and practical user flows."

Display exactly FOUR main projects:

1. Leleka
2. RentalCar
3. Learn Lingo
4. Paws' Little Home

DO NOT include the 09-auth homework project.

Use large professional project cards.

Each project card should contain:

- project image / screenshot;
- project name;
- project type;
- short description;
- role;
- technology tags;
- selected key contributions;
- Live Demo button;
- GitHub button when the repository URL is available.

If a GitHub repository URL has not been explicitly provided in the source materials, DO NOT invent one.

==================================================
10. PROJECT — LELEKA
==================================================

Name:
Leleka — Pregnancy Assistant Platform

Type:
Team Project

Role:
Full-Stack Developer

Description:

A full-stack pregnancy assistant platform designed to help users track pregnancy progress, manage diary entries, tasks, mood, personal information, and weekly pregnancy data.

Technology stack:

Next.js 16
React
TypeScript
Node.js
Express.js
MongoDB
Mongoose
TanStack Query
Zustand
Formik
JWT Authentication

Key contributions:

- Created backend endpoints for the diary module.
- Implemented fetching individual and multiple diary entries.
- Implemented creation and updating of diary entries.
- Built the diary page using Next.js routing.
- Used client-side requests and Route Handlers for secure backend communication.
- Integrated MongoDB using Mongoose models and validation.
- Implemented responsive UI.
- Optimized client/server data fetching with TanStack Query.
- Worked with Next.js App Router architecture.

Live Demo:
https://project-decodery-front.vercel.app/

Use a suitable screenshot of the actual project supplied by the user if available.

==================================================
11. PROJECT — RENTALCAR
==================================================

Name:
RentalCar — Car Rental Web Application

Type:
Personal Project

Role:
Full-Stack Developer

Description:

A modern car rental marketplace with a searchable vehicle catalog, advanced filtering, detailed car pages, and booking requests.

Technology stack:

Next.js
React
TypeScript
TanStack Query
REST API
Axios
Formik
Yup
CSS Modules

Key features:

- Server-side catalog data fetching.
- Car catalog with pagination.
- Filtering by brand.
- Filtering by price.
- Filtering by mileage.
- Dynamic car detail pages.
- Booking request functionality.
- Form validation.
- API integration.
- Responsive layouts for mobile, tablet, and desktop.
- Loading and error states.

Live Demo:
https://rental-car-three-chi.vercel.app/

==================================================
12. PROJECT — LEARN LINGO
==================================================

Name:
Learn Lingo

Type:
Personal Project

Role:
Frontend Developer

Description:

A language-learning teacher marketplace where users can browse teachers, filter results, manage favorites, authenticate, and submit lesson booking requests.

Technology stack:

React
TypeScript
Firebase
React Query
CSS Modules
React Hook Form
Yup

Relevant functionality:

- Teacher listing.
- Teacher filtering.
- Pagination.
- User authentication.
- Favorites.
- Protected user functionality.
- Lesson booking requests.
- Firebase persistence.
- Responsive UI.
- Client-side validation.
- React Query caching and synchronization.

Live Demo:
https://learn-lingo-app-hazel.vercel.app/

Do not invent additional features.

==================================================
13. PROJECT — PAWS' LITTLE HOME
==================================================

Name:
Paws' Little Home

Type:
Team Project

Role:
Frontend Developer

Description:

A responsive animal shelter website where visitors can browse animals looking for a home, read detailed animal information, and submit adoption applications.

Technology stack:

HTML5
CSS3
JavaScript ES6+
Vite
Axios
Swiper
Git
GitHub

Key functionality:

- Animal catalogue.
- Animal photos and descriptions.
- Detailed animal information.
- Adoption application form.
- Shelter information.
- FAQ.
- Success stories.
- Responsive mobile, tablet and desktop layouts.
- Pagination.
- Sliders.
- Modals.
- Notifications.

Roman's role:

- 
- Developed the section «Наші хвостики « on the site
- Assisted teammates with Git, libraries, and frontend blockers.
- Implemented and reworked substantial parts of the website when team capacity decreased.

Live Demo:
https://riky-droyg.github.io/paws-little-home/

==================================================
14. PROJECT CARD INTERACTIONS
==================================================

On desktop:

Use subtle hover effects:
- small card elevation;
- slight image zoom;
- yellow border/accent transition.

Do not use dramatic animations.

Live Demo buttons must open external websites in a new tab.

Use:

target="_blank"
rel="noopener noreferrer"

GitHub buttons should behave the same way.

On mobile:
cards must remain easy to scan and buttons must have large touch targets.

==================================================
15. EDUCATION & CERTIFICATIONS
==================================================

Create a dedicated section:

EDUCATION & CERTIFICATIONS

This should NOT visually copy the certification section from the reference screenshots.

Use the same CV-inspired visual identity.

Include:

GOIT
Fullstack Developer
2025–2026

Certificate:
Fullstack Developer Course

Total training:
872 hours

Main curriculum:

HTML & CSS
JavaScript
React
Next.js
Node.js
Career Skills

Display the provided GoIT certificate image.

Make the certificate clickable.

Clicking it should open a larger accessible modal/lightbox.

Do not expose unnecessary certificate identifiers prominently.

SECOND CERTIFICATE:

EPAM Campus

IT Fundamentals for Veterans

110 hours

Completed:
2025

Program topics:
- Basics of Computer Science
- Basics of Programming

Display the supplied EPAM Campus diploma image.

The diploma states that Roman Hrydin successfully completed the final project of the "IT Fundamentals for Veterans" training.

Use a responsive certificate grid.

Desktop:
two certification cards.

Mobile:
one column.

Each card should include:
institution
program
duration
year
certificate image

==================================================
16. ADDITIONAL EDUCATION
==================================================

Below certifications, add a smaller education block:

Taurida V. I. Vernadsky National University

Master's Degree in History

2006–2011

Keep this section concise because the portfolio should primarily emphasize software development.

==================================================
17. PROFESSIONAL BACKGROUND
==================================================

Optionally include a compact "Professional Background" subsection rather than a large timeline.

Use factual CV information only.

Soldier
Armed Forces of Ukraine
Feb 2022 – Present

Relevant transferable skills:
- high-discipline teamwork;
- following technical instructions and procedures;
- accountability;
- ability to work under pressure.

Delivery Specialist
Nova Post
Apr 2020 – Feb 2022

Relevant experience:
- logistics coordination;
- client communication;
- task prioritization;
- time-sensitive operations.

Tour Guide
Accord-Tour Ltd.
May 2019 – Mar 2020

Relevant experience:
- leading international groups;
- managing complex travel schedules;
- solving organizational and logistical problems.

Keep this section professional and concise.

Do not make military imagery part of the website design.

==================================================
18. CV SECTION
==================================================

Create a strong CTA block near the end of the page.

Heading:

Want the full overview?

Text:

"Download my CV for a concise overview of my technical skills, project experience, education, and professional background."

ONE button only:

Download CV — English

Use the supplied English CV PDF.

Do not create:
- German CV;
- Ukrainian CV;
- fictional CV versions.

==================================================
19. CONTACT SECTION
==================================================

Section id:
contact

Section label:
CONTACT

Heading:
Let's Get in Touch

Create four clickable contact cards:

EMAIL

romario198901@gmail.com

Link:
mailto:romario198901@gmail.com


LINKEDIN

Roman Hrydin

URL:
https://www.linkedin.com/in/roman-hrydin-frontend-dev?utm_source=share_via&utm_content=profile&utm_medium=member_ios


GITHUB

Romario198901

URL:
https://github.com/Romario198901


WHATSAPP

+380 98 702 8897

Use the correct WhatsApp click-to-chat link generated from:
+380987028897

External links should open safely in a new tab.

Each contact card should include an appropriate icon.

Desktop:
2x2 grid or four-column grid depending on available width.

Tablet:
2x2.

Mobile:
single column.

Add subtle yellow hover accents.

==================================================
20. FOOTER
==================================================

Create a minimal footer.

Content:

Roman Hrydin
Junior Full-Stack Developer

Add small GitHub and LinkedIn icons.

Add:

© Roman Hrydin

Do not hardcode an outdated year if it can be generated dynamically.

==================================================
21. RESPONSIVE DESIGN
==================================================

The site must be fully responsive.

Desktop:
>= 1200px

Tablet:
768px–1199px

Mobile:
< 768px

Pay particular attention to mobile.

Mobile requirements:

- no horizontal page overflow;
- readable headings;
- responsive portrait;
- hamburger navigation;
- stacked project cards;
- technology grid;
- single-column certificates;
- single-column contact cards;
- minimum comfortable touch targets;
- project screenshots must preserve aspect ratio.

Do not reproduce the horizontal overflow visible in some reference screenshots.

==================================================
22. ACCESSIBILITY
==================================================

Use semantic HTML.

Required:





Use one logical H1.

Maintain correct heading hierarchy.

Provide descriptive alt text for:
- Roman's portrait;
- project screenshots;
- certificate images.

Buttons and links must have visible keyboard focus states.

Use sufficient color contrast.

Do not rely exclusively on yellow color to communicate state.

Support prefers-reduced-motion.

==================================================
23. ANIMATIONS
==================================================

Animations should be subtle and professional.

Allowed:

- smooth scrolling;
- small fade/translate section reveal;
- subtle card hover;
- small icon transitions;
- underline/navigation animation;
- image zoom of approximately 1.02–1.04 on hover.

Avoid:

- heavy parallax;
- excessive glowing;
- animated backgrounds;
- distracting particles;
- large motion effects.

Performance is more important than decorative animation.

==================================================
24. SEO AND METADATA
==================================================

Configure Next.js metadata.

Title:

Roman Hrydin | Junior Full-Stack Developer

Description:

Portfolio of Roman Hrydin, a Junior Full-Stack Developer working with React, Next.js, TypeScript, Node.js, REST APIs, and MongoDB.

Add appropriate Open Graph metadata.

Add a favicon or simple RH monogram favicon.

Do not invent social usernames.

==================================================
25. PERFORMANCE
==================================================

Optimize the site for Vercel deployment.

Use:
- next/image;
- optimized local assets;
- lazy loading where appropriate;
- minimal JavaScript;
- reusable components;
- no unnecessary client-side rendering.

Aim for strong Lighthouse results in:

Performance
Accessibility
Best Practices
SEO

==================================================
26. COMPONENT ARCHITECTURE
==================================================

Use a clean reusable structure similar to:

app/
  layout.tsx
  page.tsx
  globals.css

components/
  Header/
  Hero/
  About/
  TechStack/
  Projects/
  ProjectCard/
  Education/
  CertificateCard/
  CvCta/
  Contact/
  ContactCard/
  Footer/

data/
  projects.ts
  technologies.ts
  contacts.ts
  education.ts

public/
  images/
  certificates/
  projects/
  cv/

Do not hardcode all project content directly inside page.tsx.

Store repeatable content in typed data structures.

Create TypeScript interfaces/types where appropriate.

==================================================
27. CONTENT ACCURACY — CRITICAL
==================================================

Do not invent any:

- employers;
- experience;
- technologies;
- projects;
- awards;
- education;
- certificates;
- metrics;
- testimonials;
- GitHub statistics;
- project results;
- contact details;
- links.

Use only the information supplied in this prompt and uploaded assets.

If an asset or URL required for a feature is missing, leave the implementation prepared for it rather than fabricating information.

Do not create fake project screenshots.

Do not generate fake certificates.

==================================================
28. VISUAL ASSET MAPPING
==================================================

Use the assets supplied with this project as follows:

Portrait:
Roman Hrydin's supplied portrait → Hero section.

CV:
supplied English Resume/CV PDF → Download CV button.

GoIT:
supplied Fullstack Developer certificate → Education & Certifications.

EPAM:
supplied IT Fundamentals for Veterans diploma → Education & Certifications.

Project screenshots:
use only screenshots/assets actually supplied or obtained from the project assets.

Never replace these with unrelated stock images.

==================================================
29. FINAL QUALITY REQUIREMENTS
==================================================

The final result should look like a real developer portfolio that Roman can send to recruiters together with his CV.

It should NOT look like:
- a generic Lovable template;
- a clone of the supplied reference portfolio;
- a bootcamp landing page;
- a flashy crypto website;
- an AI-generated concept page.

It SHOULD feel:
- personal;
- technically credible;
- clean;
- polished;
- modern;
- restrained;
- easy to scan;
- recruiter-friendly.

The architecture can take inspiration from the supplied screenshots, but the visual identity must clearly be original and derived from Roman Hrydin's CV.

Before finishing:
- verify every navigation link;
- verify every external link;
- verify CV download;
- verify responsive layouts;
- verify certificate modal;
- verify project links;
- verify no horizontal overflow;
- verify mobile menu;
- run production build;
- fix TypeScript errors;
- fix ESLint errors.

This project was built with [Lovable](https://lovable.dev).

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/59d720a2-1a8e-41e1-bc48-7cadacf571f1).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```

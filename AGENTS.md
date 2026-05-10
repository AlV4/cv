# AGENTS.md — CV Repository Context

This file gives Codex (via Codex or any other interface) the context needed to help maintain and tailor this CV effectively. The canonical source of truth for resume content is `_data/resume.json`.

---

## About the Owner

**Oleksandr Chernyshenko** — Senior Backend PHP Engineer | Distributed Systems for Live Events
- **Location:** Valencia, Spain (moved summer 2025, previously Kyiv)
- **Experience:** 10+ years (career start year: 2016; the resume template auto-computes the number from `personal.startYear`)
- **Email:** ol3ksandr.chernyshenko@gmail.com
- **GitHub:** [AlV4](https://github.com/AlV4)
- **LinkedIn:** [linkedin.com/in/oleksandr-chernyshenko](https://www.linkedin.com/in/oleksandr-chernyshenko)
- **Telegram:** [@alex_prg](https://t.me/alex_prg)
- **English level:** B2 — actively improving toward C1; prefer clean, natural text without overwriting
- **Spanish level:** A1 — currently learning
- **Native:** Ukrainian, Russian

## Job Search Context

- **Target role:** Senior Backend Engineer / Tech Lead (remote or hybrid)
- **Target markets:** Remote-first EU and US companies, Spanish companies in Valencia/Barcelona/Madrid
- **Target salary:** ~€60K/year (€5K/month)
- **Strategy:** Prioritize remote EU/US over Spanish local hires (Spanish local market tends to cap around €50K)

## Positioning

**Headline (current):**
> Senior Backend PHP Engineer | Distributed Systems for Live Events

**Alternative headline framings (for tailoring):**
> Senior Backend Engineer · Microservices · DDD / CQRS · Event-Driven Systems

**Core narrative:**
Senior backend engineer / tech lead specializing in distributed, event-driven systems for high-stakes live events. Currently leading backend across a 50-microservice event-management platform deployed at the Paris 2024 Summer Olympics, Milano Cortina 2026 Winter Olympics, and the 2025 Women's Rugby World Cup. Core stack is PHP (Laravel/Lumen/Symfony) on Kubernetes (AKS) with RabbitMQ-based CDC pipelines, PostgreSQL, MongoDB, and Redis. Domains span Olympic-scale event ops, high-traffic media (millions of DAU), US healthcare SaaS under compliance, and high-load iGaming. Comfortable in Go and Java when the problem requires it.

**Primary architecture keywords:**
Microservices, Event-Driven Architecture, CDC (Change Data Capture), Domain-Driven Design (DDD), CQRS, REST API Design, Clean Architecture, System Design, SOLID.

**Primary tech stack:**
PHP 7/8, Laravel, Lumen, Symfony, Yii, FrankenPHP, PostgreSQL, MongoDB, MySQL, Redis, RabbitMQ, Kubernetes (AKS), Docker, Linux, Datadog, OpenAPI/Swagger, CI/CD. Working knowledge of Go and Java.

---

## Resume Tailoring Workflow

When tailoring `_data/resume.json` for a specific job posting:

1. **Profile summary (`personal.summary`)** — re-emphasize the bullet most relevant to the role. The summary array has three paragraphs: (1) Olympic-scale + CDC/event-driven, (2) Milan flight API + cross-domain breadth, (3) mentoring + Go/Java + location/availability. Reorder or rewrite emphasis without inventing.
2. **Per-job responsibilities** — surface bullets that match the target stack/domain; deprioritize others. Each role's last bullet is the **Stack** line — keep it accurate to that role.
3. **Skills section** — skills are now grouped by category (Architecture, Languages, Backend Frameworks, Data & Messaging, Cloud & Infrastructure, Testing & Quality, Monitoring & Observability, AI Tooling). Reorder categories or items within a category to put role-relevant items first.
4. **Experience phrasing** — `{experience}` placeholder in summary auto-computes from `startYear: 2016`. Don't hardcode a number; let the template fill it.
5. **Keep it truthful** — only reframe existing experience; never invent new projects, metrics, or technologies.

---

## About / Summary (canonical version)

The canonical summary lives in `_data/resume.json` under `personal.summary` as a 3-paragraph array. Use it as-is by default; trim or re-emphasize per role:

> Senior Backend Engineer with {experience}+ years building distributed high-load PHP systems using Laravel, Lumen, Symfony, RabbitMQ, Kubernetes (AKS), PostgreSQL, MongoDB, and Redis. Led backend delivery on a 50-microservice event-management platform deployed at the **Paris 2024 Summer Olympics**, **Milano Cortina 2026 Winter Olympics** and the **2025 Women's Rugby World Cup**, supporting hundreds of thousands of participants per event cycle. Replaced synchronous polling with event-driven CDC pipelines over RabbitMQ in the Arrivals & Departures Service, keeping tens of thousands of records continuously in sync across multiple upstream services.
>
> Shipped real-time integration with Milan airport's flight API that ran live throughout Milano Cortina 2026 Olympics, powering hundreds of daily participant transfers. Domain experience spans Olympic-scale event systems (Wiz-Team, Switzerland), high-traffic video streaming with millions of DAU (MindGeek, Canada), US healthcare SaaS under compliance constraints (Tonic Health), and high-load iGaming (Evoplay).
>
> Mentored mid-level engineers through code review and pairing; rotated on production on-call. Comfortable in Go and Java when the problem requires it. Based in Valencia, Spain — open to senior backend / tech lead roles, remote or hybrid, across Europe and the US.

---

## Canonical Experience Descriptions

### Wiz-Team — Senior Backend Engineer (Tech Lead) (Aug 2023 – Apr 2026)
Location: Lausanne, Switzerland · Remote (Valencia-based)

Led backend engineering across flagship modules of a 50-microservice event-management platform deployed at the Paris 2024 Summer Olympics, Milano Cortina 2026 Winter Olympics, and the 2025 Women's Rugby World Cup, supporting hundreds of thousands of participants per event cycle.

- **Arrivals & Departures Service (m-ads):** Eliminated synchronous polling and stale-data risk by designing and delivering an event-driven CDC pipeline over RabbitMQ — keeping tens of thousands of participant records continuously in sync with multiple upstream services, replacing the previous polling-based architecture.
- **Milan airport flight API integration:** Powered live participant transfer scheduling for Milano Cortina 2026 Olympics — combined live lookups with async batch sync to handle volatile flight data closer to departure, supporting hundreds of daily transfers throughout the Games.
- **FormBuilder v2 (lead engineer):** Unblocked iterative frontend modernization across hundreds of customizable forms (participants, teams, sport-specific data) by extracting form storage out of the legacy CodeIgniter monolith into a dedicated MongoDB-backed microservice. Chose MongoDB over relational storage for the document-oriented form schema.
- **Mentoring & on-call:** Mentored a mid-level backend engineer through continuous code review and pairing; co-designed system-architecture tradeoffs with the platform architect (event-driven vs synchronous, document vs relational storage); rotated on production on-call to debug data-sync incidents on critical paths.

**Stack:** PHP 8 (Laravel/Lumen, Symfony), PostgreSQL, MongoDB, MySQL, Redis, RabbitMQ (CDC), Kubernetes (AKS), Docker, FrankenPHP, Datadog, OpenAPI/Swagger, CI/CD.

### Tonic Health — Backend PHP Engineer (Aug 2022 – Jul 2023)
Location: Chicago IL, USA · Remote

Backend engineer on a US healthcare SaaS platform supporting appointment scheduling, prescription management, and patient workflows under healthcare compliance constraints.

- Contributed to incremental migration of a Symfony monolith into focused microservices.
- Implemented role-based access control using Sonata Admin to restrict feature and data access across user roles, aligned with compliance requirements around protected patient information.
- Participated in adoption of Datadog for observability; debugged and improved performance on patient-facing endpoints.

**Stack:** PHP, Symfony, Sonata Admin, PostgreSQL, Redis, Docker, Datadog.

### MindGeek — Backend PHP Engineer (Aug 2021 – Jul 2022)
Location: Montreal, Canada · Remote

Backend engineer on the **Trust & Safety team** of a high-traffic video streaming platform with millions of daily active users — building and maintaining the moderation infrastructure used internally by content reviewers to screen user-uploaded videos, GIFs, and images for prohibited content (violence, child safety violations, hate speech).

- Integrated a third-party content classification service into the moderation pipeline to automatically flag prohibited language (slurs, hate speech, racial content) in submission metadata, reducing manual review load on moderators.
- Built a timestamp-based reporting mechanism allowing users to mark precise moments in videos when filing complaints, giving moderators direct in-context evidence for review decisions.
- Maintained and extended complex status workflow logic for moderation states across videos, GIFs, and images — covering transitions between submission, automated screening, manual review, approval/rejection, and post-publication adjustments.

**Stack:** PHP (vanilla, no framework), MySQL, Redis, integration with internal and third-party services.

### Evoplay Entertainment — Backend PHP Engineer (Feb 2018 – Aug 2021)
Location: Kyiv, Ukraine

Backend engineer on a high-load iGaming platform with ~200 games, B2B partner integrations, and internal tooling. Contributed to incremental migration of a legacy monolithic core into microservices while keeping the live platform stable during rollout.

- **HTML5 canvas UI testing framework (end-to-end):** Standard Selenium selectors (XPath, CSS) cannot reach canvas elements, so implemented coordinate-based click interactions, multi-threaded parallel test execution, screenshot capture on failures, and JavaScript-injected click visualization for debugging. Enabled smoke testing across the entire ~200-game catalog in ~40 minutes, integrated into the master-branch CI pipeline.
- **Test discipline restoration:** Reduced integration test runtime from ~1 hour to ~10 minutes — separated previously-mixed unit and integration tests, identified slow paths in integration runs, and brought tests back into regular CI flow after the team had stopped running them due to runtime cost.
- **Admin SPA:** Built Vue.js + Symfony (Dockerized) admin SPA for partner settlements and mutual financial accounting with B2B casino operators using the platform's games.
- **Production ops:** Owned production deployment of new games and version updates; rotated on PagerDuty on-call, investigating session-drop alerts and other anomalies on the live platform.

**Stack:** PHP, Symfony, Vue.js, MySQL, Redis, Docker, Selenium WebDriver, PHPUnit, MockServer.

### Earlier Experience (Dec 2015 – Jan 2018)

Three earlier backend roles consolidated under one entry on the CV:

- **Backend Engineer at Fresh Design Agency, Kyiv (2017 – 2018)** — Built a booking system from scratch on Yii2 (domain logic, REST API, admin flows); maintained multiple client projects in parallel.
- **Backend Engineer at Monsterleads.pro, Kyiv (2016 – 2017)** — Designed the company's public REST API with OAuth authentication; integrated payment providers (PayPal, PayU) and messaging APIs (Telegram).
- **Web Software Developer at Easy Hotel Management System, Kyiv (2015 – 2016)** — Online hotel management system in PHP/PostgreSQL; introduced automated UI testing using Selenium WebDriver with Python.

**Stack across roles:** PHP, Yii2, PostgreSQL, MySQL, JavaScript, jQuery, Selenium, Python.

---

## Skills — Canonical Order (grouped)

Skills are grouped by category in `_data/resume.json`. Default order:

1. **Architecture:** Microservices, Event-Driven, DDD, CQRS, REST API Design, Clean Architecture, System Design
2. **Languages:** PHP 7/8, JavaScript, Go (working knowledge), Java (working knowledge)
3. **Backend Frameworks:** Laravel, Lumen, Symfony, Yii; FrankenPHP
4. **Data & Messaging:** PostgreSQL, MySQL, MongoDB, Redis, RabbitMQ, CDC pipelines
5. **Cloud & Infrastructure:** Kubernetes (AKS), Docker, Linux
6. **Testing & Quality:** PHPUnit, Selenium, MockServer, code review, TDD
7. **Monitoring & Observability:** Datadog, structured logging
8. **AI Tooling:** Claude Code, Cursor, GitHub Copilot

Reorder categories or items within categories per job posting to put the most-relevant skills first. Do not invent new categories or items.

---

## Cover Letter Conventions

- **Default language:** English. Ukrainian only when explicitly requested for a specific position.
- **Length:** ≤ 80 words.
- **Style:** Match the tone of the company. Tailored to their specific stack and domain — never generic template.
- **Opening:** Lead with the most relevant past experience for that domain. Examples:
    - iGaming role → lead with Evoplay
    - Healthcare / compliance → lead with Tonic Health
    - High-load / streaming / Trust & Safety → lead with MindGeek
    - Enterprise / events / live ops / distributed systems → lead with Wiz-Team (Olympics)
    - Event-driven / CDC / RabbitMQ → lead with Wiz-Team (m-ads CDC pipeline)
    - MongoDB / document-oriented → lead with Wiz-Team (FormBuilder v2)
    - Test infrastructure / CI / Selenium → lead with Evoplay (HTML5 canvas framework)

---

## Notes on Edge Cases

- **MindGeek:** Owner is fine with the company name appearing on the CV. Frame around engineering substance — Trust & Safety moderation infrastructure, high-traffic, millions of DAU — not content type.
- **Wiz-Team end date:** Currently listed as `Aug 2023 - Apr 2026` in `_data/resume.json`. Update if the role extends or wraps differently.
- **Education:** Bachelor's in Organizations Management (Nikopol Economic University, 2007 – 2012) — unrelated to current positioning. Keep but don't emphasize.
- **No certifications, no side projects, no conference talks** at the moment. Don't fabricate — lean on experience instead.
- **Years phrasing:** Auto-computed from `personal.startYear: 2016` via the `{experience}` placeholder. Don't hardcode a number in the summary text.
- **Emphasis on AI tooling:** AI Tooling is listed in the skills section (Claude Code, Cursor, GitHub Copilot) — surface it for roles that explicitly value AI-assisted development; deprioritize otherwise.
- **Languages on CV:** English (B2, → C1), Spanish (A1), Ukrainian (native), Russian (native). Spanish is worth keeping visible for Spain-based roles even at A1.

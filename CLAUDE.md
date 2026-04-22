# CLAUDE.md — CV Repository Context

This file gives Claude (via Claude Code or any other interface) the context needed to help maintain and tailor this CV effectively.

---

## About the Owner

**Oleksandr Chernyshenko** — Senior Backend Engineer
- **Location:** Valencia, Spain (moved summer 2025, previously Kyiv)
- **Experience:** 10+ years (can be phrased as "9+" or "10+" depending on role framing)
- **GitHub:** [AlV4](https://github.com/AlV4)
- **LinkedIn:** linkedin.com/in/alv4 (being renamed to oleksandr-chernyshenko)
- **English level:** B2 — prefer clean, natural text without overwriting

## Job Search Context

- **Target role:** Senior Backend Engineer (remote or hybrid)
- **Target markets:** Remote-first EU and US companies, Spanish companies in Valencia/Barcelona/Madrid
- **Target salary:** ~€60K/year (€5K/month)
- **Strategy:** Prioritize remote EU/US over Spanish local hires (Spanish local market tends to cap around €50K)

## Positioning

**Headline:**
> Senior Backend Engineer · Microservices · DDD / CQRS · Event-Driven Systems

**Core narrative:**
Senior backend engineer specializing in distributed systems and clean architecture. Core stack is PHP/Symfony, but comfortable across backend languages. Domains: iGaming, healthcare, high-traffic media, enterprise sports events. Currently leading backend on a microservice powering Paris 2024 and Milano Cortina 2026.

**Primary architecture keywords:**
Microservices, Domain-Driven Design (DDD), CQRS, Event-Driven Architecture, REST API, Clean Architecture, SOLID, Layered Architecture.

**Primary tech stack:**
PHP 8, Symfony, PostgreSQL, MySQL, Redis, RabbitMQ, Docker, Kubernetes, Git, CI/CD. Open to: Go, Node.js, Python.

---

## Resume Tailoring Workflow

When tailoring `data.json` for a specific job posting:

1. **Profile summary** — align emphasis to the role (e.g., lean harder on DDD if the role mentions it, on high-load if the role is scale-focused).
2. **Per-job responsibilities** — surface bullets that match the target stack/domain; deprioritize others.
3. **Skills section** — reorder so top 3 match the job's most-valued skills.
4. **Language level** — adjust experience framing ("9+" vs "10+") if the user specifies.
5. **Keep it truthful** — only reframe existing experience; never invent.

---

## About / Summary (canonical version)

Use this as the base summary; trim or re-emphasize per role:

> Senior Backend Engineer with 10+ years of experience building distributed systems across iGaming, healthcare, high-traffic media, and enterprise sports events.
>
> I specialize in designing and maintaining microservices using Domain-Driven Design, CQRS, and event-driven patterns. My core stack is PHP (Symfony) and I'm comfortable working across other backend languages when the problem requires it. I care about clean architecture, thoughtful decisions, and code that the team can still maintain two years from now.
>
> Currently leading backend development on a core microservice powering event operations at international sports events including Paris 2024 and Milano Cortina 2026.
>
> Based in Valencia, Spain. Open to senior backend roles — remote or hybrid — across Europe and the US.

---

## Canonical Experience Descriptions

### Wiz-Team — Senior Backend Engineer (Aug 2023 – Present)
Location: Valencia, Spain · Remote (was previously listed as Kyiv)

Leading backend development of a core microservice in a distributed event-support platform used at major international sports events (Paris 2024, Milano Cortina 2026).

- Designed and built microservice features using DDD and CQRS, aligning with shared architecture standards across the product.
- Contributed to several microservices across the company, reviewing code and driving consistency in quality and patterns.
- Integrated new services with legacy monolith components, keeping the system stable during incremental migration.
- Collaborated closely with product, QA, and other backend teams in a distributed, remote-first setup.

**Stack:** PHP 8, Symfony, PostgreSQL, RabbitMQ, Redis, Docker, Kubernetes, Git, CI/CD.

### Tonic Health (R1 RCM) — Backend Engineer (Aug 2022 – Jul 2023)

Backend engineer on a healthcare SaaS platform built on microservices, handling patient-facing workflows under US healthcare compliance constraints.

- Built new features and refactored existing services across a multi-storage environment (relational DBs, caching, structured logging).
- Designed clean integration points between services to reduce coupling and improve deployability.
- Performed systematic debugging and performance work on critical paths, improving response times on high-traffic endpoints.
- Collaborated with product and QA to translate healthcare requirements into maintainable code.

**Stack:** PHP, Symfony, microservices, PostgreSQL, Redis, Docker, Git.

### MindGeek — Backend Engineer (Aug 2021 – Jun 2022)

Backend engineer on a high-load video streaming platform serving millions of daily users.

- Maintained and extended the core streaming service, focusing on stability under heavy traffic.
- Integrated third-party partner systems via internal and external APIs.
- Built supporting business logic for complex content and entity processing pipelines.

**Stack:** PHP, microservices, MySQL, Redis, Git.

### Evoplay Entertainment — Backend Engineer (Feb 2018 – Aug 2021)

Backend engineer on a high-load iGaming platform, covering both core game services and internal tooling.

- Migrated parts of a legacy monolithic core into new microservices, keeping the live platform stable during rollout.
- Maintained and deployed the game platform to production, including on-call support for live traffic.
- Built an SPA for platform administration (Vue.js + Symfony, Dockerized).
- Designed and implemented a Selenium-based UI testing framework capable of testing HTML5 canvas games (Docker, Selenium WebDriver, PHPUnit, MockServer).

**Stack:** PHP, Symfony, Vue.js, MySQL, Redis, Docker, Selenium, Git.

### Fresh Design Agency — Backend Developer (Mar 2017 – Feb 2018)

Backend developer delivering client projects on a Yii2-based platform.

- Built a booking system from scratch, including domain logic, API, and admin flows.
- Refactored existing APIs to improve consistency and maintainability.
- Maintained several client projects in parallel.

**Stack:** PHP, Yii2, MySQL, Git.

---

## Skills — Canonical Order

Top 3 (pinned):
1. Backend Development
2. Microservices
3. Domain-Driven Design (DDD)

Full list:
PHP, Symfony, Microservices, Domain-Driven Design (DDD), CQRS, Event-Driven Architecture, REST API, PostgreSQL, MySQL, Redis, RabbitMQ, Docker, Kubernetes, Git, CI/CD, Software Architecture, System Design, Backend Development, Code Review, Agile, Scrum.

Reorder top 3 per job posting based on what the role emphasizes most.

---

## Cover Letter Conventions

- **Default language:** English. Ukrainian only when explicitly requested for a specific position.
- **Length:** ≤ 80 words.
- **Style:** Match the tone of the company. Tailored to their specific stack and domain — never generic template.
- **Opening:** Lead with the most relevant past experience for that domain. Examples:
    - iGaming role → lead with Evoplay
    - Healthcare → lead with Tonic Health
    - High-load / streaming → lead with MindGeek
    - Enterprise / events / complex systems → lead with Wiz-Team

---

## Notes on Edge Cases

- **MindGeek:** Owner is fine with the company name appearing on the CV. Keep framing around engineering (high-load streaming, millions of users) rather than content type.
- **Education:** Bachelor's in Organizations Management + Java courses — unrelated to current positioning. Keep but don't emphasize.
- **No certifications, no side projects, no conference talks** at the moment. Don't fabricate — lean on experience instead.
- **Years phrasing:** 10+ by default. Can be softened to "9+" for roles where a slightly shorter experience looks better aligned (e.g., mid-senior postings).

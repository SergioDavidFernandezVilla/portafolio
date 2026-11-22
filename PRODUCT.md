# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Stack

delegated: Next.js 16 (App Router) + TypeScript, Tailwind CSS v4, three.js via React Three Fiber, Framer Motion. Chosen by the user; existing scaffold in `frontend/`.

## Users

Primary: freelance clients evaluating a developer before starting a paid project. They arrive from a referral or social link, usually on desktop, often also on a phone, and want to judge capability and fit quickly. Secondary: technical peers and recruiters who scan the stack and project evidence.

## Product Purpose

A personal portfolio that lets a prospective client understand what the developer builds, see credible project work, and decide to start a conversation. Success is a client opening a project and then making contact.

## Positioning

The differentiator is demonstrated craft: interactive, animated web work shown as working artifacts rather than described in a list of services. Open decision: the owner's real specialty and project history must replace the placeholder content before launch.

## Operating Context

Visitors skim the first viewport, open one or two projects, check the stack, and look for a way to make contact. The portfolio is a public, always-on marketing surface; it has no login, no account, and no dashboard.

## Capabilities and Constraints

Confirmed: single-page portfolio with hero, about, selected projects, skills, and contact sections; project detail is out of scope for the first release. Three.js is used for an interactive hero scene and must remain decorative, not required to understand the page. Motion must respect `prefers-reduced-motion`. Content is placeholder and must be editable from one data module. Undecided: real name, role, project list, social links, CV file, contact endpoint, and whether a contact form or mailto is used.

## Evidence on Hand

No real project assets, case studies, testimonials, client names, or metrics have been supplied. Do not fabricate commercial claims, client logos, or results. Placeholder projects are illustrative only and must be labeled/replaced before launch.

## Product Principles

- Show the work; do not claim it.
- Let a project give the visitor a reason to keep scrolling.
- Keep the path from first viewport to contact short and obvious.
- Performance and accessibility are part of the craft being sold.
- Make every piece of content replaceable without touching layout code.

## Accessibility & Inclusion

Target WCAG 2.2 AA for text contrast, focus visibility, keyboard operation, and reduced motion. The 3D scene is decorative and must not carry essential information.

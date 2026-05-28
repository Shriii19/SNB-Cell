# SNB Call – Frontend Design

This is an interactive concept landing page created for the SNB Call. It demonstrates strong design thinking, modern frontend implementation, and a focus on user experience.

## View Live

💻 **soon**

## The Concept

The prompt called for a **responsive website section** featuring a high-quality **3D / 2.5D space-themed character** that integrates naturally into the UI with cursor interactions. 

Instead of building a heavy, full 3D canvas (which can impact performance and feel disconnected from standard DOM elements), this project uses a highly-optimized **2.5D spatial approach**. It layers CSS blurs, radial gradients, soft animations, and pointer-event tracking to create a premium, floating "orbital concierge" that feels completely native to the webpage while maintaining 60fps performance on all devices.

## Features

- **Interactive 2.5D Mascot:** A space-themed, soft-glowing interface character that tracks your cursor.
- **Premium Aesthetics:** Cinematic atmosphere with deep "night" blues, soft aqua/gold glows, and glassmorphism (backdrop-blur) components.
- **Asymmetric Bento Grid:** A features section utilizing modern layout structures.
- **Production-Ready & Responsive:** Meticulous spacing, typography hierarchies (using *Space Grotesk* and *Manrope*), and full responsiveness from mobile to wide screens.
- **Reduced Motion Support:** Respects user accessibility preferences by disabling heavy animations if requested by the OS.

## Tech Stack

This project was built using the required stack:
- **Framework:** [Next.js (App Router)](https://nextjs.org/)
- **Core Library:** React 19
- **Styling:** [Tailwind CSS (v4)](https://tailwindcss.com/)
- **Language:** TypeScript

## Running Locally

Because of naming constraints (`Task` cannot be an npm package name), the project is scaffolded inside the `web` subfolder.

1. Navigate to the `web` directory:
   ```bash
   cd web
   ```
2. Install the dependencies:
   ```bash
   npm install
   ```
3. Run the development server:
   ```bash
   npm run dev
   ```
4. Open [http://localhost:3000](http://localhost:3000) in your browser to view the project.

## Submission Details

- **Author:** [Your Name / Mudasir]
- **Deadline:** May 29, 2026 @ 9:00 AM

---
*Built with care for the SNB Intern Selection process.*

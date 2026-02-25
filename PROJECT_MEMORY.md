# Portfolio Engine Memory Layer v1.0

## 🎯 Strategic Intent
The portfolio is designed to present **Akila Umayanga** as a high-tier **Cloud & Security Engineer**. The UI is intentionally aggressive and "Cyber-Themed" to align with industry expectations for Security Operations and Infrastructure roles.

## 🧠 Architectural Logic

### 1. Stage-Based Navigation (`Overlay.tsx`)
The application uses a unique `stage` state (1-5) derived from `scrollYProgress`. This allows for a linear storytelling experience:
- **Stage 1**: Identity and Brand Statement (Design, Build, Deliver).
- **Stage 2-3**: Core Values & Philosophy (Build, Monitor, Defend).
- **Stage 4**: Real-time System Simulation (Visualizing technical capability).
- **Stage 5**: Conversion/Contact layer.

### 2. Services Section Slider (`HomeContent.tsx`)
Redesigned from a static grid to a horizontal carousel with horizontal scroll snapping. This adds tactile feedback and handles better on mobile devices where vertical space is premium.

### 3. Visual Language
- **Colors**: Transitioned from neon colors to a neutral, high-contrast monochrome (White/Black/Transparent) with occasional indigo/cyan accents for project sections. 
- **Typography**: Paired the high-contrast `Playfair Display` (Serif) for headings with `Manrope` (Sans-serif) for functional UI text, creating a "Scientific/Cinematic" feel.

## 💾 Implementation History & Decisions

### Project Data Architecture
- **Professional Projects**: Focused on Security Infrastructure. Images are hosted on GitHub/Credential providers to ensure zero-latency loading and reliable SSL delivery.
- **Freelance Section**: Indigo/Cyan gradient background used to visually separate "Service Work" from "Experience Work."

### Maintenance Hooks
- **Git Config**: Local identity is hard-locked to `akilaukb` and `akiladevop@gmail.com` to prevent multi-account identity collision on the local system.
- **Dev Port**: Standardized on port `3002` to avoid conflicts with default system services.

## 📈 Quality Assurance Standards
- **LCP Optimization**: Image display switched to `object-contain` with padding for badges to ensure no clipping or over-zooming.
- **Scroll Performance**: `use-mobile` hook implemented to selectively disable heavy WebGL/Three.js fragments on low-end mobile devices if needed.

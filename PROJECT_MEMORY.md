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
- **Professional Projects**: Focused on Security Infrastructure. Images are hosted on Cloudinary/GitHub to ensure high visual quality and high-speed delivery.
- **pfSense Project**: Updated to use an optimized Cloudinary URL (`f_auto, q_auto`) for the network diagram, improving LCP and visual clarity.
- **Freelance Section**: Indigo/Cyan gradient background used to visually separate "Service Work" from "Experience Work."

### Recent Updates (Session 2026-02-28)
- **Mobile Experience & Layout**: 
    - **Home**: Switched stat cards to a stacked grid on small screens to prevent overlap.
    - **About**: Scaled down large headings to ensure readability on mobile devices.
    - **Overlay**: Fine-tuned font sizes and spacing across all 5 intro stages for a better mobile experience.
    - **Projects**: Fixed the "PROJECTS" heading split and ensured consistent padding.
- **Branding & SEO**:
    - Simplified metadata title to exactly **"Akila Umayanga"**.
    - Generated and installed a custom circular **"AU" favicon** (`/public/icon.png`) for a more professional tab identity.
- **Resume Performance**:
    - Restored the **Live Resume Preview** using a robust Google Drive iframe.
    - Added an enhanced **Fallback Interface** that provides high-resolution download and view options if the embed is blocked by browser security.
- **Git Management**: 
    - All refinements were pushed to the `main` branch to maintain a clean deployment state.

### Maintenance Hooks
- **Git Config**: Local identity is hard-locked to `akilaukb` and `akiladevop@gmail.com` to prevent multi-account identity collision on the local system.
- **Dev Port**: Standardized on port `3002` to avoid conflicts with default system services.

## 📈 Quality Assurance Standards
- **LCP Optimization**: Image delivery migrated toward Cloudinary with automatic quality/format detection (`f_auto, q_auto`).
- **Mobile-First Validation**: Verified all layouts on simulated iPhone SE/Pixel small-screen breakpoints.
- **Scroll Performance**: `use-mobile` hook implemented to selectively disable heavy WebGL/Three.js fragments on low-end mobile devices if needed.

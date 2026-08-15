# SaaS Pricing Page Component

A sleek, fully responsive, and interactive SaaS Pricing Page component built from scratch using **React**, **TypeScript**, **Vite**, and **Tailwind CSS v4**. 

This project demonstrates clean component architecture, strict type safety, dynamic billing calculation logic, and a modern custom theme switcher (Dark/Light mode).

---

## Key Features

- 💳 **Dynamic Price Calculation**: Real-time recalculation of plan pricing based on the selected billing cycle (Monthly vs. Annual with percentage discount calculations).
- 🌓 **Dark / Light Mode Toggle**: Seamless theme switching using custom Tailwind CSS v4 variants (`@custom-variant dark`) and `lucide-react` icons.
- ⭐ **Conversion-Focused UI ("Most Popular" Badge)**: Highlighted plan card featuring custom positioning (`relative`/`absolute`) and subtle glowing border effects.
- 🔒 **Strict Type Safety**: Fully typed components, props, state, and data structures using TypeScript (`PricingPlan`, `BillingCycle`, `Feature`).
- 📱 **Mobile-First Responsive Layout**: Adaptive CSS Grid allocation (1 column on mobile screens, 3 columns on desktop devices).

---

## Tech Stack

- **Framework**: [React](https://react.dev/)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Build Tool**: [Vite](https://vitejs.dev/)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Deployment**: [Vercel](https://vercel.com/)

---

## 📁 Project Structure

```text
src/
├── components/
│   ├── BillingToggle.tsx    # Interactive toggle for Monthly / Annually cycles
│   └── PricingCard.tsx      # Reusable card component rendering individual plan details
├── data/
│   └── plans.tsx            # Mock SaaS pricing data matching TypeScript contracts
├── types/
│   └── index.ts             # TypeScript interfaces and types
├── App.tsx                  # Main layout container & theme state management
├── main.tsx                 # Application root entry point
└── index.css                # Global Tailwind CSS imports & custom variants
```
## Local Development

To run this project locally:

# 1. Clone the repository:
```Bash
git clone [https://github.com/nastlyxy/saas-pricing-page.git](https://github.com/nastlyxy/saas-pricing-page.git)
cd saas-pricing-page
```
# 2. Install dependencies:
```Bash
npm install
```
# 3. Start the development server:
```Bash
npm run dev
```
# 4. Open your browser and navigate to http://localhost:5173

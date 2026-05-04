# Agent Instructions for Portfolio Project

This project is a Next.js 15 migration of a premium portfolio design. It uses Tailwind CSS 4, DaisyUI 5, Framer Motion, and Swiper JS.

## Tech Stack
- **Framework**: Next.js (App Router)
- **Styling**: Tailwind CSS 4 (CSS-first config in `globals.css`)
- **UI Components**: DaisyUI 5
- **Animations**: Framer Motion
- **Icons**: React Iconify (`mdi` set)
- **Slider**: Swiper JS
- **Theming**: `next-themes` (persists `data-theme` on `<html>`)

## Project Structure
- `app/`: Contains the main routes and layout.
- `components/`: Modular React components.
- `public/`: Static assets (images, projects).
- `globals.css`: Tailwind 4 configuration, custom animations, and DaisyUI theme overrides.

## Guidelines for Agents
1. **Theming**: Always use DaisyUI semantic classes (e.g., `bg-base-100`, `text-base-content`). Custom theme colors are defined in `globals.css` under `[data-theme="dark"]` and `[data-theme="light"]`.
2. **Animations**: Use Framer Motion for entrance and scroll-reveal effects. Most sections use `whileInView` with `viewport={{ once: true }}`.
3. **Icons**: Use `@iconify/react`. Preferred set is Material Design Icons (`mdi:`).
4. **Responsive Design**: Maintain the 3-column grid on desktop (`lg:grid-cols-[320px_1fr]` and `xl:grid-cols-[320px_1fr_auto]`).
5. **Clean Code**: Keep components focused. Use `clsx` and `tailwind-merge` for complex class manipulations if needed.

## Maintenance
- To update projects, modify the `projects` array in `components/Projects.js`.
- To update skills, modify the `skillCategories` array in `components/Skills.js`.
- Custom CSS should be added to `app/globals.css` using Tailwind 4 syntax.

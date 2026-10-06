// Shared by the header and footer so both list and scroll to sections the same way.
export const NAV_LINKS = [
  { href: "/#why", label: "Why Climato" },
  { href: "/#features", label: "Features" },
  { href: "/#app", label: "Screens" },
  { href: "/#skye", label: "Meet Skye" },
  { href: "/#faq", label: "FAQ" },
  { href: "/#about", label: "About" },
];

export const SECTION_IDS = NAV_LINKS.map((link) => link.href.split("#")[1]);

// Where to scroll so a section's content is fully in view under the sticky
// header: centered if it fits, otherwise starting just above its content
// (skipping the section's own top padding, which is empty space).
export function sectionScrollTop(section: HTMLElement) {
  if (section.id === "hero") return 0;
  const headerH = document.querySelector("header")?.getBoundingClientRect().height ?? 0;
  const style = getComputedStyle(section);
  const rect = section.getBoundingClientRect();
  const contentTop = rect.top + window.scrollY + parseFloat(style.paddingTop);
  const contentBottom = rect.bottom + window.scrollY - parseFloat(style.paddingBottom);
  const available = window.innerHeight - headerH;
  const contentH = contentBottom - contentTop;
  const top =
    contentH <= available
      ? contentTop - headerH - (available - contentH) / 2
      : contentTop - headerH - 24;
  return Math.max(0, Math.round(top));
}

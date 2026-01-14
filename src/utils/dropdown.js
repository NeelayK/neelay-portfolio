export function initDropdown() {
  const toggle = document.getElementById("social-toggle");
  const menu = document.getElementById("social-menu");

  let open = false;

  toggle.addEventListener("click", () => {
    open = !open;

    menu.classList.toggle("opacity-100", open);
    menu.classList.toggle("opacity-0", !open);

    menu.classList.toggle("scale-100", open);
    menu.classList.toggle("scale-95", !open);

    menu.classList.toggle("pointer-events-auto", open);
    menu.classList.toggle("pointer-events-none", !open);
  });

  // Close on outside click (pro-level UX)
  document.addEventListener("click", e => {
    if (!toggle.contains(e.target) && !menu.contains(e.target)) {
      open = false;
      menu.classList.add("opacity-0", "scale-95", "pointer-events-none");
      menu.classList.remove("opacity-100", "scale-100", "pointer-events-auto");
    }
  });
}

export function renderLineBreaks() {
  document.querySelectorAll("[data-line]").forEach(el => {
    el.innerHTML = `
      <div class="relative flex items-center my-16 opacity-80">
        <div class="flex-grow border-t border-gray-300"></div>
        
        <span class="flex-shrink mx-4 text-[10px] tracking-[0.2em] uppercase font-medium text-gray-500">
          ${el.dataset.line}
        </span>
        
        <div class="flex-grow border-t border-gray-300"></div>
      </div>
    `;
  });
}
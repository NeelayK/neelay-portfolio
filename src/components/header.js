import { supabase } from "../supabase";
import { initDropdown } from "../utils/dropdown";
import { startRoleRotation } from "../utils/roleRotation";

export async function renderHeader() {
  const { data } = await supabase.from("menu").select("*");

  document.getElementById("header").innerHTML = `
    <header class="fixed top-0 left-0 w-full z-50 border-b border-white/10 backdrop-blur-xl bg-white/30 transition-all duration-300">
      <div class="max-w-[94vw] mx-auto px-4 py-5 flex justify-between items-center">
        
        <div class="flex items-center gap-4">
          <div class="relative flex h-2 w-2">
            <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-rose-400 opacity-75"></span>
            <span class="relative inline-flex rounded-full h-2 w-2 bg-rose-500"></span>
          </div>
          <span id="role-rotator" class="text-[10px] sm:text-xs uppercase tracking-[0.3em] font-medium text-black/80"></span>
        </div>

        <div class="relative">
          <button id="social-toggle" class="p-2 transition-transform active:scale-90 focus:outline-none">
             <svg class="w-6 h-6 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M4 8h16M4 16h16" />
             </svg>

 <div id="social-menu"
  class="
    absolute
    left-1/2
    -translate-x-1/2
    min-w-[70px]
    backdrop-blur-2xl
    scale-0
    opacity-0
    origin-top
    transition-all
    duration-500
    ease-[cubic-bezier(0.23,1,0.32,1)]
    py-6
    flex
    flex-col
    gap-6
    items-center
  ">

              ${data.map(s => `
                <a
                  href="${s.social_link}"
                  target="_blank"
                  class="text-2xl text-black/60 hover:text-rose-600 hover:scale-110 transition-all"
                >
                  <i class="fa-brands ${s.social_icon}"></i>
                </a>
              `).join("")}
            </div>
          </button>
        </div>
      </div>
    </header>
  `;

  startRoleRotation();
  initDropdown();
}
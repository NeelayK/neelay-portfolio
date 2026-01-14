import { supabase } from "../supabase";

let page = 0;
const PAGE_SIZE = 4;
let totalCount = 0;

function renderMedia(url, title) {
  if (!url) return "";
  const isYoutube = url.includes("youtube.com") || url.includes("youtu.be");
  const isDirectVideo = url.endsWith(".mp4") || url.endsWith(".webm");

  if (isYoutube) {
    const videoId = url.split('v=')[1]?.split('&')[0] || url.split('/').pop();
    return `
      <div class="aspect-video w-full overflow-hidden rounded-2xl shadow-rose-900/10 shadow-2xl">
        <iframe src="https://www.youtube.com/embed/${videoId}" class="w-full h-full" frameborder="0" allowfullscreen></iframe>
      </div>`;
  }
  if (isDirectVideo) {
    return `
      <div class="aspect-video w-full overflow-hidden rounded-2xl bg-rose-50 shadow-2xl">
        <video src="${url}" autoplay loop muted playsinline class="w-full h-full object-cover"></video>
      </div>`;
  }
  return `
    <div class="w-full overflow-hidden rounded-2xl bg-rose-50 shadow-2xl group">
      <img src="${url}" alt="${title}" class="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" />
    </div>`;
}

export async function renderFeatured() {
  const { data, count, error } = await supabase
    .from("projects_table")
    .select("*", { count: "exact" }) 
    .order("featured", { ascending: false })
    .order("date", { ascending: false })
    .range(page * PAGE_SIZE, page * PAGE_SIZE + PAGE_SIZE - 1);

  if (error) return console.error(error);
  
  totalCount = count;
  const el = document.getElementById("featured");
  el.classList.add('opacity-0');

  setTimeout(() => {
    const isLastPage = (page + 1) * PAGE_SIZE >= totalCount;

    el.innerHTML = `
      <section class="space-y-40 py-24">
        ${data.map((p, index) => {
          const isEven = index % 2 === 0;
          const hasMedia = !!p.media;

          return `
            <div class="reveal-project flex flex-col md:flex-row gap-16 items-center 
                        ${!hasMedia ? "text-center justify-center" : isEven ? "" : "md:flex-row-reverse"}">
              
              ${hasMedia ? `<div class="w-full md:w-1/2 overflow-hidden">${renderMedia(p.media, p.title)}</div>` : ""}
              
              <div class="w-full ${hasMedia ? "md:w-1/2" : "max-w-3xl"} px-4">
                <div class="flex items-center gap-4 mb-6 ${!hasMedia ? "justify-center" : ""}">
                   ${p.featured ? `<span class="px-4 py-1.5 bg-rose-600 text-[10px] uppercase tracking-[0.2em] text-white font-bold rounded-full shadow-lg shadow-rose-500/20">Featured</span>` : ""}
                   <span class="text-[10px] uppercase tracking-[0.3em] text-rose-600/40 font-bold">${new Date(p.date).getFullYear()}</span>
                </div>

                <h2 class="text-4xl md:text-6xl font-light tracking-tighter text-black mb-8 leading-tight">${p.title}</h2>
                <p class="text-xl text-black/60 leading-relaxed mb-10 font-light">${p.description}</p>
                
                ${p.link ? `
                  <a href="${p.link}" target="_blank" class="inline-flex items-center group gap-4 text-xs font-bold uppercase tracking-[0.3em] text-rose-600">
                    <span class="border-b-2 border-rose-600/20 group-hover:border-rose-600 transition-all pb-1">Learn More</span>
                    <svg class="w-5 h-5 transition-transform group-hover:translate-x-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M17 8l4 4m0 0l-4 4m4-4H3"/>
                    </svg>
                  </a>
                ` : ""}
              </div>
            </div>
          `;
        }).join("")}

        <div class="flex items-center justify-center gap-16 pt-24 border-t border-rose-100">
          <button onclick="window.prevProjects()" 
                  class="group p-6 border border-rose-100 rounded-full transition-all hover:bg-rose-600 hover:text-white ${page === 0 ? 'opacity-10 pointer-events-none' : ''}">
            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M15 19l-7-7 7-7"/></svg>
          </button>
          
          <div class="flex flex-col items-center gap-2">
            <span class="text-[10px] uppercase tracking-[0.4em] font-bold text-rose-600/40">Archive</span>
            <span class="text-sm font-mono font-bold text-rose-600">${page + 1} / ${Math.ceil(totalCount / PAGE_SIZE)}</span>
          </div>
          
          <button onclick="window.nextProjects()" 
                  class="group p-6 border border-rose-100 rounded-full transition-all hover:bg-rose-600 hover:text-white ${isLastPage ? 'opacity-10 pointer-events-none' : ''}">
            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9 5l7 7-7 7"/></svg>
          </button>
        </div>
      </section>
    `;
    
    el.classList.remove('opacity-0');
  }, 300);
}

const scrollToSection = () => {
  const section = document.getElementById("featured");
  if (section) section.scrollIntoView({ behavior: 'smooth', block: 'start' });
};

window.nextProjects = () => {
  if ((page + 1) * PAGE_SIZE < totalCount) {
    page++;
    renderFeatured();
    scrollToSection();
  }
};

window.prevProjects = () => {
  if (page > 0) {
    page--;
    renderFeatured();
    scrollToSection();
  }
};
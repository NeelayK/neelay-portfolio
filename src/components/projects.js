import { supabase } from "../supabase";

export async function renderProjects() {
  const { data, error } = await supabase
    .from("artwork")
    .select("*")
    .order("row_id", { ascending: true });

  if (error || !data) return console.error(error);

  const rows = [1, 2, 3].map(id => data.filter(item => item.row_id === id));

  document.getElementById("projects").innerHTML = `
    <section class="py-32 overflow-hidden" id="artwork-section">
      <div class="max-w-[94vw] mx-auto mb-16 px-4">
        <h2 class="text-xs uppercase tracking-[0.4em] font-bold text-rose-600 mb-4">Creative Archive</h2>
        <h3 class="text-4xl md:text-6xl font-light tracking-tighter text-black">Visual <span class="italic font-serif text-rose-600">Explorations</span></h3>
      </div>

      <div class="space-y-8 reveal-archive mb-40">
        ${rows.map((row, index) => `
          <div class="art-row border-y border-rose-100/30 py-6 bg-rose-50/10" data-row="${index}">
            <div class="art-track">
              ${[...row, ...row].map(item => `
                <div class="art-item group relative">
                  <img src="${item.image_link}" alt="" loading="lazy" class="transition-transform duration-1000 group-hover:scale-110" />
                </div>
              `).join("")}
            </div>
          </div>
        `).join("")}
      </div>

      <div class="max-w-[94vw] mx-auto px-4 reveal-instagram">
        <div class="flex flex-col md:flex-row md:items-end justify-between mb-12 border-b border-rose-100 pb-12 gap-6">
           <div>
             <h4 class="text-4xl font-light tracking-tight text-black"><span class="italic font-serif">Social</span> Feed</h4>
             <p class="text-rose-600 text-sm mt-2 font-mono uppercase tracking-widest">@nawt_nile</p>
           </div>
           <a href="https://instagram.com/nawt_nile" target="_blank" class="inline-block text-xs font-bold uppercase tracking-[0.2em] bg-black text-white px-8 py-4 rounded-full hover:bg-rose-600 transition-all shadow-xl shadow-rose-900/10">
             Follow on Instagram
           </a>
        </div>
        
        <div id="instagram-feed" class="rounded-[2rem] overflow-hidden bg-rose-50/30 p-4 md:p-8">
            <div data-behold-id="hBxAvjSIh9fQKmApG9So"></div>
        </div>
      </div>
    </section>
  `;

  if (!document.querySelector('script[src*="behold.so"]')) {
    const s = document.createElement("script");
    s.type = "module";
    s.src = "https://w.behold.so/widget.js";
    document.head.append(s);
  }
}
import { supabase } from "../supabase";

export async function renderAbout() {
  const { data } = await supabase.from("skill_table").select("*");

  document.getElementById("about").innerHTML = `
    <section class="py-32 opacity-0 translate-y-8 transition-all duration-1000 ease-out" id="about-content">
      <div class="max-w-[94vw] mx-auto flex flex-row gap-16 items-center">
        
        <div class="relative group">
          <div class="aspect-square rounded-full overflow-hidden border border-black/5 shadow-l transition-transform duration-500 group-hover:scale-105">
            <img 
              src="https://i.postimg.cc/7LryY8w1/Whats-App-Image-2025-06-06-at-13-25-27-d0072ab9.jpg" 
              alt="Profile" 
              class="w-full h-full object-cover"
            />
          </div>
        </div>

        <div class="md:col-span-3 space-y-8">
          <div class="space-y-4">
            <h2 class="text-xs uppercase tracking-[0.4em] font-bold text-rose-600">About Me</h2>
            <h3 class="text-4xl md:text-6xl font-light tracking-tight text-black leading-tight">
              Designing the intersection of <span class="italic font-serif">Perception, Robotics</span> and <span class="italic font-serif">Machine Learning</span>.
            </h3>
          </div>
          
<div class="max-w-2xl space-y-6"> <p class="text-lg text-black/70 leading-relaxed"> I am a student at <span class="text-black font-medium">IISER Thiruvananthapuram</span>, where my primary focus is the frontier of <span class="font-bold text-black">2D-to-3D perception and machine learning</span>. I am driven by the challenge of enabling machines to "see" and reconstruct the physical world with high spatial fidelity. </p>

<p class="text-lg text-black/70 leading-relaxed"> I leverage <span class="font-medium text-black">3D dataset generation in Blender</span> and my expertise in <span class="font-medium text-black">manifold geometry</span> as the data foundation for these models. My goal is to deploy these reconstruction techniques into <span class="italic text-black">real-world medical and industrial systems</span>, moving beyond simulation into tactile, 3D-aware reality. </p>

<p class="text-lg text-black/70 leading-relaxed"> My extensive background in <span class="italic text-black">robotics, hardware integration, and full-stack development</span> (Supabase, Flutter) serves as the supporting architecture to deploy these 3D ML models. I view these engineering skills as the essential <span class="font-medium text-black">delivery vehicle</span> for bringing advanced spatial perception into complex, physical environments. </p> </div>

          <div class="pt-8">
            <h4 class="text-[10px] uppercase tracking-[0.3em] font-bold text-black/40 mb-6">Technical Expertise</h4>
            <div class="flex flex-wrap gap-3">
              ${data.map(s => `
                <div class="relative group">
                  <span class="inline-block px-5 py-2.5 text-xs font-medium tracking-wide border border-black/10 rounded-full transition-all duration-300 
                    ${s.highlight 
                      ? "bg-black text-white border-black shadow-lg shadow-black/20" 
                      : "bg-white text-black/70 hover:border-black hover:text-black"}">
                    ${s.skill_name}
                  </span>
                  ${s.highlight ? `
                    <span class="absolute -top-1 -right-1 flex h-3 w-3">
                      <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-rose-400 opacity-75"></span>
                      <span class="relative inline-flex rounded-full h-3 w-3 bg-rose-500"></span>
                    </span>
                  ` : ""}
                </div>
              `).join("")}
            </div>
          </div>
        </div>
      </div>
    </section>
  `;

  // Trigger reveal animation
  setTimeout(() => {
    const section = document.getElementById("about-content");
    section.classList.remove("opacity-0", "translate-y-8");
  }, 100);
}

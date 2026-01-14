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
              Designing the intersection of <span class="italic font-serif">Robotics</span> and <span class="italic font-serif">Machine Learning</span>.
            </h3>
          </div>

<div class="max-w-2xl space-y-6">
  <p class="text-lg text-black/70 leading-relaxed">
    I am a student at <span class="text-black font-medium">IISER Thiruvananthapuram</span>, focused on building
    <span class="italic text-black">intelligent robotic systems</span> from the ground up. My work centers on
    designing robots that integrate <span class="font-medium text-black">hardware, perception, control, and learning</span>
    into cohesive, real-world systems.
  </p>

  <p class="text-lg text-black/70 leading-relaxed">
    I have worked on projects ranging from <span class="italic text-black">CNN-based facial recognition and distributed learning systems</span>
    to <span class="italic text-black">autonomous agricultural rovers</span>, where I design both the
    <span class="font-medium text-black">physical architecture</span> and the <span class="font-medium text-black">software stack</span>.
    My experience spans <span class="italic text-black">low-level hardware integration</span> with Arduino and Raspberry Pi,
    sensor and system design, and simulation-driven development for scalable robotic solutions.
  </p>

  <p class="text-lg text-black/70 leading-relaxed">
    Alongside robotics, I build the supporting software that enables these systems—using
    <span class="font-medium text-black">modern full-stack tools</span> like Supabase,
    <span class="font-medium text-black">Flutter</span> for mobile interfaces, and custom dashboards for monitoring,
    control, and data analysis. I approach robotics as a
    <span class="italic text-black">multidisciplinary field</span>, combining engineering, computation, and design to
    <span class="font-medium text-black">bridge software and the physical world</span>.
  </p>
</div>


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
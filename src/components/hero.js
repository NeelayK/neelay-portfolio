export function renderHero() {
  document.getElementById("hero").innerHTML = `
    <section class="min-h-[120vh] flex flex-col justify-center relative overflow-hidden px-6" id="hero-section">
      

      <div class="max-w-[94vw] mx-auto w-full sticky top-32">
        
        <div class="reveal-container overflow-hidden">
          <h1 class="hero-title font-['Archivo_Black'] text-[15vw] md:text-[11vw] leading-[0.85] tracking-tighter uppercase text-black">
            NEELAY<br/>
            <span class="text-rose-600 transition-colors duration-500 hover:text-rose-400">KAMAT</span>
          </h1>
        </div>

        <div class="flex items-center gap-4 my-10 reveal-item-1">
          <div class="w-12 h-[1px] bg-rose-600/30"></div>
          <span class="text-[10px] uppercase tracking-[0.5em] font-bold text-rose-600/60">Researcher • Developer • Designer</span>
          <div class="flex-grow h-[1px] bg-black/5"></div>
        </div>

        <div class="max-w-3xl reveal-item-2">
          <p class="text-xl md:text-2xl font-light leading-relaxed text-black/80 tracking-tight">
            Engineering the next generation of <span class="italic font-serif">intelligent systems</span>. 
            Specializing in distributed machine learning and robotics 
            at <span class="font-medium underline decoration-rose-500/30 underline-offset-8">VGNet Lab, IISER TVM</span>.
          </p>
        </div>

        <div class="mt-16 flex flex-wrap gap-4 reveal-item-3">
          <a href="#featured" class="group relative px-10 py-4 pt-3 overflow-hidden border border-rose-600 rounded-full transition-all duration-500 hover:text-white">
            <span class="relative z-10 text-xs font-bold uppercase tracking-widest">Selected Work</span>
            <div class="absolute inset-0 bg-rose-600 translate-y-full transition-transform duration-500 group-hover:translate-y-0"></div>
          </a>
          
           <a href="#about" class="group relative px-10 py-4 pt-3 overflow-hidden border border-rose-600 rounded-full transition-all duration-500 hover:text-white">
            <span class="relative z-10 text-xs font-bold uppercase tracking-widest">About Me</span>
            <div class="absolute inset-0 bg-rose-600 translate-y-full transition-transform duration-500 group-hover:translate-y-0"></div>
          </a>
        </  div>
      </div>

      <div class="absolute bottom--10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4 opacity-40 animate-bounce-slow">
        <span class="text-[8px] uppercase tracking-[0.4em] font-bold rotate-90 mb-4 text-rose-600">Scroll</span>
        <div class="w-[1px] h-12 bg-rose-600/40"></div>
      </div>
    </section>
  `;
}
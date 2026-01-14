import { supabase } from "../supabase";

export async function renderFooter() {
  const { data } = await supabase.from("menu").select("*");

  document.getElementById("footer").innerHTML = `
    <footer class="mt-32 pt-16 pb-10 border-t border-black/10">
      <div class="max-w-7xl mx-auto px-6 grid gap-12 md:grid-cols-3">

        <!-- Left: Name -->
        <div class="space-y-2">
          <p class="text-lg font-medium">Neelay Kamat</p>
          <p class="text-sm text-black/60">
            Robotics • Systems • Design
          </p>
        </div>

        <!-- Center: Certifications & Education -->
        <div class="space-y-6 text-sm text-black/70">
          <div>
            <p class="font-medium text-black mb-2">Certifications</p>
            <ul class="space-y-1">
              <li>Google Data Analytics Certificate <span class="text-black/50">— Jul 2024</span></li>
              <li>Business Analyst Program, Finlatics <span class="text-black/50">— May–Jun 2024</span></li>
              <li>JLPT N5 Certification <span class="text-black/50">— IIT Kanpur</span></li>
            </ul>
          </div>

          <div>
            <p class="font-medium text-black">BS–MS in Data Science</p>
            <p>IISER Thiruvananthapuram</p>
            <p class="text-black/50">Sept 2023 – June 2028</p>
          </div>
        </div>

        <!-- Right: Socials -->
        <div class="flex md:justify-end items-start gap-6">
          ${data.map(s => `
            <a
              href="${s.social_link}"
              target="_blank"
              class="text-xl text-black/70 hover:text-black transition"
              aria-label="${s.social_name}"
            >
              <i class="fa-brands ${s.social_icon}"></i>
            </a>
          `).join("")}
        </div>

      </div>

      <div class="mt-12 text-center text-xs text-black/40">
        © ${new Date().getFullYear()} Neelay Kamat
      </div>
    </footer>
  `;
}

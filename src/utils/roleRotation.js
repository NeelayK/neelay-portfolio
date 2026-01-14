import { supabase } from "../supabase.js";

let index = 0;
let roles = [];

export async function startRoleRotation() {
  const el = document.getElementById("role-rotator");
  if (!el) return;

  const { data, error } = await supabase
    .from("role_rotation")
    .select("text");

  if (error || !data.length) return;

  roles = data.map(r => r.text);
  el.textContent = roles[0];

  setInterval(() => {
    el.classList.add("opacity-0");

    setTimeout(() => {
      index = (index + 1) % roles.length;
      el.textContent = roles[index];
      el.classList.remove("opacity-0");
    }, 300);
  }, 2500);
}

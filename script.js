const COUNTDOWN_DURATION = 10 * 60 * 1000;
const countdownKey = "powerPetCountdownEndsAt";

const getCountdownEnd = () => {
  const saved = Number(sessionStorage.getItem(countdownKey));
  if (saved && saved > Date.now()) return saved;

  const nextEnd = Date.now() + COUNTDOWN_DURATION;
  sessionStorage.setItem(countdownKey, String(nextEnd));
  return nextEnd;
};

const countdownEnd = getCountdownEnd();
const countdownNodes = document.querySelectorAll("[data-countdown]");

const updateCountdown = () => {
  const remaining = Math.max(0, countdownEnd - Date.now());
  const minutes = Math.floor(remaining / 60000);
  const seconds = Math.floor((remaining % 60000) / 1000);
  const label = `${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`;

  countdownNodes.forEach((node) => {
    node.textContent = remaining > 0 ? label : "00:00";
  });
};

updateCountdown();
setInterval(updateCountdown, 1000);

const socialProof = document.querySelector("[data-social-proof]");
const socialProofText = document.querySelector("[data-social-proof-text]");

const socialEvents = [
  "Mariana Souza acaba de acceder a la oferta.",
  "Carlos Henrique está viendo el Manual Power Pet ahora.",
  "Fernanda Lima inició el pago hace pocos segundos.",
  "Rafael Martins entró en la página del manual.",
  "Juliana Alves está revisando las recetas para mascotas.",
  "Patricia Gomes volvió para finalizar el acceso.",
  "Bruno Oliveira abrió la oferta del Manual Power Pet.",
  "Aline Rocha está analizando el contenido digital."
];

let socialIndex = 0;

const showSocialProof = () => {
  if (!socialProof || !socialProofText) return;

  socialProofText.textContent = socialEvents[socialIndex % socialEvents.length];
  socialIndex += 1;
  socialProof.hidden = false;
  socialProof.classList.add("is-visible");

  window.setTimeout(() => {
    socialProof.classList.remove("is-visible");
    window.setTimeout(() => {
      socialProof.hidden = true;
    }, 260);
  }, 5200);
};

window.setTimeout(showSocialProof, 2200);
window.setInterval(showSocialProof, 11500);

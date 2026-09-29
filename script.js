document.getElementById("year").textContent = new Date().getFullYear();

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("is-visible");
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });

document.querySelectorAll(".reveal").forEach((el) => observer.observe(el));

document.querySelectorAll('a[href^="#"]').forEach((link) => {
  link.addEventListener("click", (event) => {
    if (link.getAttribute("href") === "#top") {
      event.preventDefault();
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }
    const target = document.querySelector(link.getAttribute("href"));
    if (!target) return;
    event.preventDefault();
    target.scrollIntoView({ behavior: "smooth", block: "start" });
  });
});

// On smaller screens, show one floating call link only when needed.
const floatingCall = document.querySelector(".sticky-call");
const siteHeader = document.querySelector(".site-header");
const inlineCalls = [...document.querySelectorAll('main a[href^="tel:"]')];
const mobileLayout = window.matchMedia("(max-width: 940px)");
let callUpdatePending = false;

function updateFloatingCall() {
  callUpdatePending = false;
  const headerBottom = siteHeader.getBoundingClientRect().bottom;
  const hasVisibleCall = mobileLayout.matches && inlineCalls.some((link) => {
    const rect = link.getBoundingClientRect();
    const reveal = link.closest(".reveal");
    if (reveal && !reveal.classList.contains("is-visible")) return false;
    const visibleHeight = Math.min(rect.bottom, window.innerHeight) - Math.max(rect.top, headerBottom, 0);
    return rect.width > 0 && visibleHeight >= Math.min(16, rect.height)
      && rect.height > 0 && rect.right > 0 && rect.left < window.innerWidth;
  });
  floatingCall.classList.toggle("is-context-hidden", hasVisibleCall);
  floatingCall.inert = hasVisibleCall;
  if (hasVisibleCall) floatingCall.setAttribute("aria-hidden", "true");
  else floatingCall.removeAttribute("aria-hidden");
}

function scheduleCallUpdate() {
  if (callUpdatePending) return;
  callUpdatePending = true;
  window.requestAnimationFrame(updateFloatingCall);
}

window.addEventListener("scroll", scheduleCallUpdate, { passive: true });
window.addEventListener("resize", scheduleCallUpdate);
window.addEventListener("load", scheduleCallUpdate);
document.addEventListener("transitionend", scheduleCallUpdate);
mobileLayout.addEventListener("change", scheduleCallUpdate);
updateFloatingCall();

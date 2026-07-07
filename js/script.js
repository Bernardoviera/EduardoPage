(function () {
  "use strict";

  var prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  // Reveal-on-scroll for elements marked with [data-reveal].
  // Content is visible by default in the CSS; only opt into the animated
  // "pending" state here, so no-JS or slow-JS visitors always see full content.
  var revealTargets = document.querySelectorAll("[data-reveal]");
  if (revealTargets.length && "IntersectionObserver" in window && !prefersReducedMotion) {
    var observer = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15 }
    );
    revealTargets.forEach(function (el) {
      el.classList.add("reveal-pending");
      observer.observe(el);
    });
  }

  // Click-to-play video players.
  // A card opts in with either:
  //   data-video="path/to/file.mp4"   -> self-hosted native <video>
  //   data-embed="<youtube-id>"        -> YouTube iframe
  // The existing overlay (play button + label) is replaced by the player.
  function buildPlayer(card) {
    var wrap = document.createElement("div");
    wrap.className = "media-player";

    if (card.dataset.video) {
      var video = document.createElement("video");
      video.src = card.dataset.video;
      video.controls = true;
      video.autoplay = true;
      video.playsInline = true;
      video.setAttribute("playsinline", "");
      wrap.appendChild(video);
      // Try to start playback; ignore promise rejection (autoplay policies).
      var p = video.play();
      if (p && typeof p.catch === "function") p.catch(function () {});
    } else if (card.dataset.embed) {
      var iframe = document.createElement("iframe");
      iframe.src =
        "https://www.youtube-nocookie.com/embed/" +
        encodeURIComponent(card.dataset.embed) +
        "?autoplay=1&rel=0&modestbranding=1";
      iframe.title = card.getAttribute("aria-label") || "Vídeo";
      iframe.allow =
        "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture";
      iframe.setAttribute("allowfullscreen", "");
      iframe.loading = "lazy";
      wrap.appendChild(iframe);
    }
    return wrap;
  }

  document.querySelectorAll(".play-btn").forEach(function (btn) {
    var card = btn.closest("[data-video], [data-embed]");
    if (!card) return; // no source wired yet -> button stays inert
    btn.addEventListener("click", function () {
      var overlay = card.querySelector(
        ".testimonial-card__overlay, .video-card__label"
      );
      var player = buildPlayer(card);
      if (overlay) {
        overlay.replaceWith(player);
      } else {
        card.appendChild(player);
      }
    });
  });

  // Only one FAQ item open at a time
  var faqItems = document.querySelectorAll(".faq-item");
  faqItems.forEach(function (item) {
    item.addEventListener("toggle", function () {
      if (item.open) {
        faqItems.forEach(function (other) {
          if (other !== item) other.open = false;
        });
      }
    });
  });
})();

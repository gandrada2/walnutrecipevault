
// This is not a Javascript course but I could not build a modern website without JS - please take 
// the course CPSC 1520 Client-Side Scripting with JavaScript for a solid understanding of what
// is going on bellow. :)

// cookie-consent.js
// Functional Cookie Notice Script — Privacy-Compliant Version

document.addEventListener("DOMContentLoaded", () => {
  const popUp = document.getElementById("cookiePopup");
  const acceptBtn = document.getElementById("acceptCookie");
  const declineBtn = document.getElementById("declineCookie");

  // Function to create a cookie
  function setCookie(name, value, days) {
    const date = new Date();
    date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
    const expires = "expires=" + date.toUTCString();
    document.cookie = `${name}=${value}; ${expires}; path=/`;
  }

  // Function to get a cookie by name
  function getCookie(name) {
    const decodedCookie = decodeURIComponent(document.cookie);
    const cookies = decodedCookie.split(";");
    for (let cookie of cookies) {
      cookie = cookie.trim();
      if (cookie.startsWith(name + "=")) {
        return cookie.substring(name.length + 1);
      }
    }
    return "";
  }

  // Function to check if consent was already given or declined
  function checkCookieConsent() {
    const consent = getCookie("userCookieConsent");
    if (consent === "accepted" || consent === "declined") {
      popUp.classList.add("hide");
      popUp.classList.remove("show");
    } else {
      popUp.classList.add("show");
      popUp.classList.remove("hide");
    }
  }

  // Accept cookies
  acceptBtn.addEventListener("click", () => {
    setCookie("userCookieConsent", "accepted", 30); // valid for 30 days
    popUp.classList.add("hide");
    popUp.classList.remove("show");
  });

  // Decline cookies
  declineBtn.addEventListener("click", () => {
    setCookie("userCookieConsent", "declined", 30);
    popUp.classList.add("hide");
    popUp.classList.remove("show");
  });

  // Show popup after short delay on page load
  setTimeout(() => {
    checkCookieConsent();
  }, 1500);
});

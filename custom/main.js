// custom/main.js

// Core functions
function add(a, b) {
  return a + b;
}

function getAppVersion() {
  return "1.0.0";
}

// ✅ Make them available for Jest / Node (require)
if (typeof module !== "undefined" && module.exports) {
  module.exports = { add, getAppVersion };
}

// ✅ Make them available in the browser console (global)
if (typeof window !== "undefined") {
  window.add = add;
  window.getAppVersion = getAppVersion;
}

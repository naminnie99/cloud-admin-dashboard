// custom/main.js

// Simple function for testing
function add(a, b) {
  return a + b;
}

// Example helper that returns version
function getAppVersion() {
  return "1.0.0";
}

// Export functions so Node can import them in tests
if (typeof module !== "undefined") {
  module.exports = { add, getAppVersion };
}

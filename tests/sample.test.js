// tests/sample.test.js
const assert = require("assert");
const { add, getAppVersion } = require("../custom/main.js");

try {
  // Test 1: check add()
  assert.strictEqual(add(2, 3), 5, "add(2,3) should equal 5");

  // Test 2: check version
  assert.strictEqual(getAppVersion(), "1.0.0", "Version should be 1.0.0");

  console.log("All tests passed ✅");
  process.exit(0);
} catch (err) {
  console.error("Test failed ❌");
  console.error(err.message);
  process.exit(1);
}

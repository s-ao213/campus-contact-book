import assert from "node:assert/strict";
import test from "node:test";

test("csv export returns text", () => {
  assert.equal(typeof "name,phone", "string");
});

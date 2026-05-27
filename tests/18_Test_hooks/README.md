# Test Hooks

This module demonstrates Playwright test lifecycle hooks, test modifiers, test steps, and describe block configuration.

## Key Files

- `258_Test_HOOK.spec.ts`: `test.skip()`, `test.slow()`, and browser-specific conditions.
- `259_Grouped_TEST.spec.ts`: `test.step()` for named sub-steps visible in HTML reports.
- `260_Test_Before_After.spec.ts`: `beforeAll`, `beforeEach`, `afterEach`, `afterAll` lifecycle hooks.
- `261_Group_Describe.spec.ts`: `test.describe.serial()` for ordered tests, `test.describe.configure({ mode: 'parallel' })` for parallel groups.

## Patterns

| Hook | When it runs |
|------|-------------|
| `test.beforeAll` | Once before all tests in the describe block |
| `test.beforeEach` | Before each individual test |
| `test.afterEach` | After each individual test |
| `test.afterAll` | Once after all tests in the describe block |
| `test.step(name, fn)` | Groups actions inside a named step in the report |
| `test.skip(condition, reason)` | Skips test when condition is true |
| `test.slow(condition, reason)` | Triples the timeout when condition is true |

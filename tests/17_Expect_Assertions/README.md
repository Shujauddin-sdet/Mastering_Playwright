# Expect Assertions

This module covers the full range of Playwright's `expect()` API for both value-level and locator-level assertions.

## Key Files

- `256_Expect.spec.ts`: value assertions (`toBe`, `toEqual`, `toBeFalsy`, etc.) and locator assertions (`toBeVisible`, `toHaveText`, `toHaveCount`, soft assertions).
- `257_URL_Asserations.spec.ts`: page-level assertions (`toHaveTitle`, `toHaveURL`), network response assertions.
- `Expect_Assertions_Cheatsheet.md`: quick reference for all assertion types.
- `More_Expect_Examples.md`: extended examples and patterns.

## Common Assertion Methods

| Category | Method |
|----------|--------|
| Value | `toBe`, `toEqual`, `toBeTruthy`, `toBeFalsy`, `toBeNull`, `toBeGreaterThan` |
| Locator | `toBeVisible`, `toBeHidden`, `toBeEnabled`, `toBeDisabled`, `toBeEditable` |
| Text | `toHaveText`, `toContainText`, `toHaveValue` |
| Count | `toHaveCount` |
| Page | `toHaveTitle`, `toHaveURL` |
| Soft | `expect.soft(locator).toBeVisible()` — continues test on failure |

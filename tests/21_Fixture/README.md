# Module 21: Fixtures

This module covers Playwright custom fixtures using `test.extend()`.

## Overview

Fixtures are a powerful alternative to `beforeEach` hooks. They let you:
- Define reusable setup/teardown logic
- Compose multiple fixtures together
- Scope fixtures to a single test or an entire worker

## Planned Content

- `272_Fixture_Placeholder.spec.ts`: placeholder for upcoming fixture lessons.

## Custom Fixture Pattern

```typescript
import { test as base } from '@playwright/test';

const test = base.extend({
    loggedInPage: async ({ page }, use) => {
        await page.goto('/login');
        await page.fill('#email', 'user@test.com');
        await page.fill('#password', 'secret');
        await page.click('#submit');
        await use(page); // <-- hand control to the test
        // teardown runs after use()
    },
});

test('uses logged-in fixture', async ({ loggedInPage }) => {
    await loggedInPage.goto('/dashboard');
});
```

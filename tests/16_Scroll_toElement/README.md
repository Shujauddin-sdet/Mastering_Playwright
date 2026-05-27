# Scroll to Element

This module demonstrates various scrolling strategies in Playwright.

## Key Files

- `255_ScrollToView.spec.ts`: covers four scroll strategies on the Testing Academy scroll widget page.

## Scroll Patterns

```typescript
// 1. Let Playwright handle it automatically
await locator.scrollIntoViewIfNeeded();

// 2. Scroll the window by pixel amount
await page.evaluate(() => window.scrollBy(0, 1000));

// 3. Scroll to bottom of page
await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight));

// 4. Scroll to a specific element smoothly
await page.evaluate(() => {
    document.querySelector('.target')?.scrollIntoView({ behavior: 'smooth' });
});
```

Note: `locator.click()` and most Playwright actions automatically scroll the element into view before interacting.

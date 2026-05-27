# Module 12: Handle SVG

This module shows how to locate and interact with SVG elements in Playwright tests. It covers SVG roots, child shapes, chart bars, map paths, SVG text labels, attribute reads, clicks, and assertions after SVG interactions.

## Key Files

- `248_SVG_Project.spec.ts`: uses Flipkart search, clicks an SVG search icon, waits for product results, and prints matching product titles.
- `249_SVG_Practice.spec.ts`: uses the Testing Academy SVG widget page to click a circle, assert output text, click a chart bar, choose a star rating, and iterate SVG bars by attribute.
- `250_Advance_SVG_pROJECT.spec.ts`: uses SimpleMaps India SVG to read state labels and click the Uttar Pradesh path.

## SVG Locator Patterns

CSS selectors work for SVG nodes:
- `page.locator('svg')` — the SVG root
- `page.locator('circle')`, `page.locator('rect')`, `page.locator('path')` — child shapes
- `page.locator('[id="UP"]')` — locate by id attribute

XPath patterns (use `*[name()='tag']` for namespace safety):
- `//*[name()='svg']//*[name()='text']` — all text labels inside SVG
- `//*[contains(@class,'sm_label')]` — by class

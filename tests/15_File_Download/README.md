# File Download Module

This module demonstrates handling browser downloads with Playwright. The spec opens the Testing Academy upload/download widget, waits for a `download` event, clicks the static download control, and saves the downloaded file using Playwright's suggested filename.

## Files

- `254_File_Downlaod.spec.ts`: lesson spec for file download using `page.waitForEvent('download')`.
- `downloads/`: directory where downloaded files are saved during tests.

## Key Pattern

```typescript
const [download] = await Promise.all([
    page.waitForEvent('download'),
    page.locator('[data-testid="download-btn"]').click(),
]);
const path = await download.path();
await download.saveAs('./downloads/' + download.suggestedFilename());
```

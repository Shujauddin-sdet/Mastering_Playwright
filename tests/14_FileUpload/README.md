# Module 14: File Upload

This module covers Playwright file upload handling with `locator().setInputFiles()`.
It includes examples for uploading a local fixture from disk and creating upload
payloads directly in the test with buffers.

## Key Files and Assets

- `252_FileUpload.spec.ts`: Uploads `testdata.txt` to the Internet Herokuapp upload page, submits the form, and asserts the uploaded filename.
- `253_Multi_FileUpload.spec.ts`: Demonstrates multi-file upload by passing in-memory file objects with `name`, `mimeType`, and `buffer`.
- `testdata.txt`: Empty text fixture used by the single-file upload test.
- `file1.jpg` and `file2.jpg`: Local JPEG assets available for file upload practice or extending the multi-file test.

## Key API

```typescript
// Single file from disk
await page.locator('input[type="file"]').setInputFiles(path.join(__dirname, 'testdata.txt'));

// Multiple in-memory files
await page.locator('input[type="file"]').setInputFiles([
  { name: 'report.pdf', mimeType: 'application/pdf', buffer: Buffer.from('...') },
]);
```

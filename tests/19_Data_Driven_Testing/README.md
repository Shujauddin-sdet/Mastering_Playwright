# Module 19: Data-Driven Testing

This module covers reading test data from inline arrays, CSV files, JSON files, and generating realistic random data with Faker.js.

## Key Files

- `262_DDT_Simple.spec.ts`: inline array of login scenarios iterated with `for...of`.
- `263_DDT_CSV.spec.ts`: reads `login-data.csv` via `csvReader.ts` and runs a test per row.
- `264_DDT_CSV.spec.ts`: extends 263 with `beforeEach` / `afterEach` hooks.
- `265_DDT_JSON.spec.ts`: reads `registration-data.json` directly and iterates.
- `266_DDT_FakerJS.spec.ts`: uses `@faker-js/faker` to generate a single random user.
- `267_FakerJS2.spec.ts`: full registration with realistic Faker fields.
- `268_FakerJS3.spec.ts`: factory function `generateUser()` pattern.
- `269_DDT_FakerJS.spec.ts`: loop over 5 users with different email domains.
- `csvReader.ts`: shared utility to parse CSV files into typed objects.
- `login-data.csv`: login test data.
- `registration-data.json`: registration test data.

## Pattern

```typescript
for (const data of testDataArray) {
    test(`test with ${data.description}`, async ({ page }) => {
        // use data.field
    });
}
```

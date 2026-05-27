# Frame and Iframe Tests

This module covers Playwright patterns for working with HTML frames, iframes,
multiple frames, and nested iframe structures. The examples use `frameLocator()`
to scope actions and assertions inside the correct frame before interacting with
form fields, links, and text.

## Key Files

- `239_Iframe.spec.ts`: fills and submits a vehicle registration form inside a
  single iframe selected by `#frame-one`.
- `240_Multiple_frame.spec.ts`: opens a page with multiple named frames,
  inspects available `<frame>` elements, reads the main frame header, and clicks
  a registration link in the side frame.
- `241_Iframe_within_Iframe.spec.ts`: demonstrates chained frame locators for
  nested iframes on the SelectorsHub iframe scenario page.

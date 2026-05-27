# JS Alerts

This module covers handling browser JavaScript dialogs in Playwright:

- Alert dialogs with `dialog.accept()`
- Confirm dialogs with `dialog.accept()` and result assertions
- Prompt dialogs with `dialog.accept(value)` and submitted text assertions

## Key Files

- `243_JS_Alerts.spec.ts`: Exercises alert, confirm, and prompt dialogs on `https://the-internet.herokuapp.com/javascript_alerts`.

## Dialog Patterns

- Register `page.once('dialog', handler)` before triggering the dialog-causing action.
- Use `dialog.type()` to inspect the dialog type (`alert`, `confirm`, `prompt`).
- Use `dialog.message()` to read the dialog text.
- Use `dialog.accept()` or `dialog.dismiss()` to close it.
- For prompts, pass a value to `dialog.accept('your text')`.

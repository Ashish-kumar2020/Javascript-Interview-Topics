# 30 - Async vs Defer

When browser encounters a script tag, HTML parsing is stopped and script is downloaded and executed.

Normal Script

HTML Parsing Stops

Download Script

Execute Script

Continue HTML Parsing

## Async

```html
<script async src="app.js"></script>
```

HTML Parsing continues while script downloads.

Once download completes, parsing stops and script executes immediately.

Async scripts do not guarantee execution order.

Used when scripts are independent.

## Defer

```html
<script defer src="app.js"></script>
```

HTML Parsing continues while script downloads.

Execution happens only after complete HTML parsing.

Defer maintains script execution order.

Used when scripts depend on DOM.

Difference

Async

- Download Parallel
- Execute Immediately
- No Order Guarantee

Defer

- Download Parallel
- Execute After Parsing
- Order Maintained
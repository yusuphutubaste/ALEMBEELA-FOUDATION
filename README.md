# Alembeela Foundation

A responsive static community website for preserving Babembe heritage and community wisdom.

## Run locally

Open `index.html` directly, or serve the folder:

```sh
python3 -m http.server 8080
```

Visit `http://localhost:8080`.

## Files

- `index.html` — page structure
- `style.css` — custom styles
- `script.js` — interactions and local demo storage

The newsletter and wisdom submissions use browser `localStorage`. They are not sent to a server and are not suitable for production data collection. Connect a real form/backend service before public use.

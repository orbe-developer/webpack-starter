# webpack-starter

A Webpack 5 boilerplate for modern JavaScript projects. Includes production and development configurations, CSS extraction, Babel transpilation, asset copying, and a development server with hot reload.

**Stack:** Webpack 5 · Babel 7 · JavaScript ES6+ · CSS · HTML5

---

## Getting started

```bash
npm install
npm start        # development server with hot reload
npm run build    # production build → docs/
```

---

## What's included

- `webpack.config.js` — development config with dev server
- `webpack.prod.js` — production config with minification and CSS extraction
- `.babelrc` — Babel with `@babel/preset-env` and minification
- CSS extraction via `mini-css-extract-plugin`
- Static asset copying via `copy-webpack-plugin`
- HTML generation from template via `html-webpack-plugin`

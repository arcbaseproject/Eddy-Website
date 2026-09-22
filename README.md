# Eddy Website

The website for [Eddy Browser](https://github.com/arcbaseproject/Eddy), a lightweight Android browser. Built with [Astro](https://astro.build/).

## Run locally

Requires Node.js 22 or newer.

```sh
npm ci
npm run dev
```

Open the local URL printed by Astro. To make a production build, run `npm run build`; the output is in `dist/`.

## Content

The home page is in `src/pages/index.astro`. Privacy and terms pages render the Markdown files in `src/content/`. Images used by the site are in `src/assets/`; the social preview image is in `public/`.

The Android app, its releases, and its source code are in the [Eddy repository](https://github.com/arcbaseproject/Eddy).

## License

Licensed under the [Apache License 2.0](LICENSE).

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

The home page is in `src/pages/index.astro` and the features page in `src/pages/features.astro`. The changelog page (`src/pages/changelog.astro`) fetches the release notes from GitHub at build time, so rebuild after each release; set `GITHUB_TOKEN` if the build hits the API rate limit. The install page is a Markdown file in `src/pages/`, and the privacy and terms pages render the Markdown files in `src/content/`; these four use `src/layouts/Prose.astro`. Images used by the site are in `src/assets/`; the social preview image is in `public/`.

The Android app, its releases, and its source code are in the [Eddy repository](https://github.com/arcbaseproject/Eddy).

## License

Licensed under the [Apache License 2.0](LICENSE).

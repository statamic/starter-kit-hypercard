<!-- statamic:hide -->
<p align="center"><img src="https://statamic.com/assets/branding/squircle/statamic-mark-lime.svg" width="100" alt="Statamic Logo" /></p>

<h1 align="center">Statamic Starter Kit: HyperCard</h1>
<!-- /statamic:hide -->

A personal journal inspired by classic HyperCard stacks. Black-and-white cards, pixel-patterned backgrounds, and a place to write about your day.

## Features

- A simple journal with a chronological index and one entry per card.
- Your choice of [Markdown](https://statamic.dev/fieldtypes/markdown) or [Bard](https://statamic.dev/fieldtypes/bard), selected in each entry’s editor.
- Keyboard shortcuts for navigation: left and right arrows turn the cards.
- Customizable journal name, author, description, and illustrations.
- Headings, lists, quotes, tables, images, captions, and code blocks.
- Automatic grayscale treatment for images in your entries.
- Responsive layouts, with Antlers templates and a little [Alpine.js](https://alpinejs.dev) for interactions.
- Plain CSS and included frontend assets. No build step required.
- Sample entries in both formats, plus a kitchen-sink page to explore the styles.

<!-- statamic:hide -->
## Screenshots

| Journal index | Journal entry |
| --- | --- |
| ![HyperCard journal index](https://github.com/statamic/starter-kit-hypercard/raw/main/screenshot-index.jpg) | ![HyperCard journal entry](https://github.com/statamic/starter-kit-hypercard/raw/main/screenshot-entry.jpg) |
<!-- /statamic:hide -->

## Quick Start

### 1. Create a new site

Create a site with the [Statamic CLI](https://github.com/statamic/cli):

```sh
statamic new your-site statamic/starter-kit-hypercard
```

Or install into a fresh [Statamic site](https://statamic.dev/installation):

```sh
php please starter-kit:install statamic/starter-kit-hypercard --clear-site
```

This kit requires Statamic 6 and PHP 8.3+, and works with Statamic Core. The `--clear-site` option replaces existing site content, so start with a fresh installation.

### 2. Make a user

Follow the installer’s prompts to create a super user. You can also create one afterward:

```sh
php please make:user
```

### 3. Do your thing!

With [Laravel Herd](https://herd.laravel.com), your site should be available at `http://your-site.test`. Visit `/cp` to log in and start writing. All frontend assets are included, so there’s nothing to compile.

## Writing and Customization

- **Collections → Journal:** write an entry, choose its date, and select **Markdown** or **Rich content**. Each editor keeps its own draft when you switch; switching does not convert between formats.
- **Entry sidebar:** choose an illustration, use the site’s default, or hide it altogether. Both editors can upload and insert images from the Assets container.
- **Collections → Pages → Home:** edit the index heading and introduction.
- **Globals → Site:** change the journal name, author, description, and default illustration. “Ordinary Days” is the sample publication name.

Published entries appear newest first. Drafts and future-dated entries stay out of the index and card navigation.

To customize the design, edit `resources/views/` and `public/journal/styles.css`. Alpine enhancements live in `public/journal/journal.js`.

## Local Development

Keep the runnable Statamic application separate from this starter-kit repository. To install from a local checkout, run these commands in a fresh application:

```sh
composer config repositories.hypercard path /absolute/path/to/starter-kit-hypercard
php please starter-kit:install statamic/starter-kit-hypercard --local --clear-site
```

The repository’s root folders mirror the installed site. `starter-kit.yaml` lists the files included in an installation. When using the Statamic 6 exporter, export to a temporary directory and copy its generated `export/` contents into this repository root, with the package metadata alongside them.

## Contributing

Contributions are always welcome, no matter how large or small. Before contributing, please read the [code of conduct](https://github.com/statamic/cms/wiki/Code-of-Conduct).

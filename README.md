<!-- statamic:hide -->
# Statamic Starter Kit: HyperCard
<!-- /statamic:hide -->

A simple journal inspired by HyperCard. Black-and-white cards, a dithered backdrop, and a small stack of ordinary days. Write in Markdown or rich content, one entry at a time.

## Features

- A monochrome card stack with classic outlined buttons and a mountain illustration.
- Dated journal entries, a chronological index, and previous/next card navigation.
- A per-entry **Markdown / Rich content** editor choice, using Statamic’s native Markdown and Bard fields.
- Separate drafts for each editor. Switching formats preserves both; it does not automatically convert content.
- Styles for headings, nested lists, quotes, images, captions, tables, code, and long links.
- Editable journal name, author, description, index copy, and entry illustrations.
- Arrow-key navigation and scrollable wide tables, enhanced with Alpine.js.
- Server-rendered Antlers templates and plain CSS. No frontend build step.
- Markdown and Bard sample entries, plus a kitchen-sink content example.

## Quick start

Requires Statamic 6 and PHP 8.3 or newer. The kit works with Statamic Core.

Create a site with the [Statamic CLI](https://github.com/statamic/cli):

```sh
statamic new your-site statamic/starter-kit-hypercard
```

Or install into a fresh [Statamic site](https://statamic.dev/installation):

```sh
php please starter-kit:install statamic/starter-kit-hypercard --clear-site
```

The `--clear-site` option replaces existing site content. Use a fresh installation or back up your site first.

Follow the installer’s prompts to create a user, then visit `/cp` to start writing. You can also create a super user with:

```sh
php please make:user
```

All frontend assets are included. There is no npm install or build command to run.

### Installing from a local checkout

Register this checkout as a Composer path repository in a fresh Statamic application:

```sh
composer config repositories.hypercard path ~/Sites/starter-kit-hypercard
php please starter-kit:install statamic/starter-kit-hypercard --local --clear-site
```

## Writing and customization

**Collections → Journal:** create a dated entry and choose **Markdown** or **Rich content**. Only the selected editor is shown. Both field values are retained when you save; the public page renders the selected format. Bard includes headings, lists, links, images, tables, quotes, and code. Markdown also accepts inline HTML.

The entry sidebar has an optional illustration and a toggle to hide it. When no image is selected, the kit uses its mountain drawing. Both editors can browse and upload to the Assets container. Images in the journal body render in grayscale.

**Collections → Pages → Home:** edit the index heading and introduction.

**Globals → Journal settings:** edit the journal name, author, and description. “Ordinary Days” is the sample publication name; it is not hardcoded into the templates.

Entries appear newest first. Drafts and future-dated entries are excluded from the public index and card navigation. Normal links work without JavaScript; Alpine adds left/right arrow-key navigation and horizontally scrollable tables. The card stays anchored to the top, with no transition animation.

## Templates and styles

In an installed site:

- `resources/views/` contains the Antlers layout, entry and index templates, navigation partial, and 404 page.
- `resources/blueprints/collections/journal/entry.yaml` defines the conditional editors and entry settings.
- `app/ViewModels/Journal.php` supplies published entries, card numbers, and adjacent-card links.
- `public/journal/styles.css` contains the layout and prose styles.
- `public/journal/journal.js` contains the Alpine enhancements.
- `public/assets/` holds editable media.

The repository mirrors the installed site: `app/`, `config/`, `content/`, `public/`, and `resources/` live at the root, with the package metadata and `starter-kit.yaml`. The manifest lists the paths Statamic installs.

Develop in a separate Statamic application. When using the Statamic 6 exporter, export to a temporary directory, then copy the generated `export/` contents into this repository root and the package metadata alongside them. Exporting directly over this checkout would recreate the wrapper directory.

The package does not include application bootstrap files, `.env`, users, or credentials. Alpine.js 3.14.9 is bundled with its MIT license in `public/journal/ALPINE-LICENSE.md`.

## Contributing

Contributions are welcome. Please read the [code of conduct](https://github.com/statamic/cms/wiki/Code-of-Conduct) before contributing.

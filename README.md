# czay-ui

> **Under development.** czay-ui is in alpha: expect small breaking changes until 0.1 is final.

A calm, tonal design system for React, built on [Base UI](https://base-ui.com): tokens, accessible components and ready-made page blocks.

| | |
| --- | --- |
| [`packages/czay-ui`](packages/czay-ui) | the npm package `@czayelements/czay-ui` |
| [`docs`](docs) | the documentation site (a static export, published with GitHub Pages) |

```sh
pnpm install
pnpm dev:docs        # docs with live previews at http://localhost:3200
pnpm build           # build the package
pnpm typecheck
```

The package README has installation, usage and theming: [packages/czay-ui/README.md](packages/czay-ui/README.md).

## Publishing the docs

The workflow in `.github/workflows/pages.yml` builds the docs with `NEXT_PUBLIC_BASE_PATH=/zay-ui` and deploys them to GitHub Pages. Enable it once in the repository: Settings, Pages, Source: GitHub Actions.

## Contributing

Issues and pull requests are welcome. Keep code, comments and docs in English. A component is a `zay-` class in `packages/czay-ui/styles/components.css` plus a small React component; interactive ones wrap a Base UI part and style it through its data attributes.

## License

MIT

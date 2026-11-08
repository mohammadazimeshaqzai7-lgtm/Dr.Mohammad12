# Dr.Mohammad Azim — reviewed PWA build

## Installation
Upload all 8 files in this folder to the ROOT of the GitHub Pages repository. Do not upload the folder itself unless GitHub Pages is configured for that folder. Hard refresh the app after deployment; existing PWA installations may require closing and reopening.

## Structure
- `index.html`: UI styles and document shell
- `feeds.js`: feed database (original supplied data, **not independently validated**)
- `app.js`: app logic, calculations, translations and optimization
- `sw.js`: offline caching and versioning
- `manifest.webmanifest` and icons: installation metadata

## Changes
- Split the 172KB single-file HTML into database and application logic for easier maintenance.
- Validate restored local state and filter invalid ration entries.
- Prevent negative ration quantities/prices; sanitize displayed currency.
- Restrict cache interception to same-origin GET requests; navigation uses network-first.
- Added local icon link and a cache version bump.

## Important limitations
This is a defensive code-maintenance release, NOT a scientifically validated ration engine. No end-to-end browser tests or original NASEM table cross-check were performed. The optimizer uses soft penalties and may report a solution with unmet constraints; its results must not be treated as certified or safe for animal feeding without veterinary nutrition review. Original feed entries and equations are preserved, including potential inaccuracies.

## Adding features
1. Back up the repository and create a branch.
2. Add feed data to `feeds.js`, with documented source, units and quality flags.
3. Add new logic to `app.js` as a pure function and test against known inputs.
4. Add UI controls in the relevant renderer (`cow`, `ration`, `result`, `bank`).
5. Add translations in all three `L` language maps.
6. Increment `CACHE` version in `sw.js` for each release.
7. Verify desktop/mobile, offline/online, invalid inputs and existing saved state before merging.

## High-priority follow-up
- Separate numerical engine from UI; implement unit-tested simplex with feasibility/unbounded diagnostics.
- Replace missing nutrient values currently treated as zero with explicit unknown-data tracking.
- Verify the scientific validity of the `adj`, `calc`, `target`, `auto`, and `advise` formulas.
- Eliminate global inline event handlers and build DOM nodes safely rather than via HTML strings.
- Add data export/import, migrations and reproducible test fixtures.

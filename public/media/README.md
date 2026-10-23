Drop photos and videos here, then reference them by path (e.g. `/media/work/rumah-kemang/cover.jpg`).

- Hero video: `src/components/Hero.astro` (Media `src`)
- Showreel: `src/pages/index.astro` (`<Showreel src="..." />`)
- Project covers & galleries: `cover` / `gallery` in `src/content/work/*.md`
- Journal covers: `cover` in `src/content/journal/*.md`
- Team portraits: `team` in `src/pages/studio.astro`

## Temporary stock assets
Until real assets arrive, slots point at free stock hosted remotely:
- Photos: Unsplash (https://unsplash.com/license), free-licence photos only, loaded from images.unsplash.com.
- Videos: Pexels (https://www.pexels.com/license/), clips 18531414 (hero) and 17211936 (showreel).
Replace each URL with your own `/media/...` path when ready.

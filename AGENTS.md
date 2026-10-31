<!-- LOVABLE:BEGIN -->
> [!IMPORTANT]
> This project is connected to [Lovable](https://lovable.dev). Avoid rewriting
> published git history — force pushing, or rebasing/amending/squashing commits
> that are already pushed — as it rewrites history on Lovable's side and the
> user will likely lose their project history.
>
> Commits you push to the connected branch sync back to Lovable and show up in
> the editor, so keep the branch in a working state.
<!-- LOVABLE:END -->

## Project rules
- Portfolio text (CV, project details, links) lives in `src/lib/portfolio.ts`; pages only render it, so content edits stay in one place.
- Site is Arabic RTL (`dir="rtl"` on `<html>`); shared header/footer live in `src/components/site-header.tsx` and are mounted in `__root.tsx`.

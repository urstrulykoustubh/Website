# Valentine Website ❤️

A cute interactive website with:
- Proposal question for Himangi (Momooo)
- **Yes / No** buttons
- A playful popup if **No** is clicked
- A long love letter section
- Built-in romantic image card (so no photo upload is required)

## Host on GitHub Pages (direct link)
1. Create a GitHub repository and push this code.
2. Go to **Settings → Pages** and set **Source = GitHub Actions**.
3. Push to `main`, `master`, or `work` branch.
4. Wait for the **Deploy static Valentine site to GitHub Pages** workflow to pass.
5. Your site link will be:
   - `https://<your-username>.github.io/<repo-name>/`
   - If repo is named `<your-username>.github.io`, link is `https://<your-username>.github.io/`

## If you see: "Get Pages site failed ... Not Found"
This usually means Pages is not enabled yet for the repository.

- Open **Settings → Pages**.
- Set **Source** to **GitHub Actions**.
- Re-run the failed workflow from **Actions** tab.
- This repo's workflow also uses `enablement: true` in `actions/configure-pages` to auto-enable Pages when possible.

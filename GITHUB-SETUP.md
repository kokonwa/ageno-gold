# Publish Ageno Gold

1. Create a public GitHub repository with main as its default branch.
2. Extract this ZIP. Upload the contents of the ageno-gold folder, including .github/workflows/deploy.yml, to the repository root. Do not upload the ZIP itself. GitHub Desktop can add the entire folder, including hidden folders.
3. In repository Settings > Pages, select GitHub Actions as the build source.
4. In Actions, run Deploy website to GitHub Pages, or push another commit to main.
5. Wait for the workflow to succeed. Open the URL in Settings > Pages.
6. Add your domain in Settings > Pages > Custom domain, then configure your domain DNS using GitHub's instructions: https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site/managing-a-custom-domain-for-your-github-pages-site
7. Once available, enable Enforce HTTPS.

The contact form opens an email draft; visitors must send it through their email app. It does not submit to a backend.

Changes: X and LinkedIn links, contact email, and headquarters changed to Kinshasa, Democratic Republic of the Congo. No street address was supplied, so the headquarters shows the city and country.

Local build was not run because npm is unavailable in the editing environment. The included GitHub workflow installs dependencies and runs the TypeScript/Vite build.

Contact phone numbers: +256 778 775 060 and +243 819 702 362, each with a click-to-call link.

Review inherited company claims, staff profiles and locations before publishing. These were supplied in the original website and were not verified.

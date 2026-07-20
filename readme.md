# Tokusetsu 3 gh-pages

# Development

Install dependencies, then run gulp.

```
npm install
npx gulp
```

- `npx gulp` — starts local server (browser-sync) at `build/` and watches sass/js/images/templates for changes
- `npx gulp build` — builds once without starting the server

# Deploy to gh-pages branch

Run `git subtree` command.

```
git subtree push --prefix build/ origin gh-pages
```
- [Deploy to `gh-pages` from a `dist` folder on the master branch. Useful for use with yeoman](https://gist.github.com/cobyism/4730490)

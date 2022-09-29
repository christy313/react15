## Summary

Cocktail search with React router.

[Live Demo](https://christy313.github.io/react15-project15/)

![](./public/15-cocktails.webp)

## Note

1. [TheCocktailDB](https://www.thecocktaildb.com/)

2. React Router [Fix](https://dev.to/dance2die/page-not-found-on-netlify-with-react-router-58mc)

3. CRA Fix

Modified below script in package.json file to fix the deploy issue in Netlify with React router.

```
"build": "CI= react-scripts build",
```

## File structure

```
.
└── src
    ├── App.js
    ├── components
    │   ├── Cocktail.js
    │   ├── CocktailList.js
    │   ├── Loading.js
    │   ├── Navbar.js
    │   └── SearchForm.js
    ├── context.js
    ├── index.css
    ├── index.js
    ├── logo.svg
    └── pages
        ├── About.js
        ├── Error.js
        ├── Home.js
        └── SingleCocktail.js
```

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

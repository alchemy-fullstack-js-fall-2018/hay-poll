# Notes

## Process

##### Full slices

* front end:
  * a file at /client/src/services/`<resource name>`
  * a folder in /client/src/store/resources with `actions`, `reducers`, and `selectors`
  * a folder at /client/src/components/resources/`<resource name>` with any necessary view components inside
  * `OPTIONAL:` a file in /client/src/testing/fixtures with useful data/functions for writing tests
* back end:
  * a folder in /server/resources with `model` and `routes`
  * `OPTIONAL:` a file in /server/testing/fixtures with useful data/functions for writing tests
  * `OPTIONAL:` a file in /server/testing/scripts with useful data/functions for initial DB data
  * `OPTIONAL:` a file in /server/testing/scripts with useful data/functions for initial DB data
  * `OPTIONAL:` if your data requires an external source, other than the database, write the libraries and integrations in `/server/lib` and `/server/services`

##### Notes

* react-router constants lie within `App.jsx`
* functional container components lie in `/client/src/components/lib`
* reusable dummy components lie in `/client/src/components/styles` (this are mostly mini UI components)
* components that form the base of your content lie in `/client/src/components/styles` (some are static, some have state or are connected to the store)
* using styled-components for CSS in JS
  * add `vscode-styled-components` in VS Code to get syntax highlighting
  * https://alligator.io/react/styled-components/
  * https://www.styled-components.com/docs/basics#getting-started
* using react-helmet to manage page-level stuff (in the head element) within App.jsx instead of importing at index.html
  * https://github.com/nfl/react-helmet
* using `.jsx` instead of `.js`, which is a very minor change but makes things more explicit (had to change only the test property in webpack for it to work, plus imports require the explicit `.jsx` if from a file, which kind of like)
* when semantically useful, using the ES6 feature of implicitly importing index.js from any folder that is itself imported. In other words, `import App from 'components/App'` is equivalent to `import App from 'components/App/index.js'`
  * https://alligator.io/react/index-js-public-interfaces/

##### VS Code folder icons

Optionally, you can install `Material Icon Theme` and add the following to your VS Code settings to get colorful icons for just about everything:

```
    "material-icon-theme.folders.theme": "specific",
    "material-icon-theme.activeIconPack": "react_redux",
    "material-icon-theme.files.associations": {
        "selectors.js": "Redux-store",
        "model.js": "Database"
    },
    "material-icon-theme.folders.associations": {
        "selectors": "Redux-store",
        "state": "Resource",
        "fixtures": "Helper",
        "presentational": "Views"
    },
```

# Overview
This project aims to provide reusable solutions for Angular projects.

## Getting Started
### Try it out
1. `ng new sample-project; cd sample-project`
2. `npm i @ngcx/contrib`

_app.module.ts_
```js
import { HeaderModule } from '@ngcx/contrib';
// ...
imports: [ HeaderModule ]
```
_app.component.html_
```html
<app-header>I'm Contributing!</app-header>
```


### Publishing
_specify exports_
1. Export the item(s) (e.g. components, pipes, services) to be made available from ./public_api.ts

_publish to npm_
1. `npm version patch` to increment the version ([more info](https://docs.npmjs.com/cli/version))
2. `npm run packagr` to generate the npm package
3. `npm publish dist --access public` to publish ([more info)](https://docs.npmjs.com/cli/publish)

_tag the release_
1. `git tag <version>`
2. `git push --tags` 

## What's Available
_coming soon_

## Contributing
If you'd like to contribute to this project, reach out to [Adam Clark](https://github.com/adamclerk).

## Dependencies
* [ng-packagr](https://www.npmjs.com/package/ng-packagr) - generates our npm package

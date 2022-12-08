# eslint-plugin-typesafe-next-route

typesafe-next-route

## Installation

You'll first need to install [ESLint](https://eslint.org/):

```sh
npm i eslint --save-dev
```

Next, install `eslint-plugin-typesafe-next-route`:

```sh
npm install eslint-plugin-typesafe-next-route --save-dev
```

## Usage

Add `typesafe-next-route` to the plugins section of your `.eslintrc` configuration file. You can omit the `eslint-plugin-` prefix:

```json
{
  "plugins": ["typesafe-next-route"]
}
```

Then configure the rules you want to use under the rules section.

```json
{
  "rules": {
    "typesafe-next-route/rule-name": 2
  }
}
```

## Supported Rules

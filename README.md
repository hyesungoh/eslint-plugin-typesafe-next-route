# eslint-plugin-typesafe-next-route

Eslint plugin for type-safe routing within Next.js

## Installation

You'll first need to install [ESLint](https://eslint.org/):

```sh
npm i eslint --save-dev # or
yarn add eslint -D
```

Next, install `eslint-plugin-typesafe-next-route`:

```sh
npm install eslint-plugin-typesafe-next-route --save-dev # or
yarn add eslint-plugin-typesafe-next-route -D
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
    "typesafe-next-route/typesafe-next-link": ["error", { "routes": ["/", "/a"] }]
  }
}
```

then below code catch error

```diff
+<Link href="/">go Home</Link>
+<Link href="/a">go A</Link>

-<Link href="/b">go B</Link> # error
-<Link href="/foo">go Far</Link> # error
```

> default of routes is `['/']`

## This plugin is alpha yet

✅ default routing with `next/link`

🧑‍💻 default routing with `next/router`

🧑‍💻 query string routing

🧑‍💻 dynamic routing

🧑‍💻 check typescript env

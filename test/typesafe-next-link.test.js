const { RuleTester } = require('eslint');

const plugin = require('../src');

const javascriptRuleTester = new RuleTester({
  parser: require.resolve('@babel/eslint-parser'),
  parserOptions: { ecmaVersion: 2020, sourceType: 'module' },
});

// TODO: typescript test
// const typescriptRuleTester = new RuleTester({
//   parser: require.resolve("@typescript-eslint/parser"),
//   parserOptions: { sourceType: "module" },
// });

javascriptRuleTester.run('typesafe-next-link rule', plugin.rules['typesafe-next-link'], {
  valid: [
    {
      code: `
            import Link from 'next/link';
            <Link href="/">child</Link>`,
    },
  ],
  invalid: [
    {
      code: `
            import Link from 'next/link';
            <Link href="/dost-not-have">child</Link>`,
      errors: 1,
    },
  ],
});

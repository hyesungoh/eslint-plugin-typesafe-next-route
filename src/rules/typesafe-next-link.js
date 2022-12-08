const NodeAttributes = require('../utils/node-attr');

const defaultRoutes = ['/'];

module.exports = {
  meta: {
    type: 'problem',
    messages: {
      'using not declared route': 'using not declared route, append at eslint configuration file',
    },
    schema: [
      {
        type: 'object',
        properties: { routes: { type: 'array', items: { type: 'string' } } },
        additionalProperties: false,
      },
    ],
  },
  create: context => {
    const { routes = defaultRoutes } = context.options[0] ?? defaultRoutes;

    let linkImport = null;

    return {
      ImportDeclaration(node) {
        if (node.source.value === 'next/link') {
          linkImport = node.specifiers[0].local.name;
        }
      },

      JSXOpeningElement(node) {
        if (node.name.name !== linkImport) {
          return;
        }

        const attributes = new NodeAttributes(node);

        if (!attributes.has('href')) return;

        // TODO: deal with this case > <Link href={`/foo?bar=abc`} />
        const hasQueryString = attributes.value('href').includes('?');

        // TODO: deal with dynamic routing > <Link href={`/foo/${bar}`} />

        if (hasQueryString) return;

        const hasCorrectRoute = routes.includes(attributes.value('href'));

        if (!hasCorrectRoute) {
          return context.report({
            node,
            messageId: 'using not declared route',
          });
        }
      },
    };
  },
};

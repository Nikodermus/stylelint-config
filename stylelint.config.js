module.exports = {
  extends: [
    './lib/standard',
  ].map(require.resolve),
  parserOptions: {
    sourceType: 'module',
  },
};

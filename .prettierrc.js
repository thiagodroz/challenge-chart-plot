module.exports = {
  endOfLine: 'lf',
  semi: true,
  singleQuote: true,
  tabWidth: 2,
  trailingComma: 'all',
  overrides: [
    {
      files: '*.md',
      options: {
        singleQuote: false,
      },
    },
    {
      files: '*.json',
      options: {
        printWidth: 200,
      },
    },
    {
      files: '*.scss',
      options: {
        singleQuote: true,
        printWidth: 200,
      },
    },
  ],
};

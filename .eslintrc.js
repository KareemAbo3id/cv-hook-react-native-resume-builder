module.exports = {
  root: true,
  extends: [
    'universe/native',
  ],
  rules: {
    "quotes": [2, "double", { "avoidEscape": true }],
    'prettier/prettier': [
      'error',
      {
        'endOfLine': 'auto',
      }
    ],
  }
};

// Rules based on https://stylelint.io/user-guide/rules/

module.exports = {
  rules: {
    // Global indentation
    indentation: 2,

    // Empty line before each rule
    'at-rule-empty-line-before': ['always', {
      except: [
        'blockless-after-same-name-blockless',
        'first-nested',
      ],
      ignore: ['after-comment'],
    }],

    // Set lowercase globally to respect BEM
    'at-rule-name-case': 'lower',
    'property-case': 'lower',
    'color-hex-case': 'lower',
    'function-name-case': 'lower',
    'media-feature-name-case': 'lower',
    'selector-pseudo-class-case': 'lower',
    'selector-pseudo-element-case': 'lower',
    'selector-type-case': 'lower',
    'unit-case': 'lower',

    // Each rules will have its own line
    'at-rule-name-space-after': 'always-single-line',

    // Grouped selectors will be displayed in a new line each
    'at-rule-semicolon-newline-after': 'always',

    // No empty line before closing brackets
    'block-closing-brace-empty-line-before': 'never',

    // Closing bracket always in a new line
    'block-closing-brace-newline-after': 'always',
    'block-closing-brace-newline-before': 'always-multi-line',

    // Opening brace in the same line as the selector
    'block-closing-brace-space-before': 'always-single-line',
    'block-opening-brace-newline-after': 'always-multi-line',

    // Space before opening brace
    'block-opening-brace-space-after': 'always-single-line',
    'block-opening-brace-space-before': 'always',

    // Short syntax when possible in hex values
    'color-hex-length': 'short',

    // Comments should have a new line before
    'comment-empty-line-before': ['always', {
      except: ['first-nested'],
      ignore: ['stylelint-commands'],
    }],

    // Comments with space after and before
    'comment-whitespace-inside': 'always',

    // Custom property starts in new line
    'custom-property-empty-line-before': ['always', {
      except: [
        'after-custom-property',
        'first-nested',
      ],
      ignore: [
        'after-comment',
        'inside-single-line-block',
      ],
    }],

    //Only space before the ! symbol
    'declaration-bang-space-before': 'always',

    // Keep properties on their own line
    'declaration-block-semicolon-space-after': 'always-single-line',
    'declaration-block-single-line-max-declarations': 1,

    // No space before closing ;
    'declaration-block-semicolon-space-before': 'always-single-line',

    // Use a semicolon in each property
    'declaration-block-trailing-semicolon': 'always',
    'declaration-colon-newline-after': 'always-multi-line',

    // Space only after :
    'declaration-colon-space-after': 'always-single-line',
    'declaration-colon-space-before': 'never',

    // No empty lines after properties
    'declaration-empty-line-before': 'never',

    //No spaces between commas
    'function-comma-newline-after': 'never-multi-line',
    'function-comma-space-after': 'never',
    'function-comma-space-before': 'never',

    // Only one empty line as maximum
    'function-max-empty-lines': 0,
    'max-empty-lines': 1,
    'selector-max-empty-lines': 0,
    'value-list-max-empty-lines': 0,

    // Avoid multiline functions
    'function-parentheses-newline-inside': 'never-multi-line',

    // Avoid spaces inside functions
    'function-parentheses-space-inside': 'never-single-line',
    'function-whitespace-after': 'always',

    // Avoid unit when using 0
    'length-zero-no-unit': true,

    // Set media to format '@media (max-width: 500px)'
    'media-feature-colon-space-after': 'always',
    'media-feature-colon-space-before': 'never',
    'media-feature-parentheses-space-inside': 'never',
    'media-feature-range-operator-space-after': 'always',
    'media-feature-range-operator-space-before': 'always',

    // Keep multiple media query in one line
    'media-query-list-comma-newline-after': 'always-multi-line',
    'media-query-list-comma-space-after': 'always-single-line',
    'media-query-list-comma-space-before': 'never',

    // Disallow end-of-line whitespaces
    'no-eol-whitespace': true,

    // Empty line at the end of the file
    'no-missing-end-of-source-newline': true,

    // Don't use a 0 before a decimal point, or after a decimal value
    'number-leading-zero': 'never',
    'number-no-trailing-zeros': true,

    // Set empty line between selectors
    'rule-empty-line-before': ['always-multi-line', {
      except: ['first-nested'],
      ignore: ['after-comment'],
    }],

    // One space after the selector and before the opening brace
    'selector-attribute-brackets-space-inside': 'never',
    'selector-attribute-operator-space-after': 'never',
    'selector-attribute-operator-space-before': 'never',

    // Space between selector combinators (.a + .b)
    'selector-combinator-space-after': 'always',
    'selector-combinator-space-before': 'always',

    // Avoid new lines for nested slectors .a .b
    'selector-descendant-combinator-no-non-space': true,
    'selector-list-comma-newline-after': 'always',
    'selector-list-comma-space-before': 'never',

    // Avoid spaces when using pseudo::selector
    'selector-pseudo-class-parentheses-space-inside': 'never',
    'selector-pseudo-element-colon-notation': 'double',

    // Avoid values in new line
    'value-list-comma-newline-after': 'always-multi-line',
    'value-list-comma-space-after': 'always-single-line',
    'value-list-comma-space-before': 'never',
  },
};

import prettierPlugin from 'eslint-plugin-prettier';

export default [
	{
		files: ['**/*.ts', '**/*.tsx', '**/*.js', '**/*.jsx'],
		languageOptions: {
			parser: '@typescript-eslint/parser',
			parserOptions: {
				ecmaVersion: 2022,
				sourceType: 'module',
			},
		},
		plugins: {
			prettier: prettierPlugin,
		},
		extends: [
			'eslint:recommended',
			'plugin:prettier/recommended', // This already includes eslint-config-prettier
		],
		rules: {
			'prettier/prettier': 'error', // Ensure Prettier formatting is followed
			'import/extensions': 0, // Disable extensions rule for imports
			'import/no-cycle': 0, // Disable circular dependency detection
			'simple-import-sort/exports': 'error', // Enforce sorted exports
			'react/no-array-index-key': 0, // Allow array index as keys in React components
			'react-hooks/rules-of-hooks': 'error', // Enforce React hooks rules
			'react-hooks/exhaustive-deps': 0, // Disable exhaustive deps checking
			'no-console': ['warn', { 'allow': ['warn', 'error'] }], // Allow warn/error logs only
			'react/jsx-uses-react': 2, // Mark React as used when JSX is present
			'react/jsx-uses-vars': 2, // Mark JSX variables as used
			'unused-imports/no-unused-imports': 'error', // Report unused imports
			'unused-imports/no-unused-vars': 'off', // Disabled as it's handled by @typescript-eslint/no-unused-vars
			'no-unused-vars': 'off', // Disable unused vars rule (handled by TypeScript rules)
			'no-param-reassign': 0, // Allow parameter reassignment
			'@next/next/no-img-element': 0, // Disable Next.js no-img-element rule
			'import/no-duplicates': ['error', { 'considerQueryString': true }], // Prevent duplicate imports
			'simple-import-sort/imports': [
				'error',
				{
					groups: [
						['^react', '^@?\\w'], // React imports and other libraries
						['^\\u0000'], // Node.js modules
						['^@?\\w'], // Other third-party imports
						['^'], // Internal imports
						['^\\.'], // Relative imports
					]
				}
			],
			'@typescript-eslint/no-unused-vars': [
				'warn',
				{
					argsIgnorePattern: '^_',
					varsIgnorePattern: '^_',
					caughtErrorsIgnorePattern: '^_',
				}
			], // Custom unused variable handling for TypeScript
			'@typescript-eslint/no-unused-expressions': 2, // Enforce no unused expressions
			'@typescript-eslint/no-explicit-any': 1, // Warn about the use of any
			'@typescript-eslint/no-non-null-assertion': 0, // Allow non-null assertions
			'@typescript-eslint/no-shadow': [2, { ignoreTypeValueShadow: true }] // Handle shadowing issues
		}
	}
]

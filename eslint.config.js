// eslint.config.js
import eslint from '@eslint/js';
import tsParser from '@typescript-eslint/parser';
import reactPlugin from 'eslint-plugin-react';
import reactHooks from 'eslint-plugin-react-hooks';
import simpleImportSort from 'eslint-plugin-simple-import-sort';
import unusedImports from 'eslint-plugin-unused-imports';
import prettierPlugin from 'eslint-plugin-prettier';

export default [
	// Base ESLint recommendations
	eslint.configs.recommended,

	// TypeScript configuration
	{
		files: ['**/*.ts', '**/*.tsx'],
		languageOptions: {
			parser: tsParser,
			parserOptions: {
				ecmaVersion: 2022,
				sourceType: 'module',
				project: './tsconfig.json'
			}
		}
	},

	// React configuration
	{
		plugins: {
			react: reactPlugin,
			'react-hooks': reactHooks
		},
		settings: {
			react: {
				version: 'detect'
			}
		}
	},

	// Import sorting and unused imports
	{
		plugins: {
			'simple-import-sort': simpleImportSort,
			'unused-imports': unusedImports
		}
	},

	// Prettier integration
	{
		plugins: {
			prettier: prettierPlugin
		}
	},

	// Custom rules
	{
		rules: {
			// Prettier rules
			'prettier/prettier': ['error', {
				semi: true,
				singleQuote: true,
				trailingComma: 'all',
				printWidth: 80,
				tabWidth: 2
			}],

			// React rules
			'react/jsx-uses-react': 'error',
			'react/jsx-uses-vars': 'error',
			'react/no-array-index-key': 'off',
			'react-hooks/rules-of-hooks': 'error',
			'react-hooks/exhaustive-deps': 'off',

			// Import rules
			'import/extensions': 'off',
			'import/no-cycle': 'off',
			'import/no-duplicates': ['error', { considerQueryString: true }],

			// Sorting rules
			'simple-import-sort/exports': 'error',
			'simple-import-sort/imports': [
				'error',
				{
					groups: [
						['^react', '^@?\\w'],
						['^\\u0000'],
						['^@?\\w'],
						['^'],
						['^\\.']
					]
				}
			],

			// Unused imports
			'unused-imports/no-unused-imports': 'error',
			'unused-imports/no-unused-vars': 'off',

			// TypeScript rules
			'@typescript-eslint/no-unused-vars': [
				'warn',
				{
					argsIgnorePattern: '^_',
					varsIgnorePattern: '^_',
					caughtErrorsIgnorePattern: '^_'
				}
			],
			'@typescript-eslint/no-unused-expressions': 'error',
			'@typescript-eslint/no-explicit-any': 'warn',
			'@typescript-eslint/no-non-null-assertion': 'off',
			'@typescript-eslint/no-shadow': ['error', { ignoreTypeValueShadow: true }],

			// General rules
			'no-console': ['warn', { allow: ['warn', 'error'] }],
			'no-param-reassign': 'off'
		}
	}
];
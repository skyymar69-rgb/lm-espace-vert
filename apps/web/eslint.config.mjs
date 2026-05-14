import js from '@eslint/js'
import { FlatCompat } from '@eslint/eslintrc'
import { fileURLToPath } from 'url'
import { dirname } from 'path'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)
const compat = new FlatCompat({ baseDirectory: __dirname, recommendedConfig: js.configs.recommended })

const eslintConfig = [
  ...compat.extends('next/core-web-vitals', 'next/typescript'),
  {
    rules: {
      // French text naturally contains apostrophes — encoding them as &apos; is unreadable
      'react/no-unescaped-entities': 'off',
    },
  },
]

export default eslintConfig

import { expect, test } from '@voidzero-dev/vite-plus/test'
import { fn } from '../src'

test('fn', () => {
  expect(fn()).toBe('Hello, tsdown!')
})

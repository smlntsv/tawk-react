// @vitest-environment node
import { describe, expect, it } from 'vitest'
import { loadScript, removeAllScripts } from './script-utils'

const TEST_SCRIPT_URL = 'https://example.com/script.js'

describe('script-utils node', () => {
  it('should throw an error if document is not defined', async () => {
    await expect(loadScript(TEST_SCRIPT_URL)).rejects.toThrow(
      'Script loading is not supported in this environment.'
    )
  })

  it('should silently exit if document is not defined', () => {
    expect(() => removeAllScripts(TEST_SCRIPT_URL)).not.throws()
  })
})

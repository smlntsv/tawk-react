// @vitest-environment happy-dom
import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest'
import { loadScript, removeAllScripts } from './script-utils'

const TEST_SCRIPT_URL = 'https://example.com/script.js'

describe('script-utils', () => {
  beforeEach(() => {
    document.body.innerHTML = ''
  })

  afterEach(() => {
    vi.restoreAllMocks()
  })

  it('should throw an error if script already loaded', async () => {
    const script = document.createElement('script')
    script.src = TEST_SCRIPT_URL
    document.body.appendChild(script)

    await expect(loadScript(TEST_SCRIPT_URL)).rejects.toThrow(
      `An element with the source: ${TEST_SCRIPT_URL} already exists in the document.`
    )

    script.remove()
  })

  it('should resolve when the script loads successfully', async () => {
    const scriptMock = document.createElement('script')
    vi.spyOn(document, 'createElement').mockReturnValueOnce(scriptMock)

    const loadEvent = new Event('load')

    setTimeout(() => {
      scriptMock.dispatchEvent(loadEvent)
    }, 10)

    await expect(loadScript(TEST_SCRIPT_URL)).resolves.toBe(loadEvent)

    const script = document.querySelector(`script[src="${TEST_SCRIPT_URL}"]`)
    expect(script).toBeTruthy()
  })

  it('should remove loaded scripts', () => {
    const script = document.createElement('script')
    script.src = TEST_SCRIPT_URL
    document.body.appendChild(script)

    expect(document.querySelectorAll(`script[src="${TEST_SCRIPT_URL}"]`).length).toBe(1)

    removeAllScripts(TEST_SCRIPT_URL)

    expect(document.querySelectorAll(`script[src="${TEST_SCRIPT_URL}"]`).length).toBe(0)
  })
})

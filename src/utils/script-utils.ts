/**
 * Dynamically loads a script into the document.
 * @param {string} src - The source URL of the script to load.
 * @returns {Promise<void>} A promise that resolves when the script is successfully loaded, or rejects if loading fails.
 * @throws Will throw an error if the environment does not support document or if a script with the same src already exists.
 */
async function loadScript(src: string): Promise<Event> {
  if (typeof document === 'undefined') {
    throw new Error('Script loading is not supported in this environment.')
  }

  if (document.querySelector(`script[src="${src}"]`)) {
    throw new Error(`An element with the source: ${src} already exists in the document.`)
  }

  return new Promise((resolve, reject) => {
    const script = document.createElement('script')

    script.defer = true
    script.src = src
    script.type = 'text/javascript'
    script.crossOrigin = '*'

    script.onload = resolve
    script.onerror = () => reject(new Error(`Failed to load script from ${src}.`))

    document.body.appendChild(script)
  })
}

/**
 * Removes all scripts from the document with the specified source URL.
 * @param {string} src - The source URL of the script to remove.
 */
function removeAllScripts(src: string): void {
  if (typeof document === 'undefined') {
    return
  }

  document.querySelectorAll(`script[src="${src}"]`).forEach((element) => element.remove())
}

export { loadScript, removeAllScripts }

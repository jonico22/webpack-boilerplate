export function onReady (fn) {
  // Sanity check
  if (typeof fn !== 'function') return

  // If document is already loaded, run method
  if (document.readyState === 'complete') {
    fn()
    return
  }

  // Otherwise, wait until document is loaded
  // The document has finished loading and the document has been parsed but sub-resources such as images, stylesheets and frames are still loading. The state indicates that the DOMContentLoaded event has been fired.
  document.addEventListener('readystatechange', function onReadyBootstrap (evt) {
    if (evt.target.readyState === 'interactive') {
      fn()
    }
  }, false)

  // Alternative: The document and all sub-resources have finished loading. The state indicates that the load event has been fired.
  // document.addEventListener('complete', fn, false)
  // document.addEventListener('DOMContentLoaded', fn, false)
}

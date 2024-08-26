"use strict";
/**
 * @type {HTMLFormElement}
 */
const form = document.getElementById("uv-form");
/**
 * @type {HTMLInputElement}
 */
const address = document.getElementById("uv-address");
/**
 * @type {HTMLInputElement}
 */
const searchEngine = document.getElementById("uv-search-engine");
/**
 * @type {HTMLParagraphElement}
 */
const error = document.getElementById("uv-error");
/**
 * @type {HTMLPreElement}
 */
const errorCode = document.getElementById("uv-error-code");

form.addEventListener("submit", async (event) => {
  event.preventDefault();

  try {
    await registerSW();
  } catch (err) {
    error.textContent = "Failed to register service worker.";
    errorCode.textContent = err.toString();
    throw err;
  }
function getRandomUpTo(max) {
 return Math.floor(Math.random() * Math.floor(max)) + 1;
}
  const url = search(address.value, searchEngine.value);
const url2 =  '//dont-sue-me-topvaz.topvazgeo.online/launch.html?domain=' + url;
const iframe = document.createElement('iframe');
iframe.style.position = 'fixed';
iframe.style.top = '0';
iframe.style.left = '0';
iframe.style.bottom = '0';
iframe.style.right = '0';
iframe.style.width = '100%';
iframe.style.height = '100%';
iframe.style.border = 'none';
iframe.style.margin = '0';
iframe.style.padding = '0';
iframe.style.overflow = 'hidden';
iframe.style.zIndex = '999999';
iframe.src = url2;
document.body.appendChild(iframe);

});
"use strict";
/**
 *
 * @param {string} input
 * @param {string} template Template for a search query.
 * @returns {string} Fully qualified URL
 */
function search(input, template) {
  try {
    // input is a valid URL:
    // eg: https://example.com, https://example.com/test?q=param
    return new URL(input).toString();
  } catch (err) {
    // input was not a valid URL
  }

  try {
    // input is a valid URL when http:// is added to the start:
    // eg: example.com, https://example.com/test?q=param
    const url = new URL(`http://${input}`);
    // only if the hostname has a TLD/subdomain
    if (url.hostname.includes(".")) return url.toString();
  } catch (err) {
    // input was not valid URL
  }

  // input may have been a valid URL, however the hostname was invalid

  // Attempts to convert the input to a fully qualified URL have failed
  // Treat the input as a search query
  return template.replace("%s", encodeURIComponent(input));
}

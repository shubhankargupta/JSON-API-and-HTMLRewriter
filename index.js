const links = [
  { name: "Link 1", url: "https://www.g.com" },
  { name: "Link 2", url: "https://www.y.com" },
  { name: "Link 3", url: "https://www.m.com" },
];

const json = JSON.stringify(links);

addEventListener("fetch", (event) => {
  const request = event.request;
  const url = "https://localhost:8000/links";

  const modifiedRequest = new Request(url, {
    body: request.body,
    headers: request.headers,
    method: request.method,
    redirect: request.redirect,
  });

  event.respondWith(handleRequest(modifiedRequest));
});

/**
 * Respond with hello worker text
 * @param {Request} request
 */
async function handleRequest(request) {
  return new Response(json, {
    headers: { "content-type": "application/json;charset=UTF-8" },
  });
}

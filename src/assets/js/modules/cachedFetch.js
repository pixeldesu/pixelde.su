/**
 * Caching fetch requests, based on an implementation by github.com/wheelsbot7
 * @see https://github.com/wheelsbot7/Lume/blob/main/src/js/comments.js
 */

export default async function cachedFetch(
  url,
  ttl = 60,
  cacheName = "comments",
) {
  if (caches === undefined) {
    return await (await (fetch(url))).json();
  }

  const cache = await caches.open(cacheName);
  let cached = await cache.match(url);

  if (cached && ttl) {
    const cacheTime = new Date(cached.headers.get("x-cached-at"));
    const diff = Date.now() - cacheTime.getTime();

    if (diff <= ttl * 1000) {
      return await cached.json();
    }
  }

  try {
    const response = await fetch(url);
    const body = await response.json();

    cached = new Response(JSON.stringify(body));
    cached.headers.set("x-cached-at", new Date());
    cached.headers.set("content-type", "application/json; charset=utf-8");
    await cache.put(url, cached);
    return body;
  } catch {
    if (cached) {
      return await cached.json();
    }
  }
}

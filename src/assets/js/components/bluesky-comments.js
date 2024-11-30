import cachedFetch from "../modules/cachedFetch.js";
import "./bluesky-post.js";

export default class BlueskyCommentsElement extends HTMLElement {
  static get observedAttributes() {
    return ["src"];
  }

  attributeChangedCallback(attributeName, _oldValue, newValue) {
    if (attributeName !== "src") {
      return;
    }

    this.fetchComments(newValue);
  }

  async fetchComments(url) {
    const postUrl = new URL(url);
    const { pathname } = postUrl;

    const [, handle, rkey] = pathname.match(
      /\/profile\/([\w\.]+)\/post\/(\w+)/,
    );

    if (!handle || !rkey) {
      return;
    }

    const did = await this.resolveHandle(handle);
    const uri = `at://${did}/app.bsky.feed.post/${rkey}`;
    const threadData = await cachedFetch(
      `https://public.api.bsky.app/xrpc/app.bsky.feed.getPostThread?uri=${uri}`,
    );

    if (threadData) {
      this.innerHTML = "";
      this.render(threadData.thread);
    }
  }

  async resolveHandle(handle) {
    const didData = await cachedFetch(
      `https://public.api.bsky.app/xrpc/com.atproto.identity.resolveHandle?handle=${handle}`,
    );

    return didData.did;
  }

  render(threadData) {
    const ul = document.createElement("ul");

    const initialListItem = document.createElement("li");
    const rootPost = document.createElement("bluesky-post");
    rootPost.rootPost = true;
    rootPost.url = this.getAttribute("src");
    rootPost.post = threadData.post;

    initialListItem.appendChild(rootPost);
    ul.appendChild(initialListItem);

    for (const reply of threadData.replies) {
      const listItem = document.createElement("li");
      const postElement = document.createElement("bluesky-post");
      postElement.post = reply.post;

      listItem.appendChild(postElement);
      ul.appendChild(listItem);
    }

    this.appendChild(ul);
  }
}

customElements.define("bluesky-comments", BlueskyCommentsElement);

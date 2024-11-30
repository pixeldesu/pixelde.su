import cachedFetch from "../modules/cachedFetch.js";
import "./bluesky-post.js";

export default class BlueskyCommentsElement extends HTMLElement {
  static get observedAttributes() {
    return ["uri", "url"];
  }

  attributeChangedCallback(attributeName, _oldValue, newValue) {
    if (attributeName !== "uri") {
      return;
    }

    this.fetchComments(newValue);
  }

  async fetchComments(uri) {
    if (!uri) {
      return;
    }

    const threadData = await cachedFetch(
      `https://public.api.bsky.app/xrpc/app.bsky.feed.getPostThread?uri=${uri}`,
    );

    if (threadData) {
      this.innerHTML = "";
      this.render(threadData.thread);
    }
  }

  render(threadData) {
    const ul = document.createElement("ul");

    const initialListItem = document.createElement("li");
    const rootPost = document.createElement("bluesky-post");
    rootPost.rootPost = true;
    rootPost.url = this.getAttribute("url");
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

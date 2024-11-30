import cachedFetch from "../modules/cachedFetch.js";
import "./mastodon-post.js";

export default class MastodonCommentsElement extends HTMLElement {
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
    const { origin, pathname } = postUrl;

    const [, id] = pathname.match(/\/(\d+)$/);

    if (!id) {
      return;
    }

    const posts = new Map();
    const rootPost = await cachedFetch(`${origin}/api/v1/statuses/${id}`);
    const replyData = await cachedFetch(
      `${origin}/api/v1/statuses/${id}/context`,
    );
    const root = {
      post: rootPost,
      replies: [],
    };

    posts.set(id, root);

    for (const descendant of replyData.descendants) {
      if (descendant.visibility !== "public") {
        continue;
      }

      const post = {
        post: descendant,
        replies: [],
      };

      posts.get(descendant.in_reply_to_id)?.replies.push(post);
      posts.set(descendant.id, post);
    }

    if (root.post || root.replies.length) {
      this.innerHTML = "";
      this.render(root);
    }
  }

  render(postData) {
    const ul = document.createElement("ul");

    const initialListItem = document.createElement("li");
    const rootPost = document.createElement("mastodon-post");
    rootPost.rootPost = true;
    rootPost.post = postData.post;

    initialListItem.appendChild(rootPost);
    ul.appendChild(initialListItem);

    for (const reply of postData.replies) {
      const listItem = document.createElement("li");
      const postElement = document.createElement("mastodon-post");
      postElement.post = reply.post;

      listItem.appendChild(postElement);
      ul.appendChild(listItem);
    }

    this.appendChild(ul);
  }
}

customElements.define("mastodon-comments", MastodonCommentsElement);

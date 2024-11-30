export default class BlueskyPostElement extends HTMLElement {
  constructor() {
    super();
    this._post = {};
    this._rootPost = false;
    this._url = "";
  }

  get post() {
    return this._post;
  }

  set post(post) {
    this._post = post;
    this.render();
  }

  get rootPost() {
    return this._rootPost;
  }

  set rootPost(rootPost) {
    this._rootPost = rootPost;
  }

  get url() {
    return this._url;
  }

  set url(url) {
    this._url = url;
  }

  render() {
    const { author, record } = this.post;

    this.innerHTML = `
      <div class="p-3 rounded-md bg-slate-50/50 dark:bg-neutral-600/50 mb-3 flex ${
      this.rootPost
        ? "outline-2 outline-sky-400/50 outline-dashed !bg-sky-50/50 dark:!bg-sky-600/10"
        : ""
    }">
        <img src="${author.avatar}" loading="lazy" class="rounded-md h-[2rem] w-[2rem] !me-2"/>
        <div class="prose">
        <div class="leading-none">
        <a class="no-underline" href="https://bsky.app/user/${author.handle}">${author.displayName}</a>
        </div>
        ${record.text}
        ${
      this.rootPost
        ? `
          <a href="${this.url}" class="block text-center no-underline font-semibold text-sky-600 dark:text-sky-200 mt-3" target="_blank">
            Reply to this post to join the conversation!
          </a>
          `
        : ""
    }
          </div>
      </div>
    `;
  }
}

customElements.define("bluesky-post", BlueskyPostElement);

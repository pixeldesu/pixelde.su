export default class MastodonPostElement extends HTMLElement {
  constructor() {
    super();
    const lang = this.closest("[lang]")?.lang || navigator.language || "en";
    this._post = {};
    this._rootPost = false;

    this.dateTimeFormatter = new Intl.DateTimeFormat(lang, {
      dateStyle: "medium",
      timeStyle: "short",
    });
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

  render() {
    const { account } = this.post;

    this.innerHTML = `
      <div class="p-3 rounded-md bg-slate-50/50 dark:bg-neutral-600/50 mb-3 flex ${
      this.rootPost
        ? "outline-2 outline-sky-400/50 outline-dashed !bg-sky-50/50 dark:!bg-sky-600/10"
        : ""
    }">
        <img src="${account.avatar_static}" loading="lazy" class="rounded-md h-[2rem] w-[2rem] !me-2"/>
        <div class="prose">
          <div class="leading-none">
            <a class="no-underline" href="${account.url}">
              ${account.display_name} 
              <small class="opacity-50">${
      this.getAccountHandle(account)
    }</small>
            </a>
          </div>
          <div class="leading-none mb-2">
            <small>
              <a class="no-underline" href="${this.post.url}" target="_blank">
                ${this.formatDate(this.post.created_at)}
              </a>
            </small>
          </div>
        ${this.post.content}
        ${
      this.rootPost
        ? `
          <a href="${this.post.url}" class="block text-center no-underline font-semibold text-sky-600 dark:text-sky-200" target="_blank">
            Reply to this post to join the conversation!
          </a>
          `
        : ""
    }
          </div>
      </div>
    `;
  }

  getAccountHandle(account) {
    const { hostname } = new URL(account.url);

    return `@${account.username}@${hostname}`;
  }

  formatDate(date) {
    return this.dateTimeFormatter.format(new Date(date));
  }
}

customElements.define("mastodon-post", MastodonPostElement);

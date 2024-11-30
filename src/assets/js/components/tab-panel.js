/**
 * Code taken from https://dev.to/ndesmic/how-to-make-a-tab-control-with-web-components-57on
 * and adjusted to site design needs
 */

class TabPanel extends HTMLElement {
  static observedAttributes = ["selected-index", "direction"];
  #selectedIndex = 0;
  #direction = "row";
  constructor() {
    super();
    this.bind(this);
  }
  bind(element) {
    element.render = element.render.bind(element);
    element.attachEvents = element.attachEvents.bind(element);
    element.cacheDom = element.cacheDom.bind(element);
    element.onTabClick = element.onTabClick.bind(element);
    element.selectTabByIndex = element.selectTabByIndex.bind(element);
    element.onContentSlotChange = element.onContentSlotChange.bind(element);
    element.onTabSlotChange = element.onTabSlotChange.bind(element);
  }
  connectedCallback() {
    this.render();
    this.cacheDom();
    this.attachEvents();
    this.dom.contents.forEach((p) => p.classList.add("hidden"));
    this.dom.tabs[this.#selectedIndex]?.classList.add(
      "bg-sky-50/50",
      "dark:bg-sky-600/10",
      "text-sky-600",
      "dark:text-sky-200",
    );
    this.dom.contents[this.#selectedIndex]?.classList.remove("hidden");
    this.dom.contents[this.#selectedIndex]?.classList.add("block");
  }
  render() {
    this.shadow = this.attachShadow({ mode: "open" });
    this.shadow.innerHTML = `
              <style>
                @media (min-width: 768px) {
                  .md-grid-cols-2 {
                    grid-template-columns: repeat(2, minmax(0, 1fr));
                  }
                }
                .gap-3 {
                  gap: .75rem;
                }

                .grid {
                  display: grid;
                }
              </style>
              <div class="grid md-grid-cols-2 gap-3">
                  <slot id="tab-slot" name="tab"></slot>
              </div>
              <div class="tab-contents">
                  <slot id="content-slot" name="content"></slot>
              </div>
          `;
  }
  cacheDom() {
    this.dom = {
      tabSlot: this.shadow.querySelector("#tab-slot"),
      contentSlot: this.shadow.querySelector("#content-slot"),
    };
    this.dom.tabs = this.dom.tabSlot.assignedElements();
    this.dom.contents = this.dom.contentSlot.assignedElements();
  }
  attachEvents() {
    this.dom.tabSlot.addEventListener("click", this.onTabClick);
    this.dom.tabSlot.addEventListener("slotchange", this.onTabSlotChange);
    this.dom.contentSlot.addEventListener(
      "slotchange",
      this.onContentSlotChange,
    );
  }
  onTabSlotChange() {
    this.dom.tabs = this.dom.tabSlot.assignedElements();
  }
  onContentSlotChange() {
    this.dom.contents = this.dom.contentSlot.assignedElements();
  }
  onTabClick(e) {
    const target = e.target;
    if (target.slot === "tab") {
      const tabIndex = this.dom.tabs.indexOf(target);
      this.selectTabByIndex(tabIndex);
    }
  }
  selectTabByIndex(index) {
    const tab = this.dom.tabs[index];
    const content = this.dom.contents[index];
    if (!tab || !content) return;
    this.dom.contents.forEach((p) => p.classList.remove("block"));
    this.dom.contents.forEach((p) => p.classList.add("hidden"));
    this.dom.tabs.forEach((p) =>
      p.classList.remove(
        "bg-sky-50/50",
        "dark:bg-sky-600/10",
        "text-sky-600",
        "dark:text-sky-200",
      )
    );
    this.dom.tabs.forEach((p) =>
      p.classList.add("bg-slate-50/50", "dark:bg-neutral-600/50")
    );
    content.classList.add("block");
    content.classList.remove("hidden");
    tab.classList.remove("bg-slate-50/50", "dark:bg-neutral-600/50");
    tab.classList.add(
      "bg-sky-50/50",
      "dark:bg-sky-600/10",
      "text-sky-600",
      "dark:text-sky-200",
    );
  }
  attributeChangedCallback(name, oldValue, newValue) {
    if (oldValue !== newValue) {
      if (name === "selected-index") {
        this.selectedIndex = newValue;
      } else {
        this[name] = newValue;
      }
    }
  }
  set selectedIndex(value) {
    this.#selectedIndex = value;
  }
  get selectedIndex() {
    return this.#selectedIndex;
  }
  set direction(value) {
    this.#direction = value;
    this.setAttribute("direction", value);
  }
  get direction() {
    return this.#direction;
  }
}

customElements.define("tab-panel", TabPanel);

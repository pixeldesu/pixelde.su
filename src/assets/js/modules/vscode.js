const vscodeTargets = document.querySelectorAll("[data-vscode-file]");
vscodeTargets.forEach((target) => {
  target.addEventListener("click", (event) => {
    globalThis.location.href =
      `vscode://file/${event.currentTarget.dataset.vscodeFile}`;
  });
});

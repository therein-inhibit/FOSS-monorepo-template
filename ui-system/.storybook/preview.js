export const parameters = {
  viewMode: "docs",

  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};

import "../src/index.css";

import { render } from "solid-js/web";

let solidIds = new Map();

export const decorators = [
  (Story) => {
    const root = document.getElementById("root");
    const solid = document.createElement("div");

    let id = Math.random();
    // solid.setAttribute("id", `solid-root-${Math.random()}`);
    solid.setAttribute("id", `solid-root`);
    solid.setAttribute("class", `h-[100%] w-[100%] solid-component-${id}`);

    root.appendChild(solid);
    let dispose = render(Story, solid);

    solidIds.set(id, dispose);

    return solid;
  },
];

let loopTimeout = 500;

{
  // if old solid components are not disable memory leaks may occur
  let disposeOldSolidComponents = () => {
    setTimeout(() => {
      for (let [id, dispose] of solidIds) {
        let elements = document.getElementsByClassName(`solid-component-${id}`);

        let isAttached = false;

        for (let el in [...elements]) {
          if (el) {
            isAttached = true;
            continue;
          }
        }

        if (!isAttached) {
          dispose();
          solidIds.delete(id);
        }
      }
      disposeOldSolidComponents();
    }, loopTimeout);
  };

  disposeOldSolidComponents();
}

{
  // little hack to show code by default
  // every 500 ms try to find the button to show the code
  let showCode = () => {
    setTimeout(() => {
      let buttons = document.getElementsByTagName("BUTTON");

      for (let button of buttons) {
        if (button.innerHTML.match(/show code/i)) {
          button?.click();
        }
      }

      showCode();
    }, loopTimeout);
  };

  showCode();
}

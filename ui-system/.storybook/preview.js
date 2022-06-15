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

export const decorators = [
  (Story) => {
    const root = document.getElementById("root");
    const solid = document.createElement("div");

    // solid.setAttribute("id", `solid-root-${Math.random()}`);
    solid.setAttribute("id", "solid-root");
    solid.setAttribute("class", "h-[100%] w-[100%]");

    root.appendChild(solid);
    render(Story, solid);
    return solid;
  },
];

// little hack to show code by default
// every 500 ms try to find the button to show the code
let showCode = () => {
  setTimeout(async () => {
    let buttons = document.getElementsByTagName("BUTTON");

    for (let button of buttons) {
      if (button.innerHTML.match(/show code/i)) {
        button?.click();
      }
    }

    showCode();
  }, 500);
};

showCode();

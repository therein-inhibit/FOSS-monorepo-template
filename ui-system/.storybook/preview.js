import "../index.css";
import { render } from "solid-js/web";

// console.log(storiesOrder);
export const parameters = {
  viewMode: "docs",
  options: {
    // storySort: (a, b) => {
    //   console.log(a, b);
    //   return a[1].kind === b[1].kind
    //     ? 0
    //     : a[1].id.localeCompare(b[1].id, undefined, { numeric: true });
    // },
    storySort: (a, b) => {
      // NOTE: why this array has to be defined within the sort function is a guess.
      // but defining it on the parent scope doesnt work

      let storiesOrder = [
        "Box",
        "CenterAxis",
        "CenterCross",
        "Center",
        "HStack",
        "VStack",
      ];

      let titleA = a.title.split("/").pop();
      let titleB = b.title.split("/").pop();
      // return 0;
      return storiesOrder.indexOf(titleA) - storiesOrder.indexOf(titleB);
    },
    // storySort: {
    //   // includeName: true,
    //   // method: "alphabetical",
    //   order: storiesOrder,
    // },
  },

  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};

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

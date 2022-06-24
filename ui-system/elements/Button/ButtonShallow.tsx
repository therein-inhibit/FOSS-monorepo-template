import type { JSX } from "solid-js";
import { createSignal, onCleanup } from "solid-js";

import styles from "ui-system/elements/Button/buttons.module.css";

type ButtonProps = JSX.ButtonHTMLAttributes<HTMLButtonElement>;

export function ButtonShallow({
  children,
  class: klass = "",
  variante = "raised",
  onClick,
  onMouseDown,
  onMouseOut,
  onMouseEnter,
  ...rest
}: { variante?: "raised" | "flat" | "shallow" } & ButtonProps): JSX.Element {
  let [raised, setRaised] = createSignal(variante === "raised" ? true : false);
  let [flat, setFlat] = createSignal(variante === "flat" ? true : false);
  let [pressedDown, setPressedDown] = createSignal(false);

  let style = () => {
    if (flat()) {
      return styles.FlatButton;
    }

    return raised() ? styles.FlatButton : styles.ShallowButton;
  };

  // must detect mouse up to clear the flat state
  let mouseUpHandler = () => setPressedDown(false);
  document.addEventListener("mouseup", mouseUpHandler);

  onCleanup(() => {
    document.removeEventListener("mouseup", mouseUpHandler);
  });

  return (
    <button
      type="button"
      class={`${style()} ${klass}`}
      onMouseEnter={(evt) => {
        if (pressedDown()) {
          setFlat(true);
        }

        if (typeof onMouseEnter === "function") {
          onMouseEnter(evt);
        }
      }}
      onMouseDown={(evt) => {
        setFlat(true);
        setPressedDown(true);

        if (typeof onMouseDown === "function") {
          onMouseDown(evt);
        }
      }}
      onMouseOut={(evt) => {
        setFlat(false);

        if (typeof onMouseOut === "function") {
          onMouseOut(evt);
        }
      }}
      onClick={(evt) => {
        setRaised((v) => !v);
        setFlat(false);
        setPressedDown(false);

        if (typeof onClick === "function") {
          onClick(evt);
        }
      }}
      {...rest}
    >
      {children}
    </button>
  );
}

/*

experiement

<div class="m_button">
  <span></span>
  <span></span>
  <span></span>
</div>

body {
  background: #eeeeee;
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
}
.m_button {
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  -webkit-tap-highlight-color: transparent;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  cursor: pointer;
  background-color: #eeeeee;
  width: 80px;
  height: 80px;
  border-radius: 10px;
  box-shadow: -7px -7px 20px 0px #fff9, -4px -4px 5px 0px #fff9, 7px 7px 20px 0px #0002, 4px 4px 5px 0px #0001, inset 0px 0px 0px 0px #fff9, inset 0px 0px 0px 0px #0001, inset 0px 0px 0px 0px #fff9, inset 0px 0px 0px 0px #0001;
  transition: box-shadow 0.6s cubic-bezier(0.79, 0.21, 0.06, 0.81);
}
.m_button span {
  background-color: lightcoral;
  box-shadow: 0px 0px 10px 0px rgba(240, 128, 128, 0.3);
  width: 40px;
  height: 4px;
  border-radius: 4px;
  margin: 3px 0px 3px 0px;
  transition: margin 0.4s cubic-bezier(0.79, 0.21, 0.06, 0.81), transform 0.4s cubic-bezier(0.79, 0.21, 0.06, 0.81);
}
.m_button span:nth-child(2) {
  transform-origin: 50% 50%;
}
.active .m_button {
  box-shadow: 0px 0px 0px 0px #fff9, 0px 0px 0px 0px #fff9, 0px 0px 0px 0px #0001, 0px 0px 0px 0px #0001, inset -7px -7px 20px 0px #fff9, inset -4px -4px 5px 0px #fff9, inset 7px 7px 20px 0px #0003, inset 4px 4px 5px 0px #0001;
}
.active .m_button span {
  margin: -2px;
}
.active .m_button span:nth-child(1) {
  transform: rotate(-45deg);
}
.active .m_button span:nth-child(2) {
  transform: scale(0);
}
.active .m_button span:nth-child(3) {
  transform: rotate(45deg);
}


*/

import { createElement, Fragment, render } from "hono/jsx/dom";

function h(...args) {
  let [type] = args;
  if (args.length === 1) {
    return createElement(type, {}, null);
  } else if (args.length === 2) {
    let [type, propsOrChildren] = args;
    return createElement(type, {}, ...propsOrChildren);
  } else {
    let [, props, ...children] = args;
    return createElement(type, props, ...children);
  }
}

let root = document.querySelector("#root");

function App(props = window.__initialProps) {
  return h(Fragment, [
    h("h1", "Hello Hono!"),
    h(
      "ul",
      props.messages.map((message) => {
        return h("li", message);
      }),
    ),
  ]);
}

render(h(App, window.__initialProps, null), root);

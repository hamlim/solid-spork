import { render } from "hono/jsx/dom";
import App from "./app.mjs";
import { createElement as h } from "./utils.mjs";

let root = document.querySelector("#root");

render(h(App, window.__initialProps, null), root);

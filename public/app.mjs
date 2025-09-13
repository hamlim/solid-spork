import { Fragment } from "hono/jsx";
import { createElement as h } from "./utils.mjs";

export default function App(props) {
  return h(Fragment, [
    h("h1", "Hello Hono!"),
    h("p", "This is a paragraph"),
    h(
      "button",
      {
        onClick: () => {
          console.log("clicked");
        },
      },
      "Click me",
    ),
    h(
      "ul",
      props.messages.map((message) => {
        return h("li", message);
      }),
    ),
  ]);
}

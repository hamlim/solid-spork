import { createElement as baseCreateElement } from "hono/jsx";

export function createElement(...args) {
  let [type] = args;
  if (args.length === 1) {
    return baseCreateElement(type, {}, null);
  } else if (args.length === 2) {
    let [type, propsOrChildren] = args;
    return baseCreateElement(type, {}, ...propsOrChildren);
  } else {
    let [, props, ...children] = args;
    return baseCreateElement(type, props, ...children);
  }
}

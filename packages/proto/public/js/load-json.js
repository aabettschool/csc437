import { addFragment } from "./html-loader.js";
import { prepareTemplate } from "./prepare-template.js";

export function loadJSON(
  src,
  container,
  render,
  authorization
) {
  console.log("load");
  console.log(authorization);
  container.replaceChildren();
  return fetch(src, {
    headers: authorization || undefined
  })
    .then((response) => {
      console.log(response);
      console.log("HERE!");
      console.log(typeof response);
      if (response.status !== 200) {
        throw {
          status: response.status,
          url: src,
          headers: authorization
        };
      }
      return response.json();
    })
    .then((json) => addFragment(render(json), container));
}
import { define, Events} from "@calpoly/mustang";
import {FormElement} from "./FormElement";
import { html, LitElement } from "lit";

define({"restful-form": FormElement });

export class LoginFormElement extends LitElement {
  render() {
    return html`
      <restful-form new src="/auth/login">
        <slot></slot>
      </restful-form>
    `;
  }

  get next() {
    let query = new URLSearchParams(document.location.search);
    return query.get("next");
  }

  constructor() {
    super();

    this.addEventListener(
      "mu-rest-form:created",
      (event: Event) => {
        const detail = (event as CustomEvent).detail;
        const { token } = detail.created;
        const redirect =   "/app/profile/" +detail.id.username;
        console.log("Login successful", detail, redirect);

        Events.relay(event, "auth:message", [
          "auth/signin",
          { token, redirect}
        ]);
      }
    );
  }
}
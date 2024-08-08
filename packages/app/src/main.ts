// Define any views as components needed for the app
import { Auth, Store, define, History, Switch, Rest} from "@calpoly/mustang";
import { Msg } from "./messages";
import { Model, init } from "./model";
import update from "./update";
import { HeaderElement } from "./components/header"
import { UserLogisticsElement} from "./views/user-logistics";
import { UserLogisticsFormElement} from "./views/user-logistics-form";
import {html} from "lit";

// This is where the store is configured
const routes = [
  {
    path: "/app/profile/:id",
    view: (params: Switch.Params) => html`
      <user-logistics id=${params.id}></user-logistics>
    `
  },
  {
    path: "/app/profileform/:id",
    view: (params: Switch.Params) => html`
      <user-logistics-form id=${params.id}></user-logistics-form>
    `
  },
  {
    path: "/app",
    view: () => html`
      <login-view></login-view>
    `
  },
  {
    path: "/",
    redirect: "/app/profile/${params.id}"
  }
];



define({
  "mu-auth": Auth.Provider,
  "mu-history": History.Provider,
  "mu-store": class AppStore extends Store.Provider<
    Model,
    Msg
  > {
    constructor() {
      super(update, init, "blazing:auth");
    }
  },
  "mu-switch": class AppSwitch extends Switch.Element {
    constructor() {
      super(routes, "blazing:history", "blazing:auth");
    }
  },
  "custom-header": HeaderElement,
  "user-logistics-form": UserLogisticsFormElement,
  "user-logistics": UserLogisticsElement,
  "restful-form": Rest.FormElement
});
import { prepareTemplate } from "./prepare-template.js";
import { loadJSON } from "./load-json.js";
import {Auth, Observer} from "@calpoly/mustang";

export class LogisticsElement extends HTMLElement {

    get src(){
        return this.getAttribute("src");
    }
  static styles = `
  * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    dl {
        align-items: start;
        display: grid;
        grid-template-columns: [start] max-content 1fr [end];
    }
    
    dt {
        font-weight: bold;
        grid-column: [start];
    }
    
    dd {
        grid-column: [end];
        margin-left: var(--size-type-small);
        margin-bottom: var(--size-type-small);
    }

    section > * {
        margin: var(--size-type-small);
        padding: var(--size-type-small); 
    }
    
    section {
        background-color: var(--color-primary-accent);
    }
    
    section *:not(h1, h2, h3, h4, h5, button) {
        background-color: var(--color-primary-content);
    }

    h3 {
        color: var(--color-header-text);
    }

  `;

  static template = prepareTemplate(`
    <template>
      <section>
        <h3>Logistics</h3>

        <dl>
            <dt>id</dt>
            <dd><slot name="id"></slot></dd>

            <dt>First Name</dt>
            <dd><slot name="nameFirst"></slot></dd>

            <dt>Last Name</dt>
            <dd><slot name="nameLast"></slot></dd>

            <dt>Age </dt>
            <dd><slot name="age"></slot></dd>

            <dt>Zip Codes</dt>
            <dd><slot name="zipCodes"></slot></dd>

            <dt>Budget</dt>
            <dd><slot name="budget"></slot></dd>

            <dt>Max Housemates</dt>
            <dd><slot name="maxHousemates"></slot></dd>

            <dt>Max Roomates</dt>
            <dd><slot name="maxRoomates"></slot></dd>

            <dt>Cleanliness</dt>
            <dd><slot name="cleanliness"></slot></dd>
        </dl>

        </section>

        <style>${LogisticsElement.styles}</style>
    </template>
  `);

  get form() {
    return this.shadowRoot.querySelector("restful-form");
  }


    _authObserver = new Observer(this, "roomnovel:auth");

    get authorization() {
        console.log("Authorization for user, ", this._user);
        return (
        this._user?.authenticated && {
            Authorization: `Bearer ${this._user.token}`
        });
    }

    connectedCallback() {
        this._authObserver.observe(({ user }) => {
        this._user = user;
    
        if (this.src) {
            loadJSON(this.src, this, renderSlots, this.authorization );
        }
        });
    }


    constructor() {
    super();

    this.attachShadow({ mode: "open" }).appendChild(
        LogisticsElement.template.cloneNode(true)
    );
    }
}

function renderSlots(json) {
    const entries = Object.entries(json);
    const slot = ([key, value]) => {

        // default case for now:
        let result = `<span slot="${key}">${value}</span>`

        // only list case
        if(typeof value == "object" && Array.isArray(value)){
            result =  `<span slot="${key}">`;
            for(let i = 0; i < value.length; ++i){
                result = result + `<div>${value[i]}</div>`;
            }
            result = result + `</span>`;

        }
        return result;
    };
  
    return entries.map(slot).join("\n");
  }


customElements.define("user-logistics", LogisticsElement);
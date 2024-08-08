import {define, View, Rest} from "@calpoly/mustang";
import {css, html} from "lit";
import {property} from "lit/decorators.js";
import {Profile} from "server/models";
import {Msg} from "../messages";
import {Model} from "../model";

import { UserLogisticsFormElement } from "./user-logistics-form";


define({ "restful-form": Rest.FormElement });


export class UserLogisticsElement extends View<Model, Msg> {

    static uses = define({
        "user-logistics-form": UserLogisticsFormElement,
      });

    @property({attribute: "id", reflect: true})
    id="";

    @property({ reflect: true })
    get edit(): boolean {
      if (document.location?.search) {
        const params = new URLSearchParams(document.location?.search);
        return params.has("edit");
      }
      return false;
    }

    @property()
    get profile(): Profile | undefined {
        /*this.model is the model provided by mu-store */
        return this.model.profile;
    }

    constructor() {
        super("blazing:model");
        /* Must match provides attribute on mu-store */
    }


    attributeChangedCallback(name: string, oldValue: string, newValue: string){
        if (
            name === "id" &&
            oldValue !== newValue &&
            newValue
        ) {
            this.dispatchMessage([
                "profile/select", {id: newValue}
            ]);
        }
    }
        
        
    render(){
        console.log("PROFILE:");
        console.log(this.profile);
        const{id, nameFirst, nameLast, age, zipCodes, budget, maxHousemates, maxRoomates, cleanliness} = this.profile || {};
        let zipCodeListElements;
        if(zipCodes)
            zipCodeListElements = zipCodes.map(
                (s) => html`<li>${s}</li>`
            );

        let maxPeople;
        if(this.profile){
            maxPeople = this.profile.maxHousemates + this.profile.maxRoomates;
        }

        return html`
        <article>
            <section>
            <h3>Logistics</h3>
            
            <dl>
                <dt>id</dt>
                <dd>${id}</dd>

                <dt>First Name</dt>
                <dd>${nameFirst}</dd>

                <dt>Last Name</dt>
                <dd>${nameLast}</dd>

                <dt>Age </dt>
                <dd>${age}</dd>

                <dt>Zip Codes</dt>
                <dd><ul>${zipCodeListElements}</ul></dd>

                <dt>Budget</dt>
                <dd>${budget}</dd>

                <dt>Max Housemates</dt>
                <dd>${maxHousemates}</dd>

                <dt>Max Roomates</dt>
                <dd>${maxRoomates}</dd>

                <dt>Max People</dt>
                <dd>${maxPeople}</dd>

                <dt>Cleanliness</dt>
                <dd>${cleanliness}</dd>
                <dt></dt>
                <dd>
                    <a href="/app/profileform/${id}">
                        <button>Edit</button>
                    </a>
      </dd>
            </dl>


            </section>
        </article>
        `;
    }

    static styles = css`
      * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    ul {
        padding-left: 0;
    }

    li {
        list-style-position: inside;
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
        grid-template-columns: 2 [end];
    }
    
    section *:not(h1, h2, h3, h4, h5, button) {
        background-color: var(--color-primary-content);
    }

    h3 {
        color: var(--color-header-text);
    }
    `;
    
}


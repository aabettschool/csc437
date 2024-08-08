import {define, View, Rest, Form, History, Events} from "@calpoly/mustang";
import {css, html} from "lit";
import {property, state} from "lit/decorators.js";
import {Endorsement, Profile} from "server/models";
import {Msg} from "../messages";
import {Model} from "../model";


import {InputArrayElement} from "./input-array"


define({ "restful-form": Rest.FormElement });
/**
 * Difference between component and view?
 * How to put a view in a view and component in a view?
 * Where to put styling for views? is it the same as component
 */
export class UserLogisticsFormElement extends View<Model, Msg> {


    static uses = define({
        "mu-form": Form.Element,
        "input-array": InputArrayElement
      });


    @property()
    get profile(): Profile | undefined {
        /*this.model is the model provided by mu-store */
        return this.model.profile;
    }

    @state()
    maxPeople: Number | undefined;

    /*@state()
    localMaxR: number | undefined;

    @state()
    localMaxH: Number | undefined;*/

    calculateMaxPeople(){
        console.log("CALCULATING>>>")
        if(!this.profile?.maxHousemates && !this.profile?.maxRoomates){
            this.maxPeople = 0;
        } else if (!this.profile?.maxHousemates && this.profile?.maxRoomates){
            this.maxPeople = this.profile?.maxRoomates
        } else if (this.profile?.maxHousemates&& !this.profile?.maxRoomates){
            this.maxPeople = this.profile?.maxHousemates
        } else if(this.profile?.maxHousemates && this.profile?.maxHousemates){
            this.maxPeople = +this.profile?.maxHousemates + +this.profile?.maxRoomates;
       }
    }

    updateLocalR(e: InputEvent){
        if(this.profile){
            this.profile.maxRoomates = parseInt((<HTMLInputElement> e.target).value);
        }
        Events.relay(e, "maxPeople:change");
    }

    updateLocalH(e: InputEvent){
        if(this.profile){
            this.profile.maxHousemates = parseInt((<HTMLInputElement> e.target).value);
        }
        Events.relay(e, "maxPeople:change");
    }


    constructor() {
        super("blazing:model");
        /* Must match provides attribute on mu-store */
        this.addEventListener(
            "maxPeople:change", ()=> {
                this.calculateMaxPeople();
        });

        /*this.addEventListener("keyup", () =>{
            if(this.profile){
                            /*if(this.profile){
                const localMaxH = ( <HTMLInputElement> document.getElementById("localMaxH"))?.value;
                const localMaxR = ( <HTMLInputElement> document.getElementById("localMaxR"))?.value;
                console.log(localMaxH);
                console.log(localMaxR);
                console.log("hello world!");
                if(!localMaxH && !localMaxR){
                    this.maxPeople = 0;
                } else if (!localMaxH && localMaxR){
                    this.maxPeople = parseInt(localMaxR)
                } else if (localMaxH && !localMaxR){
                    this.maxPeople = parseInt(localMaxH)
                } else if(localMaxH && localMaxR){
                    this.maxPeople = parseInt(localMaxH) + parseInt(localMaxR);
                    console.log("");
                }
                this.calculateMaxPeople(this.localMaxH, this.localMaxR);
                console.log(
                    "Addition: " + this.profile.maxHousemates + " + " 
                    + this.profile.maxRoomates + " = " + this.maxPeople 
                
                )
            }
        })*/
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

    _handleSubmit(event: Form.SubmitEvent<Profile>) {
        this.dispatchMessage([
          "profile/save",
          {
            id: this.id,
            profile: event.detail,
            onSuccess: () =>
              History.dispatch(this, "history/navigate", {
                href: `/app/profile/${this.id}`
              }),
            onFailure: (error: Error) =>
              console.log("ERROR:", error)
          }
        ]);
      }

    render() {
        this.calculateMaxPeople();
        return (
             html `
             <style></style>
        <article>
        <section>
            <h3>Logistics</h3>
        <div>
        <mu-form .init=${this.profile} 
        @mu-form:submit=${(
        event: Form.SubmitEvent<Profile>
      ) => this._handleSubmit(event)}>
            <h3 slot="title">Logistics Form</h3>
            <label>
                <span>First Name</span>
                <input name="nameFirst">
            </label>
            <label>
                <span>Last Name</span>
                <input name="nameLast">
            </label>
            <label>
                <span>Age</span>
                <input name="age">
            </label>
            <label>
                <span>Zip Codes</span>
                <input-array name="zipCodes">
                <span slot="label-add">Add zip code</span>
                </input-array>
            </label>        
            <label>
                <span>Budget</span>
                <input name="budget">
            </label>
            <label>
                <span>Max Housemates</span>
                <input name="maxHousemates" id="localMaxH"
                @change=${this.updateLocalH}
                >
            </label>
            <label>
                <span>Max Roommates</span>
                <input name="maxRoomates"
                @change=${this.updateLocalR}
             >
            </label>
            <label>
                <span>Max People</span>
                <input disabled = "true", value = ${this.maxPeople}>
            </label>
            <label>
                <span>Cleanliness</span>
                <input name="cleanliness">
            </label>
        </mu-form>
        </div>
        </section>
        </article>
    `);
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
    }

    div {
        
        background-color: var(--color-primary-content);
    }
  
  mu-form form{
      grid-template-columns: [start] [label] 1fr [input] 3fr 1fr [end];
  }

  .page {
    display: grid;
    grid-template-columns: [start] repeat(5, 1fr) [end];
    gap: var(--page-grid-gap);
    padding: 0;
}



  h3 {
      color: var(--color-header-text);
  }
  `;
    
    
}

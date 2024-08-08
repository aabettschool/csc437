import {
    Events,
    View,
  } from "@calpoly/mustang";
  import { css, html } from "lit";
  import { Msg } from "../messages";
  import { Model } from "../model";

export class HeaderElement extends View<Model, Msg> {

    
    render(){
        return html`
        <header>
            <h1 class="header">RoomNovel: A Novel Way To Find Roommates</h1>
            <span class="header">
                <label 
                @change=${toggleDarkMode}
                     class="header">             
                    <input type="checkbox" autocomplete="off" />
                    Light Mode
                </label>

                <a class="header"
                    href="#"
                    @click=${signOutUser}>
                    <button>Sign out</button>
                </a>
            </span>
        </header>`;
    }

    static styles = css`
    header {
        display: flex;    
        flex-basis: min-content;
        background-color: var(--color-header-background);
        color: var(--color-header-text);
        justify-content: space-between;
        align-items: baseline;
        padding: var(--size-type-small);
    }
    `;
    
}


type Checkbox = HTMLInputElement & {checked: boolean};
document.body.addEventListener(
    "dark-mode:toggle",
    (event) => {
        const page = event.currentTarget as HTMLElement;
        const checked = (event as CustomEvent).detail.checked;
        page.classList.toggle("light-mode", checked);
    }
)


function toggleDarkMode(ev: InputEvent){
    const target = ev.target as Checkbox;
    const checked = target.checked;

    Events.relay(ev, "dark-mode:toggle", {checked});
}

function signOutUser(ev: Event) {
    Events.relay(ev, "auth:message", ["auth/signout"]);
}

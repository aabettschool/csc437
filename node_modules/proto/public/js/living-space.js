import { prepareTemplate } from "./prepare-template.js";

class LivingSpace extends HTMLElement {
    static template = prepareTemplate(`
    <template>
    <div class="flex">
        <dl>
            <dt>Home Name</dt>
            <dd><slot name="name"></slot></dd>
            <dt>Type</dt>
            <dd><slot name="type"></slot></dd>
            <dt>My Housemates</dt>
            <dd><slot name="housemates"></slot></dd>
            <dt>My Roommates</dt>
            <dd><slot name="roommates"></slot></dd>
            <dt>Total Open Spots</dt>
            <dd><slot name="open-spots-total"></slot></dd>
            <dt>My Room Open Spots</dt>
            <dd><slot name="open-spots-my-room"></slot></dd>
        </dl>
        <dl class="flex_gap">
            <dt>My Room Name</dt>
            <dd><slot name="my-room-name"></slot></dd>
            <dt>My Cost</dt>
            <dd><slot name="my-cost"></slot></dd>
            <dt>Amenities</dt>
            <dd><slot name="amenities"></slot></dd>
            <dt>Bathrooms</dt>
            <dd><slot name="count-bathroom"></slot></dd>
        </dl>
        <slot name="buttons"></slot>
    </div>
    <style>
        @import url("/styles/reset.css");
        @import url("/styles/tokens.css");
        @import url("/styles/page.css");
    </style>
    </template>`);

    constructor() {
        super();
        this.attachShadow({mode:"open"}).appendChild(LivingSpace.template.cloneNode(true));
    }
}

customElements.define("living-space", LivingSpace)
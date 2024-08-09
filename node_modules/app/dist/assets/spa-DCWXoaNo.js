import{a as _,V as z,x as n,i as $,e as y,u as E,f as A,s as j,d as g,r as R,b as F,h as H,c as I,_ as S}from"./lit-element-D86FuxuS.js";const D={};function N(a,t,e){switch(a[0]){case"profile/save":k(a[1],e).then(s=>t(i=>({...i,profile:s}))).then(()=>{const{onSuccess:s}=a[1];s&&s()}).catch(s=>{const{onFailure:i}=a[1];i&&i(s)});break;case"profile/select":T(a[1],e).then(s=>t(i=>({...i,profile:s})));break;default:const r=a[0];throw new Error(`Unhandled Auth message "${r}"`)}}function k(a,t){return fetch(`/api/profiles/${a.id}`,{method:"PUT",headers:{"Content-Type":"application/json",..._.headers(t)},body:JSON.stringify(a.profile)}).then(e=>{if(e.status===200)return e.json;throw new Error(`Failed to save profile for ${a.id}`)}).then(e=>{if(e)return e})}function T(a,t){return fetch(`/api/profiles/${a.id}`,{headers:_.headers(t)}).then(e=>{if(e.status===200)return e.json()}).then(e=>{if(e)return console.log("Profile:",e),e})}const M=class M extends z{render(){return n`
        <header>
            <h1 class="header">RoomNovel: A Novel Way To Find Roommates</h1>
            <span class="header">
                <label 
                @change=${q}
                     class="header">             
                    <input type="checkbox" autocomplete="off" />
                    Light Mode
                </label>

                <a class="header"
                    href="#"
                    @click=${U}>
                    <button>Sign out</button>
                </a>
            </span>
        </header>`}};M.styles=$`
    header {
        display: flex;    
        flex-basis: min-content;
        background-color: var(--color-header-background);
        color: var(--color-header-text);
        justify-content: space-between;
        align-items: baseline;
        padding: var(--size-type-small);
    }
    `;let w=M;document.body.addEventListener("dark-mode:toggle",a=>{const t=a.currentTarget,e=a.detail.checked;t.classList.toggle("light-mode",e)});function q(a){const e=a.target.checked;y.relay(a,"dark-mode:toggle",{checked:e})}function U(a){y.relay(a,"auth:message",["auth/signout"])}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const B=a=>(t,e)=>{e!==void 0?e.addInitializer(()=>{customElements.define(a,t)}):customElements.define(a,t)};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Z={attribute:!0,type:String,converter:E,reflect:!1,hasChanged:A},G=(a=Z,t,e)=>{const{kind:r,metadata:s}=e;let i=globalThis.litPropertyMetadata.get(s);if(i===void 0&&globalThis.litPropertyMetadata.set(s,i=new Map),i.set(e.name,a),r==="accessor"){const{name:o}=e;return{set(l){const d=t.get.call(this);t.set.call(this,l),this.requestUpdate(o,d,a)},init(l){return l!==void 0&&this.P(o,void 0,a),l}}}if(r==="setter"){const{name:o}=e;return function(l){const d=this[o];t.call(this,l),this.requestUpdate(o,d,a)}}throw Error("Unsupported decorator location: "+r)};function p(a){return(t,e)=>typeof e=="object"?G(a,t,e):((r,s,i)=>{const o=s.hasOwnProperty(i);return s.constructor.createProperty(i,o?{...r,wrapped:!0}:r),o?Object.getOwnPropertyDescriptor(s,i):void 0})(a,t,e)}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function J(a){return p({...a,state:!0,attribute:!1})}var W=Object.defineProperty,K=Object.getOwnPropertyDescriptor,C=(a,t,e,r)=>{for(var s=r>1?void 0:r?K(t,e):t,i=a.length-1,o;i>=0;i--)(o=a[i])&&(s=(r?o(t,e,s):o(s))||s);return r&&s&&W(t,e,s),s};let c=class extends j{constructor(){super(...arguments),this.name="",this.value=[]}render(){const a=(t,e)=>n`
        <input
          @change=${r=>this._handleChange(r,e)}
          name=${[this.name,e].join(".")}
          .value=${t} />
        <button
          class="remove"
          @click=${()=>this._removeInput(e)}>
          Remove
        </button>
      `;return n`${this.value.map(a)}
      <button class="add" @click=${this._addInput}>
        + Add ${this.value.length?"another":"one"}
      </button> `}_handleChange(a,t){const r=a.target.value,s=new Event(a.type,{bubbles:!0,composed:!0});this.value[t]=r,this.dispatchEvent(s)}_addInput(){this.value=this.value.concat([""])}_removeInput(a){this.value.splice(a,1),this.requestUpdate()}};c.styles=$`
    :host {
      display: grid;
      grid-template-columns: 1fr auto;
    }
    input,
    button {
      font: inherit;
      line-height: inherit;
      margin: 0.25em;
    }
    input {
      grid-column: 1;
    }
    button.remove {
      grid-column: 2;
    }
    button.add {
      grid-column: 1/2;
    }
  `;C([p()],c.prototype,"name",2);C([p()],c.prototype,"value",2);c=C([B("input-array")],c);var Q=Object.defineProperty,X=Object.getOwnPropertyDescriptor,L=(a,t,e,r)=>{for(var s=r>1?void 0:r?X(t,e):t,i=a.length-1,o;i>=0;i--)(o=a[i])&&(s=(r?o(t,e,s):o(s))||s);return r&&s&&Q(t,e,s),s};g({"restful-form":R.FormElement});const x=class x extends z{get profile(){return this.model.profile}calculateMaxPeople(){var t,e,r,s,i,o,l,d,b,h,f,v;console.log("CALCULATING>>>"),!((t=this.profile)!=null&&t.maxHousemates)&&!((e=this.profile)!=null&&e.maxRoomates)?this.maxPeople=0:!((r=this.profile)!=null&&r.maxHousemates)&&((s=this.profile)!=null&&s.maxRoomates)?this.maxPeople=(i=this.profile)==null?void 0:i.maxRoomates:(o=this.profile)!=null&&o.maxHousemates&&!((l=this.profile)!=null&&l.maxRoomates)?this.maxPeople=(d=this.profile)==null?void 0:d.maxHousemates:(b=this.profile)!=null&&b.maxHousemates&&((h=this.profile)!=null&&h.maxHousemates)&&(this.maxPeople=+((f=this.profile)==null?void 0:f.maxHousemates)+ +((v=this.profile)==null?void 0:v.maxRoomates))}updateLocalR(t){this.profile&&(this.profile.maxRoomates=parseInt(t.target.value)),y.relay(t,"maxPeople:change")}updateLocalH(t){this.profile&&(this.profile.maxHousemates=parseInt(t.target.value)),y.relay(t,"maxPeople:change")}constructor(){super("blazing:model"),this.addEventListener("maxPeople:change",()=>{this.calculateMaxPeople()})}attributeChangedCallback(t,e,r){t==="id"&&e!==r&&r&&this.dispatchMessage(["profile/select",{id:r}])}_handleSubmit(t){this.dispatchMessage(["profile/save",{id:this.id,profile:t.detail,onSuccess:()=>H.dispatch(this,"history/navigate",{href:`/app/profile/${this.id}`}),onFailure:e=>console.log("ERROR:",e)}])}render(){return this.calculateMaxPeople(),n`
             <style></style>
        <article>
        <section>
            <h3>Logistics</h3>
        <div>
        <mu-form .init=${this.profile} 
        @mu-form:submit=${t=>this._handleSubmit(t)}>
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
    `}};x.uses=g({"mu-form":F.Element,"input-array":c}),x.styles=$`
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
  `;let u=x;L([p()],u.prototype,"profile",1);L([J()],u.prototype,"maxPeople",2);var Y=Object.defineProperty,V=Object.getOwnPropertyDescriptor,O=(a,t,e,r)=>{for(var s=r>1?void 0:r?V(t,e):t,i=a.length-1,o;i>=0;i--)(o=a[i])&&(s=(r?o(t,e,s):o(s))||s);return r&&s&&Y(t,e,s),s};g({"restful-form":R.FormElement});const P=class P extends z{constructor(){super("blazing:model"),this.id=""}get edit(){var t,e;return(t=document.location)!=null&&t.search?new URLSearchParams((e=document.location)==null?void 0:e.search).has("edit"):!1}get profile(){return this.model.profile}attributeChangedCallback(t,e,r){t==="id"&&e!==r&&r&&this.dispatchMessage(["profile/select",{id:r}])}render(){console.log("PROFILE:"),console.log(this.profile);const{id:t,nameFirst:e,nameLast:r,age:s,zipCodes:i,budget:o,maxHousemates:l,maxRoomates:d,cleanliness:b}=this.profile||{};let h;i&&(h=i.map(v=>n`<li>${v}</li>`));let f;return this.profile&&(f=this.profile.maxHousemates+this.profile.maxRoomates),n`
        <article>
            <section>
            <h3>Logistics</h3>
            
            <dl>
                <dt>id</dt>
                <dd>${t}</dd>

                <dt>First Name</dt>
                <dd>${e}</dd>

                <dt>Last Name</dt>
                <dd>${r}</dd>

                <dt>Age </dt>
                <dd>${s}</dd>

                <dt>Zip Codes</dt>
                <dd><ul>${h}</ul></dd>

                <dt>Budget</dt>
                <dd>${o}</dd>

                <dt>Max Housemates</dt>
                <dd>${l}</dd>

                <dt>Max Roomates</dt>
                <dd>${d}</dd>

                <dt>Max People</dt>
                <dd>${f}</dd>

                <dt>Cleanliness</dt>
                <dd>${b}</dd>
                <dt></dt>
                <dd>
                    <a href="/app/profileform/${t}">
                        <button>Edit</button>
                    </a>
      </dd>
            </dl>


            </section>
        </article>
        `}};P.uses=g({"user-logistics-form":u}),P.styles=$`
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
    `;let m=P;O([p({attribute:"id",reflect:!0})],m.prototype,"id",2);O([p({reflect:!0})],m.prototype,"edit",1);O([p()],m.prototype,"profile",1);const ee=[{path:"/app/profile/:id",view:a=>n`
      <user-logistics id=${a.id}></user-logistics>
    `},{path:"/app/profileform/:id",view:a=>n`
      <user-logistics-form id=${a.id}></user-logistics-form>
    `},{path:"/app",view:()=>n`
      <login-view></login-view>
    `},{path:"/",redirect:"/app/profile/${params.id}"}];g({"mu-auth":_.Provider,"mu-history":H.Provider,"mu-store":class extends I.Provider{constructor(){super(N,D,"blazing:auth")}},"mu-switch":class extends S.Element{constructor(){super(ee,"blazing:history","blazing:auth")}},"custom-header":w,"user-logistics-form":u,"user-logistics":m,"restful-form":R.FormElement});

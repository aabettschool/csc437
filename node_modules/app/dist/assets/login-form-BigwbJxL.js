import{a as d,O as m,d as f,s as p,x as b,e as g}from"./lit-element-D86FuxuS.js";const w=new DOMParser;function v(r,...t){const e=r.map((a,o)=>o?[t[o-1],a]:[a]).flat().join(""),i=w.parseFromString(e,"text/html"),s=i.head.childElementCount?i.head.children:i.body.children,n=new DocumentFragment;return n.replaceChildren(...s),n}function y(r){const t=r.firstElementChild,e=t&&t.tagName==="TEMPLATE"?t:void 0;return{attach:i};function i(s,n={mode:"open"}){const a=s.attachShadow(n);return e&&a.appendChild(e.content.cloneNode(!0)),a}}const h=class h extends HTMLElement{constructor(){super(),this._state={},this._user=new d.User,this._authObserver=new m(this,"blazing:auth"),y(h.template).attach(this),this.form&&this.form.addEventListener("submit",t=>{if(t.preventDefault(),this.src||this.action){if(console.log("Submitting form",this._state),this.action)this.action(this._state);else if(this.src){const e=this.isNew?"POST":"PUT",i=this.isNew?"created":"updated",s=this.isNew?this.src.replace(/[/][$]new$/,""):this.src;_(s,this._state,e,this.authorization).then(n=>c(n,this)).then(n=>{const a=`mu-rest-form:${i}`,o=new CustomEvent(a,{bubbles:!0,composed:!0,detail:{method:e,[i]:n,id:this._state,url:s}});this.dispatchEvent(o)})}}}),this.addEventListener("change",t=>{const e=t.target;if(e){const i=e.name,s=e.value;i&&(this._state[i]=s)}})}get src(){return this.getAttribute("src")}get isNew(){return this.hasAttribute("new")}set init(t){this._state=t||{},c(this._state,this)}get form(){var t;return(t=this.shadowRoot)==null?void 0:t.querySelector("form")}get authorization(){var t;return(t=this._user)!=null&&t.authenticated?{Authorization:`Bearer ${this._user.token}`}:{}}connectedCallback(){this._authObserver.observe(({user:t})=>{t&&(this._user=t,this.src&&l(this.src,this.authorization).then(e=>{this._state=e,c(e,this)}))})}attributeChangedCallback(t,e,i){switch(t){case"src":this.src&&i&&i!==e&&!this.isNew&&l(this.src,this.authorization).then(s=>{this._state=s,c(s,this)});break;case"new":i&&(this._state={},c({},this));break}}};h.observedAttributes=["src","new","action"],h.template=v`
    <template>
      <form autocomplete="off">
        <slot></slot>
        <slot name="submit">
          <button type="submit">Submit</button>
        </slot>
      </form>
      <slot name="delete"></slot>
      <style>
        form {
          display: grid;
          gap: var(--size-spacing-medium);
          grid-template-columns: [start] 1fr [label] 1fr [input] 3fr 1fr [end];
        }
        ::slotted(label) {
          display: grid;
          grid-column: label / end;
          grid-template-columns: subgrid;
          gap: var(--size-spacing-medium);
        }
        button[type="submit"] {
          grid-column: input;
          justify-self: start;
        }
      </style>
    </template>
  `;let u=h;function l(r,t){return fetch(r,{headers:t}).then(e=>{if(e.status!==200)throw`Status: ${e.status}`;return e.json()}).catch(e=>console.log(`Failed to load form from ${r}:`,e))}function c(r,t){const e=Object.entries(r);for(const[i,s]of e){const n=t.querySelector(`[name="${i}"]`);if(n){const a=n;switch(a.type){case"checkbox":const o=a;o.checked=!!s;break;default:a.value=s;break}}}return r}function _(r,t,e="PUT",i={}){return fetch(r,{method:e,headers:{"Content-Type":"application/json",...i},body:JSON.stringify(t)}).then(s=>{if(s.status!=200&&s.status!=201)throw`Form submission failed: Status ${s.status}`;return s.json()}).catch(s=>console.log("Error submitting form:",s))}f({"restful-form":u});class S extends p{render(){return b`
      <restful-form new src="/auth/login">
        <slot></slot>
      </restful-form>
    `}get next(){return new URLSearchParams(document.location.search).get("next")}constructor(){super(),this.addEventListener("mu-rest-form:created",t=>{const e=t.detail,{token:i}=e.created,s="/app/profile/"+e.id.username;console.log("Login successful",e,s),g.relay(t,"auth:message",["auth/signin",{token:i,redirect:s}])})}}export{S as L};

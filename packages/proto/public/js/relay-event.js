export function relayEvent(event, HTMLElement, detail){
    const relay = event.currentTarget;
    const customEvent = new CustomEvent(HTMLElement, {
        bubbles: true,
        composed: true,
        detail
    })
    relay.dispatchEvent(customEvent);
    event.stopPropagation();
}


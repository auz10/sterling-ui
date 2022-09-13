import { LitElement, css, html } from "lit";
import { customElement, property } from "lit/decorators.js";
// import { colours } from "@sterling/ui.styles.colours";
// import { style } from "./avatar.style";

@customElement("sterling-avatar")
export class Avatar extends LitElement {
  static styles = css``

  @property({ type: String }) image = "";

  render() {
    return html`<div><img src="${this.image}" /></div>`;
  }
}

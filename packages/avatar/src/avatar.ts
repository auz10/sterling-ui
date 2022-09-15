import { LitElement, css, html } from "lit";
import { customElement, property } from "lit/decorators.js";
import { style } from "./avatar.style";

@customElement("sterling-avatar")
export class Avatar extends LitElement {
  static styles = style;

  @property({ type: String }) image = "";

  render() {
    return html`<div><img src="${this.image}" /></div>`;
  }
}

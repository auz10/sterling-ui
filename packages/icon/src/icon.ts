import { LitElement, css, html } from "lit";
import { customElement, property } from "lit/decorators.js";
import { style } from "./icon.style";

@customElement("sterling-icon")
export class Icon extends LitElement {
  static styles = [style];

  @property({ type: String }) icon = "";

  render() {
    return html`<img src="../icons/dist/${this.icon}" />`;
  }
}

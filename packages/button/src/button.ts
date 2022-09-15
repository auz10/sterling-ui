import { LitElement, html } from "lit";
import { customElement, property } from "lit/decorators.js";
import { classMap } from "lit/directives/class-map.js";
import { style } from "./button.style";
import { colours } from "../../../shared/colours";
import { layout } from "../../../shared/layout";

export enum ButtonType {
  Primary = "primary",
  Standard = "standard",
  Secondary = "secondary",
  Utility = "utility",
}

@customElement("sterling-button")
export class Button extends LitElement {
  static styles = [colours, layout, style];

  @property({ type: String, reflect: true }) text = "";

  @property({ type: ButtonType }) type = ButtonType.Primary;

  @property({ type: Boolean }) active = false;

  @property({ type: String }) span: string = "";

  @property({ type: Boolean }) disabled = false;

  render() {
    return html`<button
      class=${classMap({
        button: true,
        "button--span": this.span === "true",
        [`button--${this.type}`]: true,
      })}
      ?disabled=${this.disabled}
    >
      <div
        class=${classMap({
          button__text: true,
          "text-lrg":
            this.type === ButtonType.Primary ||
            this.type === ButtonType.Standard,
          "text-sml": this.type === ButtonType.Secondary,
          "text-xsml": this.type === ButtonType.Utility,
          "text-bold": true,
        })}
      >
        ${this.text}
      </div>
    </button>`;
  }
}

import { css } from "lit";

export const colours = css`
  :host {
    --str-background-dark: var(--background-dark, #2a2a2a);
    --str-item-dark: var(--item-dark, #121212);
    --str-item-light: var(--item-light, #fff);
    --str-item-light-rgb: var(--item-light-rgb, 255, 255, 255);
    --str-item-border-dark: var(--item-border-dark, #d2d0ce);
    --str-item-border: var(--item-border, #eaeaea);
    --str-item-border-light: var(--item-border-light, #f3f2f1);
    --str-item-disabled: var(--item-disabled, #d2d0ce);
    --str-background-disabled: var(--background-disabled, #f3f2f1);

    --str-brand-primary: var(--brand-primary, #6f3369);
    --str-brand-primary-rgb: var(--brand-primary-rgb, 111, 51, 105);
    --str-brand-secondary: var(--brand-secondary, #6f3369);
    --str-brand-secondary-rgb: var(--brand-secondary-rgb, 111, 51, 105);
    --str-brand-tertiary: var(--brand-tertiary, #6f3369);
    --str-brand-tertiary-rgb: var(--brand-tertiary-rgb, 111, 51, 105);

    --str-text-on-brand: var(--text-on-brand, #fff);
    --str-text-primary: var(--text-primary, #121212);
    --str-text-primary-inverse: var(--text-primary-inverse, #fff);
    --str-text-secondary: var(--text-secondary, #979797);

    --str-background-primary: var(--background-primary, #ffffff);
    --str-background-primary-rgb: var(--background-primary-rgb, 255, 255, 255);
    --str-background-primary-inverse: var(
      --background-primary-inverse,
      #121212
    );
    --str-background-secondary: var(--background-secondary, #eff2f7);
    --str-background-secondary-rgb: var(
      --background-secondary-rgb,
      239,
      242,
      247
    );
    --str-background-secondary-inverse: var(
      --background-secondary-inverse,
      #2a2a2a
    );
  }
`;

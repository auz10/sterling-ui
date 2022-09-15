import { css } from "lit";

export const style = css`
  :host {
    --str-button-background: var(
      --button-background,
      var(--str-background-dark)
    );
    --str-button-background-hover: var(
      --button-background-hover,
      var(--brand-primary)
    );
    --str-button-color: var(--button-color, var(--item-light));
    --str-button-color-hover: var(--button-color-hover, var(--item-light));

    display: contents;
  }

  .button {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    border-style: solid;
    border-width: 1px;
  }

  .button--span {
    width: 100%;
  }

  .button__text {
    font-family: var(--str-font-primary);
  }

  /* Primary */
  .button--primary {
    min-height: 44px;
    padding: var(--str-spacer-sml) var(--str-spacer-lrg);
    background-color: var(--str-button-background);
    border: 0;
    border-radius: var(--str-border-radius-primary);
    color: var(--str-item-light);
  }

  .button--primary:hover,
  .button--primary:focus {
    background-color: var(--str-brand-primary);
  }

  /* Secondary */
  .button--secondary {
    min-height: 32px;
    padding: var(--str-spacer-xsml) var(--str-spacer-lrg);
    background-color: var(--str-background-secondary);
    border: 0;
    border-radius: var(--str-border-radius-sm);
    color: var(--str-text-primary);
  }

  .button--secondary:hover,
  .button--secondary:focus {
    background-color: rgba(var(--str-brand-primary-rgb), 0.5);
  }

  /* Standard */
  .button--standard {
    min-height: 44px;
    padding: var(--str-spacer-sml) var(--str-spacer-lrg);
    background-color: var(--str-background-primary);
    border-color: var(--str-text-primary);
    border-radius: var(--str-border-radius-primary);
    color: var(--str-text-primary);
  }

  .button--standard:hover,
  .button--standard:focus {
    background-color: var(--str-brand-primary);
    color: var(--str-item-light);
    border-color: var(--str-button-background-hover);
  }

  /* Utility */
  .button--utility {
    padding: var(--str-spacer-xsml) var(--str-spacer-sml);
    background-color: var(--str-background-primary);
    border: 0;
    border-radius: var(--str-border-radius-sm);
    color: var(--str-text-primary);
  }

  .button--utility:hover,
  .button--utility:focus {
    background-color: var(--str-background-secondary);
  }

  /* Disabled */
  .button:disabled {
    background-color: var(--str-background-disabled);
    color: var(--str-item-disabled);
    cursor: not-allowed;
  }
`;

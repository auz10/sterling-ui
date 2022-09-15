import { css } from "lit";

export const layout = css`
  :host {
    --str-spacer-xsml: var(--spacer-xsml, 4px);
    --str-spacer-sml: var(--spacer-sml, 8px);
    --str-spacer-med: var(--spacer-med, 12px);
    --str-spacer-lrg: var(--spacer-lrg, 16px);
    --str-spacer-xlrg: var(--spacer-xlrg, 20px);
    --str-spacer-xxlrg: var(--spacer-xxlrg, 24px);

    --str-border-radius-primary: var(--border-radius-primary, 10px);
    --str-border-radius-sm: var(--border-radius-sm, 5px);
  }
`;

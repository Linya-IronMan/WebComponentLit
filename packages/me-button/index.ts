
import { customElement, property } from 'lit/decorators.js';
import { html, LitElement, css } from "lit"
import { CommonStyles } from "../style/variables";

@customElement("me-button")
export class MeButton extends LitElement {
  @property({ type: String, reflect: true }) type: "primary" | "secondary" | "dashed" | "outline" | "text" = "primary";

  constructor() {
    super();
  }

  static get styles() {
    return [
      CommonStyles,
      css`
        .me-button {
          position: relative;
          display: inline-block;
          box-sizing: border-box;
          font-weight: 400;
          line-height: 1.5715;
          white-space: nowrap;
          outline: none;
          cursor: pointer;
          transition: all .1s cubic-bezier(0,0,1,1);
          -webkit-appearance: none;
          user-select: none;
        }
        .me-button-type-primary {
          color: #fff;
          background-color: rgb(var(--primary-6));
          border: 1px solid transparent;
        }
        .me-button-type-primary:hover {
          color: #fff;
          background-color: rgb(var(--primary-5));
          border-color: transparent;
        }
        .me-button-type-primary:active {
          color: #fff;
          background-color: rgb(var(--primary-7));
          border-color: transparent;
        }

        .me-button-type-secondary {
          color: var(--color-text-2);
          background-color: var(--color-secondary);
          border: 1px solid transparent;
        }
        

        .me-button-type-dashed {
          color: var(--color-text-2);
          background-color: var(--color-fill-2);
          border: 1px dashed var(--color-neutral-3);
        }

        .me-button-type-dashed:hover {
          color: var(--color-text-2);
          background-color: var(--color-fill-1);
          border: 1px dashed var(--color-neutral-2);
        }
        .me-button-type-dashed:active {
          color: var(--color-text-2);
          background-color: var(--color-fill-3);
          border: 1px dashed var(--color-neutral-4);
        }

        .me-button-type-outline {
          color: rgb(var(--primary-6));
          background-color: transparent;
          border: 1px solid rgb(var(--primary-6));
        }

        .me-button-type-text {
            color: rgb(var(--primary-6));
            background-color: transparent;
            border: 1px solid transparent;
        }
        .me-button-size-medium {
          height: 32px;
          padding: 0 15px;
          font-size: 14px;
          border-radius: var(--border-radius-small);
        }
      `
    ]
  }
  render() {
    return html`
      <button class="me-button me-button-type-${this.type}">
        <slot> button </slot>
      </button>
  `;
  }
}
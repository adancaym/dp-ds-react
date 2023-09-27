import { CSSProperties } from "react";

  /**
   * Interface for defining the CSS properties for an input component's label, input field, error message, and description.
   */
  export interface ISelectTheme {
    /**
     * CSS properties for the label of the input component.
     */
    label: CSSProperties;
    /**
     * CSS properties for the input field of the input component.
     */
    select: CSSProperties;
    /**
     * CSS properties for the error message of the input component.
     */
    error: CSSProperties;
    /**
     * CSS properties for the description of the input component.
     */
    description: CSSProperties;
  }

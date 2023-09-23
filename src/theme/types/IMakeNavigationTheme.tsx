import { CSSProperties } from "react";

/**
 * Defines the interface for the navigation theme.
 */
export interface IMakeNavigationTheme {
  /**
   * The CSS properties for the toolbar.
   */
  toolbar: CSSProperties;
  /**
   * The CSS properties for the section.
   */
  section: CSSProperties;
  /**
   * The CSS properties for the link.
   */
  link: CSSProperties;
}

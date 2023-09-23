import { CSSProperties } from "react";

/**
 * Interface for defining the styles of tabs in a tabbed component.
*/
export interface ITabsTheme {
  /**
   * Styles for the toolbar containing the tabs.
   */
  toolbar: CSSProperties;
  /**
   * Styles for an individual tab.
   */
  tab: CSSProperties;
  /**
   * Styles for the active tab.
   */
  tabActive: CSSProperties;
  /**
   * Styles for the content displayed when a tab is active.
   */
  content: CSSProperties;
}

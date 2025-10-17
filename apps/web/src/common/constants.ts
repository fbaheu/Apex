import _package from '../../package.json';

/**
 * CONSTANTS
 */
export const APP_MOUNTING_POINT = 'apex-root';

export const OVERLAY_MOUNTING_POINT = 'apex-overlay';

/**
 * [PACKAGE] getPackageName
 * @description Retrieve the current package name.
 * @example
 * <caption>Example usage of **getPackageName** method.</caption>
 *
 * ```typescript tsx
 *  const PKG_NAME = getPackageName(); // '@apex/app'
 * ```
 *
 */
export function getPackageName() {
  return _package.name;
}

/**
 * [PACKAGE] getDisplayName
 * @description Retrieve the current package display name.
 * @example
 * <caption>Example usage of **getDisplayName** method.</caption>
 *
 * ```typescript tsx
 *  const PKG_DISPLAY_NAME = getDisplayName(); // 'Apex'
 * ```
 *
 */
export function getDisplayName() {
  return _package.displayName;
}

/**
 * [PACKAGE] getVersion
 * @description Retrieve the current package version.
 * @example
 * <caption>Example usage of **getVersion** method.</caption>
 *
 * ```typescript tsx
 *  const PKG_VERSION = getVersion(); // '1.0.0'
 * ```
 *
 */
export function getVersion() {
  return _package.version;
}
